import Extras from '@/data/Extras';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer,
  Sandpack,
} from '@codesandbox/sandpack-react';
import axios from 'axios';
import { Loader2Icon, AlertCircle, Code, Eye, Save } from 'lucide-react';
import { useEffect, useState } from 'react';
import SandPackPreviewClient from './SandPackPreviewClient';
import { toast } from 'sonner';

const Codeview = ({ activeProject }) => {
  const [activeTab, setactiveTab] = useState('code');
  const [files, setfiles] = useState(Extras.DEFAULT_FILE);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (activeProject?.id) {
      loadProjectCode();
    }
  }, [activeProject?.id]);

  const loadProjectCode = async () => {
    try {
      setError(null);
      setloading(true);

      if (!activeProject?.id) {
        throw new Error('Project ID is required to load code');
      }

      const response = await axios.get(`http://localhost:5000/projects/code?activeProjectId=${activeProject.id}`);

      if (!response.data) {
        throw new Error('No data received from server');
      }

      if (response.data?.files) {
        setfiles(response.data.files);
      } else {
        setfiles(Extras.DEFAULT_FILE);
      }
    } catch (error) {
      console.error('Error loading project code:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Failed to load project code';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setloading(false);
    }
  };

  const handleSaveCode = async () => {
    try {
      setIsSaving(true);
      setError(null);

      if (!activeProject?.id) {
        throw new Error('Project ID is required to save code');
      }

      await axios.post(`http://localhost:5000/projects/${activeProject.id}/code`, {
        files,
        sandboxId: Date.now().toString()
      });

      toast.success('Code saved successfully');
    } catch (error) {
      console.error('Error saving code:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Failed to save code';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  if (!activeProject?.id) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground p-4 text-center">
        <p>Select a project to view and edit code</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Loader2Icon className="animate-spin" />
          <span>Loading code...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full max-h-screen bg-background">
      {error && (
        <div className="bg-destructive/15 text-destructive px-4 py-2 rounded-md m-4">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-4 w-4" />
            <p>{error}</p>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setactiveTab('code')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-md transition-colors ${activeTab === 'code'
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted'
              }`}
          >
            <Code className="h-4 w-4" />
            <span className="hidden sm:inline">Editor</span>
          </button>
          <button
            onClick={() => setactiveTab('preview')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-md transition-colors ${activeTab === 'preview'
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted'
              }`}
          >
            <Eye className="h-4 w-4" />
            <span className="hidden sm:inline">Preview</span>
          </button>
        </div>

        <button
          onClick={handleSaveCode}
          disabled={isSaving}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
        >
          <Save className="h-4 w-4" />
          <span className="hidden sm:inline">Save</span>
        </button>
      </div>

      {/* Code Editor */}
      <div className="flex-1 overflow-hidden">
        <SandpackProvider
          files={files}
          theme="dark"
          template="react"
          customSetup={{
            dependencies: {
              "react": "^18.0.0",
              "react-dom": "^18.0.0",
              "@radix-ui/react-icons": "^1.3.0",
              "class-variance-authority": "^0.7.0",
              "clsx": "^2.0.0",
              "tailwind-merge": "^2.1.0",
              "tailwindcss-animate": "^1.0.7"
            }
          }}
        >
          <div className="h-full">
            {activeTab === 'code' ? (
              <SandpackLayout className="h-full">
                <div className="hidden sm:block h-full">
                  <SandpackFileExplorer />
                </div>
                <SandpackCodeEditor
                  showTabs
                  showLineNumbers
                  showInlineErrors
                  wrapContent
                  closableTabs
                  className="h-full"
                />
              </SandpackLayout>
            ) : (
              <div className="h-full">
                <SandPackPreviewClient />
              </div>
            )}
          </div>
        </SandpackProvider>
      </div>
    </div>
  );
};

export default Codeview;
