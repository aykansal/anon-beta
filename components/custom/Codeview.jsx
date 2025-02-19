import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer,
} from '@codesandbox/sandpack-react';
import { Loader2Icon, CodeIcon, EyeIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import SandPackPreviewClient from './SandPackPreviewClient';
import { cn } from '@/lib/utils';

const Codeview = ({
  activeProject,
  files,
  onSave,
  isSaving,
  isGenerating,
  theme,
}) => {
  const [currentFiles, setCurrentFiles] = useState(files);
  const [activeView, setActiveView] = useState('code');

  // Update currentFiles when files prop changes
  useEffect(() => {
    console.log('Files updated in Codeview:', files);
    setCurrentFiles(files);
  }, [files]);

  // Debug effect for activeProject changes
  useEffect(() => {
    console.log('Active project changed in Codeview:', activeProject);
  }, [activeProject]);

  const handleSave = async () => {
    if (onSave) {
      await onSave(currentFiles);
    }
  };

  return (
    <div className="flex flex-col bg-background h-full">
      {/* Save Status */}
      {isSaving && (
        <div className="bg-primary/10 px-4 py-2 text-primary shrink-0">
          <p className="flex items-center gap-2">
            <Loader2Icon className="animate-spin" size={16} />
            Saving changes...
          </p>
        </div>
      )}

      {/* View Toggle - Compact Style */}
      <div className="h-10 px-2 flex items-center border-b">
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
      </div>

      {/* Sandpack Container */}
      <div className="flex-1 h-full p-1">
        <SandpackProvider
          style={{ height: '100%' }}
          template="vite-react-ts"
          theme={theme}
          files={currentFiles}
          options={{
            visibleFiles: Object.keys(currentFiles),
            activeFile: '/App.tsx',
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
                    console.log('Files changed in editor:', updatedFiles);
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

      {/* Save Button */}
      {activeProject && (
        <div className="bg-background p-4 border-t shrink-0">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-primary disabled:opacity-50 px-4 py-2 rounded-md w-full text-primary-foreground"
          >
            {isSaving ? (
              <span className="flex justify-center items-center gap-2">
                <Loader2Icon className="animate-spin" size={16} />
                Saving...
              </span>
            ) : (
              'Save Changes'
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Codeview;
