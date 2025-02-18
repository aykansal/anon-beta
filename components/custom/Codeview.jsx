import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer,
  Sandpack,
} from '@codesandbox/sandpack-react';
import { Loader2Icon, Save } from 'lucide-react';
import { useState } from 'react';
import SandPackPreviewClient from './SandPackPreviewClient';

const Codeview = ({ activeProject, files, onSave, isSaving, isGenerating }) => {
  const [currentFiles, setCurrentFiles] = useState(files);

  const handleSave = async () => {
    await onSave(currentFiles);
  };

  if (!activeProject?.id) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground p-4 text-center">
        <p>Select a project to view and edit code</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Code Editor</h2>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="px-4 py-2 rounded-md flex items-center gap-2 bg-primary text-primary-foreground disabled:opacity-50"
        >
          {isSaving ? <Loader2Icon className="animate-spin" /> : <Save size={16} />}
          {isSaving ? 'Saving...' : 'Save'}
        </button>
      </div>

      {/* Sandpack Editor */}
      <div className="flex-1 overflow-hidden">
        <SandpackProvider
          files={currentFiles}
          theme="dark"
          template="react"
          customSetup={{
            dependencies: {
              "react": "^18.0.0",
              "react-dom": "^18.0.0",
              "@codesandbox/sandpack-react": "^2.6.9"
            }
          }}
        >
          <SandpackLayout>
            <div className="flex h-full">
              <div className="w-48 border-r">
                <SandpackFileExplorer />
              </div>
              <div className="flex-1">
                <SandpackCodeEditor 
                  showTabs
                  showLineNumbers
                  showInlineErrors
                  wrapContent
                  onChange={(updatedFiles) => {
                    setCurrentFiles(updatedFiles);
                  }}
                />
              </div>
            </div>
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
};

export default Codeview;
