import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer,
  ExportIcon,
  RunIcon,
  useSandpack,
} from '@codesandbox/sandpack-react';

import {
  Loader2Icon,
  CodeIcon,
  EyeIcon,
  Rocket,
  GitBranch,
} from 'lucide-react';

import { useContext, useEffect, useState } from 'react';
import SandPackPreviewClient from './SandPackPreviewClient';
import { cn } from '@/lib/utils';
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
import { defaultFiles } from '@/data/Extras';

const SandpackDownloader = ({ onDownload }) => {
  const { sandpack } = useSandpack();
  const { files: sandpackFiles } = sandpack;

  const downloadFiles = async () => {
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
      const link = document.createElement('a');
      link.href = URL.createObjectURL(zipBlob);
      link.download = 'project.zip'; // Customize filename as needed
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

      toast.success('Files downloaded successfully');
    } catch (err) {
      console.error('Error generating ZIP file:', err);
      toast.error('Failed to download files');
    }
  };

  return (
    <button
      onClick={() => {
        downloadFiles();
        onDownload('export');
      }}
      className={cn(
        'h-5 px-2 rounded flex items-center gap-1 text-xs font-medium transition-colors text-muted-foreground hover:text-foreground'
      )}
      title="Export"
    >
      <ExportIcon size={12} />
      Export
    </button>
  );
};

const Codeview = ({ activeProject, isSaving, isGenerating, theme }) => {
  const [currentFiles, setCurrentFiles] = useState({});
  const [activeView, setActiveView] = useState('code');
  const [loading, setLoading] = useState(false);
  const actionContext = useContext(ActionContext);
  const { action, setAction } = actionContext;
  const [error, setError] = useState(null);

  // Fetch code when project changes
  useEffect(() => {
    if (activeProject?.id) {
      fetchProjectCode(activeProject.id);
    }
  }, [activeProject]);

  const fetchProjectCode = async (projectId) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND}/code/${projectId}`
      );

      if (response.data?.files) {
        setCurrentFiles(response.data.files);
      }
    } catch (error) {
      console.error('Error loading project code:', error);
      setError('Failed to load code');
      toast.error('Failed to load code');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleCodebaseUpdate = (event) => {
      const newCodebase = event.detail;
      setCurrentFiles(newCodebase);
    };

    window.addEventListener('codebaseUpdate', handleCodebaseUpdate);
    return () =>
      window.removeEventListener('codebaseUpdate', handleCodebaseUpdate);
  }, []);

  const onAction = (actionType) => {
    setAction({
      Action: actionType,
      timeStamp: Date.now(),
    });

    if (actionType === 'runlua') {
      // Placeholder for runLua logic
      toast.info('Running Lua code...');
    } else if (actionType === 'deploy') {
      // Placeholder for deploy logic
      toast.info('Deploying project...');
    }
  };

  // Function to determine if editor should be readonly
  const isEditorDisabled = () => {
    return (
      !activeProject || // No active project
      isSaving || // Currently saving
      isGenerating || // AI is generating code
      loading || // Loading code
      action === 'deploy' // Deploying
    );
  };

  // Updated function to check if deploy should be disabled
  const isDeployDisabled = () => {
    return isEditorDisabled() || action === 'deploy' || activeView === 'code';
  };

  return (
    <SandpackProvider
      style={{ height: '85vh' }}
      files={{
        ...defaultFiles,
        ...currentFiles,
      }}
      customSetup={{
        entry: '/src/main.tsx',
        environment: 'vite',
        dependencies: {
          axios: '^1.7.9',
          react: '^18.0.0',
          arweave: '1.15.5',
          esbuild: '0.25.0',
          'react-dom': '^18.0.0',
          'esbuild-wasm': '0.25.0',
          'warp-arbundles': '^1.0.4',
          'react-router-dom': '6.28.0',
          'arweave-wallet-kit': '1.1.0',
          '@permaweb/aoconnect': '^0.0.63',
          '@vitejs/plugin-react': '^1.0.0',
        },
      }}
      theme={theme}
      options={{
        visibleFiles:
          Object.keys(currentFiles).length > 0
            ? Object.keys(currentFiles)
            : ['/src/App.tsx'],
        activeFile: Object.keys(currentFiles)[0] || '/src/App.tsx',
        readOnly: isEditorDisabled(),
      }}
    >
      <div className="flex flex-col bg-background h-full">
        {/* Error Display */}
        {error && (
          <div className="bg-destructive/10 px-4 py-2 text-destructive shrink-0">
            <p>{error}</p>
          </div>
        )}

        {/* View Toggle - Compact Style */}
        <div className="h-10 px-2 flex items-center justify-between border-b">
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
            <button
              onClick={() => onAction('runlua')}
              disabled={isEditorDisabled()}
              className={cn(
                'h-5 px-2 rounded flex items-center gap-1 text-xs font-medium transition-colors text-muted-foreground hover:text-foreground',
                isEditorDisabled() && 'opacity-50 cursor-not-allowed'
              )}
              title="Run Lua"
            >
              <GitBranch size={12} />
              Commit
            </button>
            <button
              onClick={() => onAction('runlua')}
              disabled={isEditorDisabled()}
              className={cn(
                'h-5 px-2 rounded flex items-center gap-1 text-xs font-medium transition-colors text-muted-foreground hover:text-foreground',
                isEditorDisabled() && 'opacity-50 cursor-not-allowed'
              )}
              title="Run Lua"
            >
              <RunIcon size={12} />
              Run Lua
            </button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => onAction('deploy')}
                    disabled={isDeployDisabled()}
                    className={cn(
                      'h-5 px-2 rounded flex items-center gap-1 text-xs font-medium transition-colors text-muted-foreground hover:text-foreground',
                      (isEditorDisabled() || activeView === 'code') &&
                        'opacity-50 cursor-not-allowed'
                    )}
                    title="Deploy"
                  >
                    <Rocket size={12} />
                    Deploy
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  {activeView === 'code'
                    ? 'Please preview your code before deploying'
                    : isEditorDisabled()
                      ? 'Cannot deploy while processing'
                      : 'Deploy your code'}
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
        <div className="flex-1 h-full p-1 relative">
          {/* Loading Overlay */}
          {(isSaving || isGenerating || loading || action === 'deploy') && (
            <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center">
              <div className="bg-primary/10 px-6 py-3 rounded-lg text-primary flex items-center gap-3">
                <Loader2Icon className="animate-spin" size={20} />
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
          <SandpackLayout className="p-1 h-full">
            {activeView === 'code' ? (
              <>
                <SandpackFileExplorer style={{ height: '100%' }} />
                <SandpackCodeEditor
                  showTabs={true}
                  showLineNumbers={true}
                  showInlineErrors={true}
                  wrapContent={true}
                  closableTabs={true}
                  readOnly={isEditorDisabled()}
                  onChange={(updatedFiles) => {
                    if (!isEditorDisabled()) {
                      setCurrentFiles(updatedFiles);
                    }
                  }}
                  style={{ height: '100%' }}
                />
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
