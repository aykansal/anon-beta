import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer,
  ExportIcon,
} from '@codesandbox/sandpack-react';
import { Loader2Icon, CodeIcon, EyeIcon, Rocket } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import SandPackPreviewClient from './SandPackPreviewClient';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { toast } from 'sonner';
import { ActionContext } from '@/context/ActionContext';

const Codeview = ({ activeProject, onSave, isSaving, isGenerating, theme }) => {
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
        `http://localhost:5000/code/${projectId}`
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

  // const handleSave = async () => {
  //   if (onSave) {
  //     await onSave(currentFiles);
  //   }
  // };

  const onAction = (actionType) => {
    console.log(actionType);
    setAction({
      Action: actionType,
      timeStamp: Date.now(),
    });
    console.log(actionType);
  };

  return (
    <div className="flex flex-col bg-background h-full">
      {/* Save Status */}
      {(isSaving || isGenerating || loading || action == 'deploy') && (
        <div className="bg-primary/10 px-4 py-2 text-primary shrink-0">
          <p className="flex items-center gap-2">
            <Loader2Icon className="animate-spin" size={16} />
            Saving changes...
          </p>
        </div>
      )}

      {/* Loading Status */}
      {loading && (
        <div className="bg-primary/10 px-4 py-2 text-primary shrink-0">
          <p className="flex items-center gap-2">
            <Loader2Icon className="animate-spin" size={16} />
            Loading code...
          </p>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="bg-destructive/10 px-4 py-2 text-destructive shrink-0">
          <p>{error}</p>
        </div>
      )}

      {/* View Toggle - Compact Style */}
      <div className="h-10 px-2 flex items-center justify-between border-b">
        <div className="inline-flex h-7 gap-1 bg-muted rounded-md p-1">
          <button
            onClick={() => setActiveView('code')}
            className={cn(
              'h-5 px-2 rounded flex items-center gap-1 text-xs font-medium transition-colors',
              activeView === 'code'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <CodeIcon size={12} />
            Code
          </button>
          <button
            onClick={() => setActiveView('preview')}
            className={cn(
              'h-5 px-2 rounded flex items-center gap-1 text-xs font-medium transition-colors',
              activeView === 'preview'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <EyeIcon size={12} />
            Preview
          </button>
        </div>
        <button
          onClick={() => onAction('deploy')}
          className="h-5 px-2 rounded flex items-center gap-1 text-xs font-medium transition-colors text-muted-foreground hover:text-foreground"
          title="Deploy"
        >
          <Rocket size={12} />
          Deploy
        </button>
        <button
          onClick={() => onAction('export')}
          className="h-5 px-2 rounded flex items-center gap-1 text-xs font-medium transition-colors text-muted-foreground hover:text-foreground"
          title="Export"
        >
          <ExportIcon size={12} />
          Export
        </button>
      </div>

      {/* Sandpack Container */}
      <div className="flex-1 h-full p-1">
        <SandpackProvider
          style={{ height: '85vh' }}
          // template="nextjs"
          files={currentFiles}
          template="vite-react-ts"
          // customSetup={{
          //   files: currentFiles,
          //   environment:'node'
          // }}
          theme={theme}
          options={{
            visibleFiles: Object.keys(currentFiles),
            activeFile: Object.keys(currentFiles)[0] || '',
          }}
        >
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
                  readOnly={!activeProject}
                  onChange={(updatedFiles) => {
                    setCurrentFiles(updatedFiles);
                  }}
                  style={{ height: '100%' }}
                />
              </>
            ) : (
              <SandPackPreviewClient />
            )}
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
};

export default Codeview;
