'use client';

interface ProjectType {
  projectId: string;
  content: {
    description: string;
    codebase: { filePath: string; code: string }[];
    externalPackages: { packageName: string; packageVersion: string }[];
  } | null;
  codebase: { filePath: string; code: string }[];
}

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer,
  ExportIcon,
  RunIcon,
  useSandpack,
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

let normalizedCodebase: { [key: string]: string } = {};

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
  const [loading, setloading] = useState(false);
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
            codebase: { filePath: string; code: string }[];
            externalPackages: { packageName: string; packageVersion: string }[];
            processId: string;
          } | null;
          codebase: { filePath: string; code: string }[];
        } = await axios
          .get(
            // @ts-expect-error ignore type error
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${projectId}?walletAddress=${activeProject.walletAddress}`
          )
          .then((res) => {
            console.log('response.data inside codeview\n\n', res.data);
            return res.data;
          });

        if (response.codebase) {
          if (Array.isArray(response.codebase)) {
            response.codebase.forEach(
              (file: { filePath: string; code: string }) => {
                const filePath = file.filePath.startsWith('/')
                  ? file.filePath
                  : `/${file.filePath}`;
                normalizedCodebase[filePath] = file.code || '';
              }
            );
          }
          //  else if (typeof response.codebase === 'object') {
          //   normalizedCodebase = Object.entries(response.codebase).reduce(
          //     (acc, [key, value]) => {
          //       const path = key.startsWith('/') ? key : `/src/${key}`;
          //       acc[path] = value;
          //       return acc;
          //     },
          //     {} as { [key: string]: string }
          //   );
          // }
          else {
            normalizedCodebase = defaultFiles_3;
          }
          // @ts-expect-error ignore type error
          setCurrentProject({ ...response, codebase: normalizedCodebase });
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
      setCurrentProject(activeProject);
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
        Object.entries(currentProject.codebase).forEach(
          ([path, fileContent]) => {
            currentFiles[path] = {
              code:
                typeof fileContent === 'object' &&
                fileContent &&
                fileContent.code
                  ? fileContent.code
                  : typeof fileContent === 'string'
                  ? fileContent
                  : fileContent
                  ? JSON.stringify(fileContent)
                  : '',
              filePath: path,
            };
          }
        );
      } else {
        Object.entries(defaultFiles_3).forEach(([path, code]) => {
          currentFiles[path] = {
            code: typeof code === 'string' ? code : JSON.stringify(code),
            filePath: path,
            isTemplate: true,
          };
        });
      }
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

      const code = currentProject?.codebase;
      // @ts-expect-error ignore type error
      const luaCodeToBeEval = code['/src/lib/index.lua'];

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

  console.log('currentProject', currentProject);

  const codebaseFiles = currentProject?.codebase || {};
  const visibleFiles =
    Object.keys(codebaseFiles)?.length > 0
      ? Object.keys(codebaseFiles)
      : ['/src/App.tsx', '/src/components/Sample.tsx'];

  const sandpackFiles = {
    ...defaultFiles_3,
    ...Object.entries(codebaseFiles).reduce((acc, [path, content]) => {
      if (typeof content === 'string') {
        acc[path] = content;
      } else if (content && typeof content === 'object') {
        // Check if content has a code property that's a string
        const codeContent = content as Record<string, unknown>;
        acc[path] =
          typeof codeContent.code === 'string' ? codeContent.code : '';
      } else {
        acc[path] = '';
      }
      return acc;
    }, {} as Record<string, string>),
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

