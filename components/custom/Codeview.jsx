import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer,
  ExportIcon,
  RunIcon,
  useSandpack,
} from '@codesandbox/sandpack-react';
import { Loader2Icon, CodeIcon, EyeIcon, GitBranch } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import SandPackPreviewClient from './SandPackPreviewClient';
import axios from 'axios';
import { toast } from 'sonner';
import { ActionContext } from '@/context/ActionContext';
import JSZip from 'jszip';
import { cn } from '@/lib/utils';
import { DEPENDENCIES, defaultFiles_3 } from '@/data/defaultFiles';
import { connect, createDataItemSigner } from '@permaweb/aoconnect/browser';
import { motion, AnimatePresence } from 'framer-motion';

const SandpackDownloader = ({ onDownload, disabled }) => {
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
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
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
      <ExportIcon size={12} />
      Export
    </button>
  );
};
const validateNpmPackage = async (packageName) => {
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
    console.error(`Error validating package ${packageName}:`, error.message);
    return { status: false };
  }
};
let normalizedCodebase = {};

const Codeview = ({
  activeProject,
  isSaving,
  isGenerating,
  theme,
  onCommit,
}) => {
  const [activeView, setActiveView] = useState('code');
  const [loading, setLoading] = useState(false);
  const { action, setAction } = useContext(ActionContext);
  const [currentProject, setCurrentProject] = useState({});
  const [validatedDependencies, setValidatedDependencies] = useState({});

  useEffect(() => {
    const fetchProjectCode = async (projectId) => {
      try {
        setLoading(true);
        const response = await axios
          .get(`${process.env.BACKEND_URL}/projects/${projectId}`)
          .then((res) => {
            console.log('response.data', res.data);
            return res.data.content;
          });

          if (response) {
          // Normalize codebase array into an object with file paths as keys
          if (Array.isArray(response.codebase)) {
            response.codebase.forEach((file) => {
              const filePath = file.filePath.startsWith('/')
                ? file.filePath
                : `/${file.filePath}`;
              normalizedCodebase[filePath] = file.code; // Use code directly as string
            });
            // console.log('inside 1st\n', normalizedCodebase);
          } else if (typeof response.data.codebase === 'object') {
            // If it's already an object, ensure keys are proper paths
            normalizedCodebase = Object.entries(response.codebase).reduce(
              (acc, [key, value]) => {
                const path = key.startsWith('/') ? key : `/src/${key}`;
                acc[path] = value;
                return acc;
              },
              {}
            );
            // console.log('inside 2nd\n', normalizedCodebase);
          } else {
            normalizedCodebase = defaultFiles_3; // Fallback to default if invalid
            // console.log('inside 3rd\n', normalizedCodebase);
          }
          setCurrentProject({ ...response, codebase: normalizedCodebase });
          // console.log('Normalized codebase:', normalizedCodebase);
        }
      } catch (error) {
        if (error.response.data.error === 'No code found for project') {
          toast.error('Prompt to create vibe with the code');
          return;
        }

        toast.error('Failed to load code');
        console.error('Error loading project code:', error);
        return;
      } finally {
        setLoading(false);
      }
    };

    if (activeProject?.projectId) {
      fetchProjectCode(activeProject?.projectId);
    }
  }, [activeProject.projectId]);

  useEffect(() => {
    const handleCodebaseUpdate = (event) => {
      setCurrentProject((prev) => ({
        ...prev,
        codebase: event.detail,
      }));
    };
    window.addEventListener('codebaseUpdate', handleCodebaseUpdate);
    return () =>
      window.removeEventListener('codebaseUpdate', handleCodebaseUpdate);
  }, []);

  useEffect(() => {
    const handleCurrentFilesRequest = () => {
      const currentFiles = {};
      if (currentProject && currentProject.codebase) {
        Object.entries(currentProject.codebase).forEach(
          ([path, fileContent]) => {
            currentFiles[path] = {
              code:
                typeof fileContent === 'object' && fileContent.code
                  ? fileContent.code
                  : typeof fileContent === 'string'
                    ? fileContent
                    : JSON.stringify(fileContent),
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
      handleCurrentFilesRequest(); // Just use the same handler
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
    const validateDependencies = async (packages) => {
      const validatedPackages = {};
      for (const pkg of packages) {
        const isValid = await validateNpmPackage(pkg.packageName);
        if (isValid.status) {
          validatedPackages[isValid.name] = isValid.latestVersion;
        } else {
          console.warn(`Package validation failed for ${pkg.packageName}:`);
          toast.error(`Package ${pkg.packageName} not found in npm registry`);
        }
      }
      return validatedPackages;
    };
    const updateDependencies = async () => {
      if (currentProject?.externalPackages) {
        const validPackages = await validateDependencies(
          currentProject.externalPackages
        );
        setValidatedDependencies(validPackages);
      }
    };
    updateDependencies();
  }, [currentProject?.externalPackages]);

  const isEditorDisabled = () => {
    return (
      !activeProject ||
      isSaving ||
      isGenerating ||
      loading ||
      action === 'deploy'
    );
  };

  const onAction = async (actionType) => {
    setAction({
      Action: actionType,
      timeStamp: Date.now(),
    });
    if (actionType === 'runlua') {
      toast.info('Running Lua code...');
      // Fix the code to check both '/index.lua' and 'index.lua'
      const luaCodeToBeEval =
        currentProject?.codebase['/index.lua'] ||
        currentProject?.codebase['/src/lib/index.lua'] ||
        currentProject?.codebase['index.lua'];

      if (!luaCodeToBeEval) {
        toast.error('No Lua code found in the project.');
        return;
      }
      try {
        const ao = connect();
        console.log('currentProject', currentProject);
        const messageId = await ao.message({
          process: currentProject?.processId,
          data: `${luaCodeToBeEval}`,
          signer: createDataItemSigner(globalThis.arweaveWallet),
          tags: [
            { name: 'Name', value: 'Anon' },
            { name: 'Version', value: '0.2.1' },
            {
              name: 'Authority',
              value: 'fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY',
            },
            { name: 'Action', value: 'Eval' },
            { name: 'Description', value: currentProject?.description },
          ],
        });
        console.log(messageId);

        const result = await ao.result({
          process: currentProject?.processId,
          message: messageId,
        });
        console.log(result);

        result.id = messageId;
        console.log(result);
        toast.info('Completed the Lua Code');
      } catch (error) {
        toast.error('Error in Eval Lua Code: ' + error.message);
      }
    } else if (actionType === 'deploy') {
      toast.info('Deploying project...');
    } else if (actionType === 'commit') {
      if (!onCommit) {
        toast.error('Commit functionality not available');
        return;
      }
      try {
        await onCommit(); // Call the passed commit function
      } catch (error) {
        console.error('Commit failed:', error);
      }
    }
  };

  const codebaseFiles = currentProject.codebase || {};
  const visibleFiles =
    Object.keys(codebaseFiles).length > 0
      ? Object.keys(codebaseFiles)
      : ['/src/App.tsx', '/src/components/Sample.tsx'];

  const sandpackFiles = {
    ...defaultFiles_3,
    ...codebaseFiles,
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
        environment: 'vite',
        dependencies: {
          ...DEPENDENCIES.dependencies,
          ...validatedDependencies,
        },
        devDependencies: {
          ...DEPENDENCIES.devDependencies,
        },
        vite: {
          resolve: {
            alias: {
              '@': '/src',
              '@/assets': '/src/assets',
              '@/components': '/src/components',
            },
          },
        },
      }}
      files={sandpackFiles}
      options={{
        visibleFiles,
        activeFile: visibleFiles.find(
          (file) => file.endsWith('.lua') || file.endsWith('App.tsx')
        ),
        readOnly: isEditorDisabled(),
        externalResources: [
          'https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css',
          'https://cdn.tailwindcss.com',
        ],
        classes: {
          'sp-wrapper': 'h-full min-h-0',
          'sp-layout': 'h-full min-h-0 border-none',
          'sp-file-explorer':
            'min-w-[200px] max-w-[300px] w-1/4 h-full overflow-auto border-r border-border',
          'sp-code-editor': 'h-full flex-1',
          'sp-tabs': 'bg-background border-b border-border',
          'sp-preview-container': 'h-full bg-background',
          'sp-preview-iframe': 'h-full bg-white',
        },
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
              onClick={() => onAction('commit')} // Trigger commit action
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
              <RunIcon size={12} /> Run Lua
            </button>
            <SandpackDownloader
              onDownload={onAction}
              disabled={isEditorDisabled()}
            />
          </div>
        </div>

        {/* Sandpack Container with Overlay */}
        <div className="flex-1 relative min-h-0 overflow-hidden">
          {/* Loading Overlay */}
          {(isSaving || isGenerating || loading || action === 'deploy') && (
            <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center">
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

          {/* Static Code View */}
          <div
            className={`h-full absolute inset-0 ${activeView === 'preview' ? 'invisible' : 'visible'}`}
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
                  readOnly={isEditorDisabled()}
                  style={{ height: '100%', minHeight: '0', flex: '1' }}
                />
              </div>
            </SandpackLayout>
          </div>

          {/* Animated Preview with Fixed Positioning */}
          <AnimatePresence mode="wait">
            {activeView === 'preview' && (
              <motion.div
                key="preview-view"
                initial={{ transform: 'translateX(100%)' }}
                animate={{ transform: 'translateX(0%)' }}
                exit={{ transform: 'translateX(100%)' }}
                transition={{
                  duration: 0.3,
                  ease: [0.32, 0.72, 0, 1], // Custom easing function for smoother motion
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
