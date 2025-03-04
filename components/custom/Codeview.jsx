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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import JSZip from 'jszip';
import { cn } from '@/lib/utils';
import { DEPENDENCIES } from '@/data/defaultFiles';
import { twj } from 'tw-to-css';
import { connect, createDataItemSigner } from '@permaweb/aoconnect/browser';

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
      style={twj('text-red-300')}
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
    return response.status === 200;
  } catch (error) {
    console.warn(`Package validation failed for ${packageName}:`, error.status);
    return false;
  }
};
let normalizedCodebase = {};

const Codeview = ({ activeProject, isSaving, isGenerating, theme }) => {
  const [activeView, setActiveView] = useState('code');
  const [loading, setLoading] = useState(false);
  const { action, setAction } = useContext(ActionContext);
  const [currentProject, setCurrentProject] = useState({});
  const [validatedDependencies, setValidatedDependencies] = useState({});

  useEffect(() => {
    const fetchProjectCode = async (projectId) => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.BACKEND_URL}/projects/${projectId}`
        );
        if (response.data) {
          // Normalize codebase array into an object with file paths as keys
          if (Array.isArray(response.data.codebase)) {
            response.data.codebase.forEach((file) => {
              // Use filePath as key, prefixed with '/' if not already
              const filePath = file.filePath.startsWith('/')
                ? file.filePath
                : `/${file.filePath}`;
              normalizedCodebase[filePath] = file.code; // Use code directly as string
            });
            console.log('inside 1st\n', normalizedCodebase);
          } else if (typeof response.data.codebase === 'object') {
            // If it's already an object, ensure keys are proper paths
            normalizedCodebase = Object.entries(response.data.codebase).reduce(
              (acc, [key, value]) => {
                const path = key.startsWith('/') ? key : `/src/${key}`;
                acc[path] = value;
                return acc;
              },
              {}
            );
            console.log('inside 2nd\n', normalizedCodebase);
          } else {
            normalizedCodebase = defaultFiles_3; // Fallback to default if invalid
            console.log('inside 3rd\n', normalizedCodebase);
          }
          setCurrentProject({ ...response.data, codebase: normalizedCodebase });
          console.log('Normalized codebase:', normalizedCodebase);
        }
      } catch (error) {
        console.error('Error loading project code:', error);
        toast.error('Failed to load code');
      } finally {
        setLoading(false);
      }
    };

    if (activeProject?.id) {
      fetchProjectCode(activeProject.id);
    }
  }, [activeProject?.id]);

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
      for (const [packageName, version] of Object.entries(packages)) {
        const isValid = await validateNpmPackage(packageName);
        if (isValid) {
          validatedPackages[packageName] = version;
        } else {
          console.warn(`Package ${packageName} not found in npm registry`);
          toast.error(`Package ${packageName} not found in npm registry`);
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
        currentProject?.codebase['index.lua'];

      if (!luaCodeToBeEval) {
        toast.error('No Lua code found in the project.');
        return;
      }
      try {
        const ao = connect();
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
      // Deployment logic should be handled here
    }
  };

  const codebaseFiles = currentProject.codebase || {};
  const visibleFiles =
    Object.keys(codebaseFiles).length > 0
      ? Object.keys(codebaseFiles)
      : ['/src/App.tsx', '/src/components/Sample.tsx'];
  // console.log('visibleFiles:', visibleFiles);

  const sandpackFiles = {
    ...defaultFiles_3,
    ...codebaseFiles,
  };

  console.log('sandpackfiles', sandpackFiles);
console.log(validatedDependencies)
  return (
    <SandpackProvider
      theme={theme}
      template="vite"
      customSetup={{
        entry: '/src/main.tsx',
        environment: 'vite',
        dependencies: {
          ...DEPENDENCIES.dependencies,
          // ...validatedDependencies,
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
        activeFile: visibleFiles[0],
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
              <button
                key={view.id}
                onClick={() => setActiveView(view.id)}
                disabled={isEditorDisabled()}
                className={cn(
                  'h-5 px-2 rounded flex items-center gap-1 text-xs font-medium transition-colors',
                  activeView === view.id
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground',
                  isEditorDisabled() && 'opacity-50 cursor-not-allowed'
                )}
              >
                <view.icon size={12} />
                {view.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => onAction('runlua')}
                    disabled={isEditorDisabled()}
                    className={cn(
                      'h-5 px-2 rounded flex items-center gap-1 text-xs font-medium transition-colors text-muted-foreground hover:text-foreground',
                      isEditorDisabled() && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    <GitBranch size={12} /> Commit
                  </button>
                </TooltipTrigger>
                <TooltipContent>Save changes to the AO process</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
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
                </TooltipTrigger>
                <TooltipContent>
                  Execute Lua code on the AO process
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
              <div className="bg-primary/10 px-6 py-3 rounded-lg text-primary flex items-center gap-3">
                <Loader2Icon className="animate-spin" />
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
          <SandpackLayout className="h-full min-h-0">
            {activeView === 'code' ? (
              <>
                <SandpackFileExplorer />
                <div className="flex-1 min-w-0 h-full flex flex-col">
                  <SandpackCodeEditor
                    showTabs={true}
                    showLineNumbers={true}
                    showInlineErrors={true}
                    wrapContent={true}
                    closableTabs={true}
                    readOnly={isEditorDisabled()}
                    style={{ height: '100%', minHeight: '0', flex: '1' }}
                  />
                </div>
              </>
            ) : (
              <SandPackPreviewClient />
            )}
          </SandpackLayout>
        </div>
      </div>
    </SandpackProvider>
  );
};

export default Codeview;

const views = [
  { id: 'code', icon: CodeIcon, label: 'Code' },
  { id: 'preview', icon: EyeIcon, label: 'Preview' },
];

export const defaultFiles_3 = {
  '/.gitignore': `
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`.trim(),
  '/index.html': `
  <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`.trim(),
  '/package.json': JSON.stringify(
    {
      name: 'vite-react-typescript-starter',
      private: true,
      version: '0.0.0',
      type: 'module',
      scripts: {
        dev: 'vite',
        build: 'tsc -b && vite build',
        lint: 'eslint .',
        preview: 'vite preview',
      },
      dependencies: DEPENDENCIES.dependencies,
      devDependencies: DEPENDENCIES.devDependencies,
    },
    null,
    2
  ).trim(),
  '/src/App.tsx': `
import React from 'react';
import Sample from '@/components/Sample.tsx';
function App() {
return (
    <>
      <div className="bg-red-200">Hello world</div>     
      <Sample/>
    </>
  )
}
export default App;
`.trim(),
//   '/src/components/Sample.tsx': `
// import React from 'react';
// function Sample() {
// return (
//     <>
//       <div className="bg-green-200">Alias Test</div>     
//     </>
//   )
// }
// export default Sample;
// `.trim(),
  '/src/index.css': `
body{
  background-color: #353935	;
}`.trim(),
  '/src/main.tsx': `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`.trim(),
  '/tsconfig.json': JSON.stringify(
    {
      compilerOptions: {
        target: 'ES2020',
        lib: ['ES2020', 'DOM', 'DOM.Iterable'],
        module: 'ESNext',
        skipLibCheck: true,
        moduleResolution: 'bundler',
        allowImportingTsExtensions: true,
        isolatedModules: true,
        noEmit: true,
        jsx: 'react-jsx',
        strict: true,
        baseUrl: '/',
        paths: {
          '@/*': ['src/*'],
          '@/assets/*': ['src/assets/*'],
          '@/components/*': ['src/components/*'],
        },
      },
      include: ['src'],
    },
    null,
    2
  ).trim(),
};
