'use client';

import {
  RunIcon,
  ExportIcon,
  useSandpack,
  SandpackLayout,
  SandpackProvider,
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

import JSZip from 'jszip';
import axios from 'axios';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useContext, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ActionContext } from '@/context/ActionContext';
import SandPackPreviewClient from './SandPackPreviewClient';
import { DEPENDENCIES, defaultFiles_3 } from '@/data/defaultFiles';
import { Loader2Icon, CodeIcon, EyeIcon, GitBranch } from 'lucide-react';
import {
  FileData,
  CodeContent,
  CurrentProjectType,
  ActiveProjectType,
} from '@/lib/types';

interface ArweaveWallet {
  connect: (
    permissions: string[],
    appInfo?: {
      name?: string;
      logo?: string;
    },
    gateway?: {
      host: string;
      port: number;
      protocol: 'http' | 'https';
    }
  ) => Promise<void>;
  disconnect: () => Promise<void>;
  getActiveAddress: () => Promise<string>;
  userTokens: () => Promise<[]>;
  tokenBalance: (tokenId: string) => Promise<number>;
}

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
  activeProject: ActiveProjectType;
  isSaving?: boolean;
  isGenerating: boolean;
  onCommit: () => void;
}) => {
  const [activeView, setActiveView] = useState('code');
  const [loading, setloading] = useState(false);
  const { action, setAction } = useContext(ActionContext);
  const [currentProject, setCurrentProject] =
    useState<CurrentProjectType | null>(null);
  const [validatedDependencies, setValidatedDependencies] = useState({});

  useEffect(() => {
    const fetchProjectCode = async (projectId: string) => {
      try {
        setLoading(true);
        const response: {
          codebase: unknown;
          description: string;
          externalPackages?: {
            packageName: string;
            packageVersion: string;
          }[];
          projectId: string;
        } = await axios
          .get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${projectId}?walletAddress=${activeProject?.walletAddress}`
          )
          .then((res) => {
            return res?.data;
          });
        console.log('API Response:', response);

        if (response.codebase) {
          setCurrentProject({
            ...response,
          } as CurrentProjectType);
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
      const externalPackages = currentProject?.externalPackages;
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
              value: `${currentProject?.description || 'project description'}`,
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
  const hasNumericKeys =
    typeof codebaseFiles === 'object' &&
    !Array.isArray(codebaseFiles) &&
    Object.keys(codebaseFiles).some((key) => !isNaN(Number(key)));

  if (hasNumericKeys) {
    // Extract paths from the numeric keys format
    Object.values(codebaseFiles as Record<string, unknown>).forEach(
      (fileObj) => {
        if (fileObj && typeof fileObj === 'object') {
          const typedObj = fileObj as FileData;
          if (typedObj.filePath || typedObj.filepath) {
            const path = typedObj.filePath || typedObj.filepath || '';
            const normalizedPath = path.startsWith('/') ? path : `/${path}`;
            visibleFiles.push(normalizedPath);
          }
        }
      }
    );
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
    ...currentProject?.codebase,
  };

  const previewRef = useRef(null);
  const [Loading, setLoading] = useState(false);
  const [previewStyle, setPreviewStyle] = useState({
    transform: "translateX(110vw)",
    opacity: 0,
  });
  

  return (
    <div className="relative w-full h-full">
   
    {Loading ? (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-black  text-white">
        <div className="flex items-center gap-4 animate-pulse ">
          <p className="text-lg animate-pulse mb-6">
            Your files are loading...
          </p>
          <div
            style={{
              width: "20px",
              height: "20px",
              border: "4px solid white",
              animation: "spin 3s linear infinite",
            }}
          ></div>
        </div>
      </div>
    ) : (
      <SandpackProvider
        className="relative w-full h-full "
        // files={files}
        customSetup={{
          // dependencies: {
          //   ...Extra.DEPENDANCY,
          // },
        }}
        options={{
          externalResources: ["https://cdn.tailwindcss.com"],
        }}
        template="react"
        // theme={atomDark}
      >
        <SandpackLayout>
          <SandpackFileExplorer style={{ height: "93vh" }} />
          <SandpackCodeEditor
            style={{ height: "93vh", fontSize: "12px", lineHeight: "30px" }}
          />
          <div
            className="absolute w-full"
            style={{ ...previewStyle }}
            ref={previewRef}
          >
            <SandpackPreview
              className="absolute w-full"
              ref={previewRef}
              showNavigator={false}
              style={{ height: "93vh" }}
            />
          </div>
        </SandpackLayout>
      </SandpackProvider>
    )}
  </div>
  );
};

export default Codeview;

