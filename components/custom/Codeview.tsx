'use client';

interface CodeContent {
  code: string;
  filePath?: string;
  [key: string]: unknown;
}

// Add new interfaces to handle the nested structure
interface FileData {
  code?: string;
  filePath?: string;
  filepath?: string;
  [key: string]: unknown;
}

interface NestedFileObject {
  [key: string]: FileData;
}

interface ProjectType {
  projectId: string;
  content: {
    description: string;
    codebase: CodeContent[] | Record<string, string | CodeContent>;
    externalPackages: { packageName: string; packageVersion: string }[];
  } | null;
  codebase: CodeContent[] | Record<string, string | CodeContent>;
}

// Define a CodeFile type to make type checking more robust
interface CodeFile {
  filePath?: string;
  code?: string;
  [key: string]: unknown;
}

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer,
  ExportIcon,
  RunIcon,
  useSandpack,
} from '@codesandbox/sandpack-react';

import JSZip from 'jszip';
import axios from 'axios';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ActionContext } from '@/context/ActionContext';
import SandPackPreviewClient from './SandPackPreviewClient';
import { DEPENDENCIES, defaultFiles_3 } from '@/data/defaultFiles';
import { Loader2Icon, CodeIcon, EyeIcon, GitBranch } from 'lucide-react';

// Add the type definition for window.arweaveWallet at the top of the file
interface ArweaveWallet {
  connect: (
    permissions: string[],
    // @ts-expect-error ignore type error
    appInfo?,
    // @ts-expect-error ignore type error
    gateway?
  ) => Promise<void>;
  disconnect: () => Promise<void>;
  getActiveAddress: () => Promise<string>;
  userTokens: () => Promise<[]>;
  tokenBalance: (tokenId: string) => Promise<number>;
}

// Extend Window interface
declare global {
  interface Window {
    arweaveWallet: ArweaveWallet;
  }
}

const SandpackDownloader = ({
  onDownload,
  disabled,
}: {
  onDownload: (arg: string) => void;
  disabled: boolean;
}) => {
  const { sandpack } = useSandpack();
  const { files: sandpackFiles } = sandpack;

  const downloadFiles = async () => {
    if (disabled) return;

    try {
      const zip = new JSZip();
      Object.entries(sandpackFiles).forEach(([filePath, fileObj]) => {
        const fileContent = fileObj.code || '';
        const relativePath = filePath.startsWith('/')
          ? filePath.slice(1)
          : filePath;
        zip.file(relativePath, fileContent);
      });

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(zipBlob);

      try {
        const link = document.createElement('a');
        link.href = url;
        link.download = 'project.zip';
        document.body.appendChild(link);
        link.click();
        toast.success('Files downloaded successfully');
      } catch (err) {
        toast.error('Download failed');
        console.error(err);
      } finally {
        // to open the codebase in the codesandbox
        // document.body.removeChild(link);
        // URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error('Error generating ZIP:', err);
      toast.error('Failed to prepare files for download');
    }
  };

  return (
    <button
      onClick={() => {
        downloadFiles();
        onDownload('export');
      }}
      disabled={disabled}
      className={cn(
        'h-5 px-2 rounded flex items-center gap-1 text-xs font-medium transition-colors text-muted-foreground hover:text-foreground',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      title="Export"
    >
      <ExportIcon />
      Export
    </button>
  );
};

const validateNpmPackage = async (packageName: string) => {
  try {
    const response = await axios.get(
      `https://registry.npmjs.org/${packageName}`
    );

    if (response?.status === 200) {
      return {
        status: true,
        name: response.data.name,
        latestVersion: response.data['dist-tags'].latest,
      };
    } else if (response?.status === 404) {
      console.warn(
        `Package validation failed for ${packageName}:`,
        response.status
      );
      return { status: false };
    }
  } catch (error) {
    // @ts-expect-error ignore type error
    console.error(`Error validating package ${packageName}:`, error.message);
    return { status: false };
  }
};

const Codeview = ({
  activeProject,
  isSaving,
  isGenerating,
  onCommit,
}: {
  activeProject: ProjectType;
  isSaving?: boolean;
  isGenerating: boolean;
  onCommit: () => void;
}) => {
  const [activeView, setActiveView] = useState('code');
  const [loading, setLoading] = useState(false);
  const { action, setAction } = useContext(ActionContext);
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(
    activeProject
  );
  const [validatedDependencies, setValidatedDependencies] = useState({});

  useEffect(() => {
    const fetchProjectCode = async (projectId: string) => {
      try {
        setLoading(true);
        const response: {
          content: {
            codebase: unknown;
            externalPackages?: {
              packageName: string;
              packageVersion: string;
            }[];
            processId?: string;
          } | null;
          codebase: unknown;
        } = await axios
          .get(
            // @ts-expect-error ignore type error
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${projectId}?walletAddress=${activeProject.walletAddress}`
          )
          .then((res) => {
            // console.log('response.data inside codeview\n\n', res.data);
            return res?.data;
          });
        console.log('API Response:', response);

        // Process the codebase based on its format
        if (response.codebase) {
          const normalizedCodebase: Record<string, CodeContent> = {};

          // Add detailed logging of codebase structure
          console.log(
            'Codebase type:',
            Array.isArray(response.codebase)
              ? 'Array'
              : typeof response.codebase
          );
          
          // Check if we have a structure like {0: {code, filePath}, 1: {code, filePath}}
          const hasNumericKeys = typeof response.codebase === 'object' && 
            !Array.isArray(response.codebase) &&
            Object.keys(response.codebase).some(key => !isNaN(Number(key)));
          
          if (hasNumericKeys) {
            // Process numeric keys format from API
            Object.values(response.codebase as Record<string, unknown>).forEach((fileObj) => {
              if (fileObj && typeof fileObj === 'object') {
                const typedObj = fileObj as FileData;
                if ((typedObj.filePath || typedObj.filepath) && typedObj.code) {
                  const filePath = typedObj.filePath || typedObj.filepath || '';
                  const normalizedPath = filePath.startsWith('/') ? filePath : `/${filePath}`;
                  normalizedCodebase[normalizedPath] = {
                    code: typedObj.code,
                    filePath: normalizedPath
                  };
                }
              }
            });
          } else if (
            // Continue with existing logic for other formats
            typeof response.codebase === 'object' &&
            !Array.isArray(response.codebase)
          ) {
            console.log('Processing object codebase format');

            const codebaseObj = response.codebase as Record<string, unknown>;
            Object.entries(codebaseObj).forEach(([path, content]) => {
              // Skip empty or invalid paths
              if (!path) return;

              const normalizedPath = path.startsWith('/') ? path : `/${path}`;

              // Simple format: {filepath: "code string"}
              if (typeof content === 'string') {
                normalizedCodebase[normalizedPath] = {
                  code: content,
                  filePath: normalizedPath,
                };
              }
              // Object format: {filepath: {code: "content"}}
              else if (content && typeof content === 'object') {
                const contentObj = content as FileData;
                if ('code' in contentObj) {
                  normalizedCodebase[normalizedPath] = {
                    code: contentObj.code || '',
                    filePath: normalizedPath,
                  };
                }
              }
            });
          }
          // Case 2: Backend returned array format
          else if (Array.isArray(response.codebase)) {
            console.log('Processing array codebase format');

            for (const item of response.codebase) {
              if (item && typeof item === 'object') {
                // Direct file objects in array [{filePath: "path", code: "content"}]
                if (
                  ('filePath' in item || 'filepath' in item) &&
                  'code' in item
                ) {
                  const fileItem = item as FileData;
                  const filePath = fileItem.filePath || fileItem.filepath;
                  const code = fileItem.code || '';

                  if (filePath) {
                    const normalizedPath = filePath.startsWith('/')
                      ? filePath
                      : `/${filePath}`;
                    normalizedCodebase[normalizedPath] = {
                      code,
                      filePath: normalizedPath,
                    };
                  }
                }
                // Nested objects with numeric keys [{"0": {filepath: "/path", code: "content"}}]
                else {
                  const nestedObj = item as unknown as NestedFileObject;
                  Object.values(nestedObj).forEach((fileData) => {
                    if (fileData && typeof fileData === 'object') {
                      const filePath = fileData.filepath || fileData.filePath;
                      const code = fileData.code || '';

                      if (filePath) {
                        const normalizedPath = filePath.startsWith('/')
                          ? filePath
                          : `/${filePath}`;
                        normalizedCodebase[normalizedPath] = {
                          code,
                          filePath: normalizedPath,
                        };
                      }
                    }
                  });
                }
              }
            }
          }

          console.log(
            'Normalized Codebase:',
            Object.keys(normalizedCodebase).length,
            'files'
          );
          setCurrentProject({
            ...response,
            projectId: activeProject.projectId,
            codebase: normalizedCodebase,
          } as ProjectType);
        }
      } catch (error) {
        // @ts-expect-error ignore type error
        if (error.response?.data?.error === 'No code found for project') {
          toast.error('Prompt to create vibe with the code');
          return;
        }
        toast.error('Failed to load code');
        console.error('Error loading project code:', error);
      } finally {
        setLoading(false);
      }
    };

    if (activeProject?.projectId) {
      fetchProjectCode(activeProject.projectId);
    }
  }, [activeProject]);

  useEffect(() => {
    const handleCodebaseUpdate = (activeProject: ProjectType) => {
      // Handle the specific format where codebase is an object with numeric keys
      if (activeProject?.codebase && typeof activeProject.codebase === 'object' && !Array.isArray(activeProject.codebase)) {
        const normalizedCodebase: Record<string, CodeContent> = {};
        
        // Check if we have a structure like {0: {code, filePath}, 1: {code, filePath}}
        const hasNumericKeys = Object.keys(activeProject.codebase).some(key => !isNaN(Number(key)));
        
        if (hasNumericKeys) {
          // Process numeric keys format from API
          Object.values(activeProject.codebase as Record<string, unknown>).forEach((fileObj) => {
            if (fileObj && typeof fileObj === 'object') {
              const typedObj = fileObj as FileData;
              if ((typedObj.filePath || typedObj.filepath) && typedObj.code) {
                const filePath = typedObj.filePath || typedObj.filepath || '';
                const normalizedPath = filePath.startsWith('/') ? filePath : `/${filePath}`;
                normalizedCodebase[normalizedPath] = {
                  code: typedObj.code,
                  filePath: normalizedPath
                };
              }
            }
          });
          
          setCurrentProject({
            ...activeProject,
            codebase: normalizedCodebase
          });
        } else {
          // Use the existing codebase as is
          setCurrentProject(activeProject);
        }
      } else {
        // Handle other cases (arrays, etc.)
        setCurrentProject(activeProject);
      }
    };

    handleCodebaseUpdate(activeProject);

    // Add event listener for refreshCodeview
    const handleRefreshCodeview = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail?.projectId && customEvent.detail?.codebase) {
        setCurrentProject((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            projectId: customEvent.detail.projectId,
            codebase: customEvent.detail.codebase,
            content: prev.content,
          } as ProjectType;
        });
      }
    };

    window.addEventListener('refreshCodeview', handleRefreshCodeview);

    // Cleanup
    return () => {
      window.removeEventListener('refreshCodeview', handleRefreshCodeview);
    };
  }, [activeProject]);

  useEffect(() => {
    const handleCurrentFilesRequest = () => {
      const currentFiles: {
        [key: string]: { code: string; filePath: string; isTemplate?: boolean };
      } = {};
      if (currentProject && currentProject.codebase) {
        // Check for the format {0: {code, filePath}, 1: {code, filePath}}
        const hasNumericKeys = typeof currentProject.codebase === 'object' &&
          !Array.isArray(currentProject.codebase) &&
          Object.keys(currentProject.codebase).some(key => !isNaN(Number(key)));
        
        if (hasNumericKeys) {
          // Process numeric keys format
          Object.values(currentProject.codebase as Record<string, unknown>).forEach((fileObj) => {
            if (fileObj && typeof fileObj === 'object') {
              const typedObj = fileObj as FileData;
              if ((typedObj.filePath || typedObj.filepath) && typedObj.code) {
                const filePath = typedObj.filePath || typedObj.filepath || '';
                const normalizedPath = filePath.startsWith('/') ? filePath : `/${filePath}`;
                currentFiles[normalizedPath] = {
                  code: typedObj.code,
                  filePath: normalizedPath
                };
              }
            }
          });
        } else if (
          // Continue with existing logic for other formats
          !Array.isArray(currentProject.codebase) &&
          typeof currentProject.codebase === 'object'
        ) {
          // Already normalized object format from our component
          Object.entries(currentProject.codebase).forEach(
            ([path, fileContent]) => {
              const fileContentObj = fileContent as CodeFile;
              currentFiles[path] = {
                code: fileContentObj.code || '',
                filePath: path,
              };
            }
          );
        }
        // Handle direct array format from API (not yet normalized)
        else if (Array.isArray(currentProject.codebase)) {
          console.log('Current project codebase is array format');

          for (const item of currentProject.codebase) {
            if (item && typeof item === 'object') {
              // Direct file object in array
              if (
                'code' in item &&
                ('filePath' in item || 'filepath' in item)
              ) {
                const fileItem = item as FileData;
                const path = fileItem.filePath || fileItem.filepath || '';
                if (path) {
                  const normalizedPath = path.startsWith('/')
                    ? path
                    : `/${path}`;
                  currentFiles[normalizedPath] = {
                    code: fileItem.code || '',
                    filePath: normalizedPath,
                  };
                }
              }
              // Nested object with numeric keys
              else {
                const nestedObj = item as unknown as NestedFileObject;
                for (const key of Object.keys(nestedObj)) {
                  const fileData = nestedObj[key];
                  if (fileData && typeof fileData === 'object') {
                    const path = fileData.filepath || fileData.filePath || '';
                    if (path) {
                      const normalizedPath = path.startsWith('/')
                        ? path
                        : `/${path}`;
                      currentFiles[normalizedPath] = {
                        code: fileData.code || '',
                        filePath: normalizedPath,
                      };
                    }
                  }
                }
              }
            }
          }
        }
        // Handle direct object format from API {filepath: content}
        else if (typeof currentProject.codebase === 'object') {
          Object.entries(currentProject.codebase).forEach(([path, content]) => {
            if (!path) return;
            const normalizedPath = path.startsWith('/') ? path : `/${path}`;

            // Handle string content
            if (typeof content === 'string') {
              currentFiles[normalizedPath] = {
                code: content,
                filePath: normalizedPath,
              };
            }
            // Handle object content with code property
            else if (content && typeof content === 'object') {
              const fileContentObj = content as CodeFile;
              currentFiles[normalizedPath] = {
                code:
                  typeof fileContentObj === 'object' && 'code' in fileContentObj
                    ? fileContentObj.code || ''
                    : typeof fileContentObj === 'string'
                    ? fileContentObj
                    : JSON.stringify(fileContentObj),
                filePath: normalizedPath,
              };
            }
          });
        }
      } else {
        // Use default template files if no project codebase
        Object.entries(defaultFiles_3).forEach(([path, code]) => {
          currentFiles[path] = {
            code: typeof code === 'string' ? code : JSON.stringify(code),
            filePath: path,
            isTemplate: true,
          };
        });
      }

      console.log('Current files count:', Object.keys(currentFiles).length);
      window.dispatchEvent(
        new CustomEvent('getCurrentFiles', {
          detail: currentFiles,
        })
      );
    };
    window.addEventListener('requestCurrentFiles', handleCurrentFilesRequest);
    const handleTemplateFilesRequest = () => {
      handleCurrentFilesRequest();
    };
    window.addEventListener('requestTemplateFiles', handleTemplateFilesRequest);
    return () => {
      window.removeEventListener(
        'requestCurrentFiles',
        handleCurrentFilesRequest
      );
      window.removeEventListener(
        'requestTemplateFiles',
        handleTemplateFilesRequest
      );
    };
  }, [currentProject]);

  useEffect(() => {
    const validateDependencies = async (
      packages: { packageName: string }[]
    ): Promise<{ [key: string]: string }> => {
      const validatedPackages: { [key: string]: string } = {};
      for (const pkg of packages) {
        // @ts-expect-error ignore type error
        const isValid: {
          status: boolean;
          name?: string;
          latestVersion?: string;
        } = await validateNpmPackage(pkg.packageName);
        if (isValid.status) {
          // @ts-expect-error ignore type error
          validatedPackages[isValid.name] = isValid.latestVersion;
        } else {
          console.warn(`Package validation failed for ${pkg.packageName}:`);
          toast.error(`Package ${pkg.packageName} not found in npm registry`);
        }
      }
      return validatedPackages;
    };
    const updateDependencies = async () => {
      const externalPackages = currentProject?.content?.externalPackages;
      if (externalPackages) {
        const validPackages = await validateDependencies(externalPackages);
        setValidatedDependencies(validPackages);
      }
    };
    updateDependencies();
  }, [currentProject]);

  const isEditorDisabled = () => {
    // Only disable if we're in a loading/saving state or deploying
    return isSaving || isGenerating || loading || action === 'deploy';
  };

  const onAction = async (actionType: string) => {
    setAction({
      Action: actionType,
      timeStamp: Date.now(),
    });

    if (actionType === 'runlua') {
      toast.info('Running Lua code...');
      console.log('currentProject', currentProject);

      // Get Lua code from the codebase, handling different possible structures
      let luaCodeToBeEval = '';

      if (currentProject?.codebase) {
        const codebase = currentProject.codebase;

        // Find the Lua file in the codebase
        const luaPath = '/src/lib/index.lua';

        if (Array.isArray(codebase)) {
          // Handle array format - could be direct objects or nested
          for (const item of codebase) {
            if (item && typeof item === 'object') {
              // Check if this is a direct file object with filepath/filePath
              if (
                ('filePath' in item || 'filepath' in item) &&
                'code' in item
              ) {
                const filePath =
                  (item as FileData).filePath || (item as FileData).filepath;
                if (filePath === luaPath) {
                  luaCodeToBeEval = (item as FileData).code || '';
                  break;
                }
              } else {
                // Check if it's a nested object with numeric keys
                for (const key of Object.keys(item)) {
                  const fileData = (item as Record<string, FileData>)[key];
                  if (fileData && typeof fileData === 'object') {
                    const filePath = fileData.filepath || fileData.filePath;
                    if (filePath === luaPath) {
                      luaCodeToBeEval = fileData.code || '';
                      break;
                    }
                  }
                }
              }
            }
          }
        } else {
          // Handle object format
          // First try direct path access
          const luaFile = codebase[luaPath];
          if (luaFile) {
            if (typeof luaFile === 'string') {
              luaCodeToBeEval = luaFile;
            } else if (
              typeof luaFile === 'object' &&
              'code' in (luaFile as CodeContent)
            ) {
              luaCodeToBeEval = (luaFile as CodeContent).code || '';
            }
          } else {
            // Try to find any path ending with .lua
            for (const [path, content] of Object.entries(codebase)) {
              if (path.endsWith('.lua')) {
                if (typeof content === 'string') {
                  luaCodeToBeEval = content;
                  break;
                } else if (
                  typeof content === 'object' &&
                  content &&
                  'code' in (content as CodeContent)
                ) {
                  luaCodeToBeEval = (content as CodeContent).code || '';
                  break;
                }
              }
            }
          }
        }
      }

      if (!luaCodeToBeEval) {
        toast.error('No Lua code found in the project.');
        return;
      }

      if (typeof window === 'undefined' || !window.arweaveWallet) {
        toast.error(
          `Arweave wallet not available. Please ensure it's installed and connected.`
        );
        return;
      }

      if (!activeProject?.projectId) {
        toast.error('No valid process ID found for this project.');
        return;
      }

      try {
        const { connect, createDataItemSigner } = await import(
          '@permaweb/aoconnect'
        );
        const ao = connect({ MODE: 'legacy' });
        console.log('activeProject', activeProject);

        const messageId = await ao.message({
          process: activeProject.projectId,
          data: luaCodeToBeEval,
          signer: createDataItemSigner(window.arweaveWallet),
          tags: [
            { name: 'Name', value: 'Anon' },
            { name: 'Version', value: '0.2.1' },
            {
              name: 'Authority',
              value: 'fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY',
            },
            { name: 'Action', value: 'Eval' },
            {
              name: 'Description',
              value: `${
                currentProject?.content?.description || 'project description'
              }`,
            },
          ],
        });
        console.log('Message ID:', messageId);

        const result = await ao.result({
          process: activeProject?.projectId || '',
          message: messageId,
        });
        // console.log('Result:', result);

        // @ts-expect-error ignore type error
        result.id = messageId;
        toast.success('Lua code executed successfully');
        // @ts-expect-error ignore type error
        setCurrentProject({ ...currentProject, latestMessage: result });
      } catch (error) {
        // @ts-expect-error ignore type error
        toast.error('Error executing Lua code: ' + error.message);
        console.error('Lua execution error:', error);
      }
    } else if (actionType === 'deploy') {
      toast.info('Deploying project...');
    } else if (actionType === 'commit') {
      if (!onCommit) {
        toast.error('Commit functionality not available');
        return;
      }
      try {
        await onCommit();
        toast.success('Project committed successfully');
      } catch (error) {
        toast.error('Commit failed');
        console.error('Commit failed:', error);
      }
    }
  };

  const codebaseFiles = currentProject?.codebase || {};

  // Generate visible files list based on the format of codebase
  let visibleFiles: string[] = [];

  // Check for numeric keys format {0: {code, filePath}, 1: {code, filePath}}
  const hasNumericKeys = typeof codebaseFiles === 'object' &&
    !Array.isArray(codebaseFiles) &&
    Object.keys(codebaseFiles).some(key => !isNaN(Number(key)));

  if (hasNumericKeys) {
    // Extract paths from the numeric keys format
    Object.values(codebaseFiles as Record<string, unknown>).forEach((fileObj) => {
      if (fileObj && typeof fileObj === 'object') {
        const typedObj = fileObj as FileData;
        if (typedObj.filePath || typedObj.filepath) {
          const path = typedObj.filePath || typedObj.filepath || '';
          const normalizedPath = path.startsWith('/') ? path : `/${path}`;
          visibleFiles.push(normalizedPath);
        }
      }
    });
  } else if (Array.isArray(codebaseFiles)) {
    // Extract paths from nested array structure
    for (const item of codebaseFiles as Array<Record<string, unknown>>) {
      if (item && typeof item === 'object') {
        if ('filePath' in item || 'filepath' in item) {
          // Direct file object
          const path =
            (item as FileData).filePath || (item as FileData).filepath || '';
          const normalizedPath = path.startsWith('/') ? path : `/${path}`;
          visibleFiles.push(normalizedPath);
        } else {
          // Nested object with numeric keys
          for (const key of Object.keys(item)) {
            const fileData = item[key] as Record<string, FileData>;
            if (fileData && typeof fileData === 'object') {
              const path =
                (fileData as FileData).filepath ||
                (fileData as FileData).filePath ||
                '';
              if (path) {
                const normalizedPath = path.startsWith('/') ? path : `/${path}`;
                visibleFiles.push(normalizedPath);
              }
            }
          }
        }
      }
    }
  } else {
    // Object format - keys are the file paths
    visibleFiles = Object.keys(codebaseFiles);
  }

  // Fall back to default if no files were found
  if (visibleFiles.length === 0) {
    visibleFiles = ['/src/App.tsx'];
  }

  const sandpackFiles = {
    ...defaultFiles_3,
    ...Object.entries(currentProject?.codebase || {}).reduce(
      (acc, [path, content]) => {
        try {
          // Check if this is the numeric keys format
          if (!isNaN(Number(path)) && content && typeof content === 'object') {
            const fileObj = content as unknown as FileData;
            if (fileObj && (fileObj.filePath || fileObj.filepath) && fileObj.code) {
              const filePath = fileObj.filePath || fileObj.filepath || '';
              if (filePath) {
                const normalizedPath = filePath.startsWith('/') ? filePath : `/${filePath}`;
                acc[normalizedPath] = fileObj.code || '';
              }
            }
          } else {
            if (path) {
              const normalizedPath = path.startsWith('/') ? path : `/${path}`;
              
              if (typeof content === 'string') {
                // Direct string content
                acc[normalizedPath] = content;
              } else if (content && typeof content === 'object') {
                // Check if content has a code property that's a string
                const contentObj = content as CodeFile;
                if ('code' in contentObj && typeof contentObj.code === 'string') {
                  acc[normalizedPath] = contentObj.code;
                } else if ('filePath' in contentObj && 'code' in contentObj) {
                  // Handle format like {filePath: string, code: string}
                  acc[normalizedPath] = contentObj.code || '';
                } else {
                  // Fallback to stringify unknown object structure
                  acc[normalizedPath] = JSON.stringify(content);
                }
              } else {
                acc[normalizedPath] = '';
              }
            }
          }
        } catch (error) {
          console.error('Error processing file entry:', error);
        }
        return acc;
      },
      {} as Record<string, string>
    ),
  };

  return (
    <SandpackProvider
      theme={{
        colors: {
          surface1: 'hsl(var(--background))',
          surface2: 'hsl(var(--card))',
          surface3: 'hsl(var(--muted))',
          clickable: 'hsl(var(--muted-foreground))',
          base: 'hsl(var(--foreground))',
          disabled: 'hsl(var(--muted-foreground))',
          hover: 'hsl(var(--accent))',
          accent: 'hsl(var(--primary))',
          error: 'hsl(var(--destructive))',
          errorSurface: 'hsl(var(--destructive)/0.1)',
        },
      }}
      customSetup={{
        entry: '/src/main.tsx',
        // environment: 'vite',
        dependencies: {
          ...DEPENDENCIES.dependencies,
          ...validatedDependencies,
        },
        devDependencies: {
          ...DEPENDENCIES.devDependencies,
        },
        // vite: {
        //   resolve: {
        //     alias: {
        //       '@': '/src',
        //       '@/assets': '/src/assets',
        //       '@/components': '/src/components',
        //     },
        //   },
        // },
      }}
      files={sandpackFiles}
      options={{
        visibleFiles,
        activeFile: visibleFiles.find(
          (file) => file.endsWith('.lua') || file.endsWith('App.tsx')
        ),
        externalResources: [
          'https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css',
          // 'https://cdn.tailwindcss.com',
        ],
        classes: {
          'sp-wrapper': 'h-full min-h-0',
          'sp-layout': 'h-full min-h-0 border-none',
          'sp-file-explorer':
            'min-w-[200px] max-w-[300px] w-1/4 h-full overflow-auto border-r border-border',
          'sp-code-editor': 'h-full flex-1',
          'sp-tabs': 'bg-background border-b border-border',
          'sp-preview-container': 'h-full bg-background',
          'sp-preview-iframe': 'h-full bg-black',
        },
        // recompileMode: 'immediate',
        // recompileDelay: 300,
      }}
    >
      <div className="flex flex-col bg-background h-full min-h-0">
        <div className="h-10 px-2 flex items-center justify-between border-b border-border shrink-0">
          <div className="inline-flex h-7 gap-1 bg-muted rounded-md p-1">
            {views.map((view) => (
              <motion.button
                key={view.id}
                onClick={() => setActiveView(view.id)}
                disabled={isEditorDisabled()}
                className={cn(
                  'h-5 px-2 rounded flex items-center gap-1 text-xs font-medium transition-all duration-300',
                  view.className,
                  activeView === view.id
                    ? 'bg-background text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                  isEditorDisabled() && 'opacity-50 cursor-not-allowed'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <view.icon size={12} />
                {view.label}
              </motion.button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onAction('commit')}
              disabled={isEditorDisabled()}
              className={cn(
                'h-5 px-2 rounded flex items-center gap-1 text-xs font-medium transition-colors text-muted-foreground hover:text-foreground',
                isEditorDisabled() && 'opacity-50 cursor-not-allowed'
              )}
            >
              <GitBranch size={12} /> Commit
            </button>
            <button
              onClick={() => onAction('runlua')}
              disabled={isEditorDisabled()}
              className={cn(
                'h-5 px-2 rounded flex items-center gap-1 text-xs font-medium transition-colors text-muted-foreground hover:text-foreground',
                isEditorDisabled() && 'opacity-50 cursor-not-allowed'
              )}
            >
              <RunIcon /> Run Lua
            </button>
            <SandpackDownloader
              onDownload={onAction}
              disabled={isEditorDisabled()}
            />
          </div>
        </div>

        <div className="flex-1 relative min-h-0 overflow-hidden">
          {(isSaving || isGenerating || loading || action === 'deploy') && (
            <div className="absolute inset-0 bg-background/50 backdrop-blur-xs z-50 flex items-center justify-center">
              <div className="bg-card px-6 py-3 rounded-lg text-foreground flex items-center gap-3">
                <Loader2Icon className="animate-spin text-primary" />
                <p>
                  {loading
                    ? 'Loading code...'
                    : isSaving
                    ? 'Saving changes...'
                    : isGenerating
                    ? 'Generating code...'
                    : action === 'deploy'
                    ? 'Deploying...'
                    : 'Processing...'}
                </p>
              </div>
            </div>
          )}

          <div
            className={`h-full absolute inset-0 ${
              activeView === 'preview' ? 'invisible' : 'visible'
            }`}
          >
            <SandpackLayout className="h-full min-h-0">
              <SandpackFileExplorer />
              <div className="flex-1 min-w-0 h-full flex flex-col">
                <SandpackCodeEditor
                  showTabs={true}
                  showLineNumbers={true}
                  showInlineErrors={true}
                  wrapContent={false}
                  closableTabs={true}
                  readOnly={false}
                  showRunButton={true}
                  style={{ height: '100%', minHeight: '0', flex: '1' }}
                  extensions={[]}
                />
              </div>
            </SandpackLayout>
          </div>

          <AnimatePresence mode="wait">
            {activeView === 'preview' && (
              <motion.div
                key="preview-view"
                initial={{ transform: 'translateX(100%)' }}
                animate={{ transform: 'translateX(0%)' }}
                exit={{ transform: 'translateX(100%)' }}
                transition={{
                  duration: 0.3,
                  ease: [0.32, 0.72, 0, 1],
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
                className="h-full bg-background"
              >
                <SandpackLayout className="h-full min-h-0">
                  <SandPackPreviewClient />
                </SandpackLayout>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SandpackProvider>
  );
};

export default Codeview;

const views = [
  {
    id: 'code',
    icon: CodeIcon,
    label: 'Code',
    className: 'origin-left transition-transform duration-200',
  },
  {
    id: 'preview',
    icon: EyeIcon,
    label: 'Preview',
    className: 'origin-right transition-transform duration-200',
  },
];
