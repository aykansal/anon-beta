import axios from 'axios';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import { spawnProcess } from '@/lib/arkit';
import Chatview from '@/components/custom/Chatview';
import Codeview from '@/components/custom/Codeview';
import TitleBar from '@/components/custom/TitleBar';
import StatusBar from '@/components/custom/StatusBar';
import { connectWallet } from '@/lib/arkit2';

const ProjectsPage = () => {
  const [files, setFiles] = useState({});
  const [projects, setProjects] = useState([]);
  const [isResizing, setIsResizing] = useState(false);
  const [splitPosition, setSplitPosition] = useState(70);
  const [isSavingCode, setIsSavingCode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('connected');
  const [error, setError] = useState(null); // Global error state for UI feedback
  const [isCreating, setIsCreating] = useState(false);
  const [status, setStatus] = useState(''); // New state for handling status
  const [walletAddress, setWalletAddress] = useState('');

  // Validate environment variable
  const backendUrl = process.env.BACKEND_URL;
  if (!backendUrl) {
    throw new Error('BACKEND_URL environment variable is not set');
  }

  const fetchProjects = async () => {
    try {
      setConnectionStatus('connecting');
      setError(null); // Clear previous errors
      const walletAddres = await window?.arweaveWallet?.getActiveAddress();
      const res = await axios.get(
        `${backendUrl}/projects?walletAddress=${walletAddres}`
      );

      if (!res.data || typeof res.data.projects === 'undefined') {
        throw new Error('Invalid response format from server');
      }

      if (res.data.projects.length > 0) {
        setProjects(res.data.projects);
        setActiveProject(res.data.projects[0]);
        toast.success('Projects fetched successfully');
      } else {
        setProjects([]);
        setActiveProject(null);
        toast.info('No projects found! Create a new project');
      }
      setConnectionStatus('connected');
    } catch (error) {
      console.error('Error fetching projects:', error);
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        'Failed to fetch projects';
      setError(errorMessage);
      toast.error(errorMessage);
      setConnectionStatus('disconnected');
    }
  };

  const handleProjectSelect = async (project) => {
    try {
      if (!project) {
        setActiveProject(null);
        setFiles({});
        setError(null);
        return;
      }

      if (!project.id || typeof project.id !== 'number') {
        throw new Error('Invalid project ID');
      }

      setConnectionStatus('connecting');
      setError(null);
      setActiveProject(project);
      setConnectionStatus('connected');
      toast.success(`Selected project: ${project.name}`);
    } catch (error) {
      console.error('Error selecting project:', error);
      const errorMessage = error.message || 'Failed to load project';
      setError(errorMessage);
      toast.error(errorMessage);
      setConnectionStatus('disconnected');
      setActiveProject(null);
    }
  };

  const handleCreateProject = async (projectName) => {
    try {
      if (
        !projectName ||
        typeof projectName !== 'string' ||
        projectName.trim() === ''
      ) {
        throw new Error(
          'Project name is required and must be a non-empty string'
        );
      }

      setStatus('Creating Project...'); // Set status to creating
      setConnectionStatus('connecting');
      setError(null);
      const processId = await spawnProcess(projectName, [
        { name: 'Action', value: 'create-project' },
      ]);
      console.log(processId);

      if (!processId || typeof processId !== 'string') {
        throw new Error('Failed to generate process ID');
      }

      const res = await axios.post(`${backendUrl}/projects`, {
        processId,
        sandboxId: 'null',
        name: projectName,
        walletAddress: 'ww5nJTj6dD6Q6oIg-bOm20y2yawWDqDcQbQDcmwGOlI',
      });

      if (!res.data?.project) {
        throw new Error('Invalid response from server: missing project data');
      }

      const newProject = res.data.project;
      console.log('Created new project:', newProject);

      setProjects((prevProjects) => [...prevProjects, newProject]);
      await handleProjectSelect(newProject);
      setConnectionStatus('connected');
      toast.success('Project created successfully');
    } catch (error) {
      console.error('Error creating project:', error);
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        'Error creating project';
      setError(errorMessage);
      toast.error(errorMessage);
      setConnectionStatus('disconnected');
    } finally {
      setIsCreating(false); // Reset isCreating after completion
      setStatus(''); // Reset status after completion
    }
  };

  const handleSaveCode = async (updatedFiles) => {
    try {
      if (!activeProject?.id) {
        throw new Error('No active project selected to save code');
      }

      if (
        !updatedFiles ||
        typeof updatedFiles !== 'object' ||
        Object.keys(updatedFiles).length === 0
      ) {
        throw new Error('No files provided to save');
      }

      setStatus('Saving Code...'); // Set status to saving
      setConnectionStatus('connecting');
      setError(null);

      await axios.post(`${backendUrl}/projects/${activeProject.id}/code`, {
        files: updatedFiles,
        sandboxId: Date.now().toString(),
      });

      setFiles(updatedFiles);
      setConnectionStatus('connected');
      toast.success('Code saved successfully');
    } catch (error) {
      console.error('Error saving code:', error);
      const errorMessage =
        error.response?.data?.error || error.message || 'Failed to save code';
      setError(errorMessage);
      toast.error(errorMessage);
      setConnectionStatus('disconnected');
    } finally {
      setStatus(''); // Reset status after completion
    }
  };

  const handleRunProject = () => {
    if (!activeProject) {
      toast.error('No project selected to run');
      return;
    }
    setStatus('Running Project...'); // Set status to running
    toast.info('Running project...');
    // Add actual run logic here if needed
  };

  const startResizing = (e) => {
    setIsResizing(true);
    document.addEventListener('mousemove', handleResizing);
    document.addEventListener('mouseup', stopResizing);
  };

  const handleResizing = (e) => {
    if (isResizing) {
      const container = document.getElementById('main-container');
      if (!container) {
        console.warn('Main container not found for resizing');
        return;
      }
      const containerWidth = container.offsetWidth;
      const newPosition = (e.clientX / containerWidth) * 100;
      if (newPosition >= 30 && newPosition <= 85) {
        setSplitPosition(newPosition);
      }
    }
  };

  const stopResizing = () => {
    setIsResizing(false);
    document.removeEventListener('mousemove', handleResizing);
    document.removeEventListener('mouseup', stopResizing);
  };

  useEffect(() => {
    console.log('Active project changed:', activeProject);
  }, [activeProject]);

  useEffect(() => {
    const handleCodebaseUpdate = (event) => {
      if (!event.detail || typeof event.detail !== 'object') {
        console.warn('Invalid codebase update event:', event);
        return;
      }
      const newCodebase = event.detail;
      setFiles(newCodebase);
    };

    window.addEventListener('codebaseUpdate', handleCodebaseUpdate);
    return () =>
      window.removeEventListener('codebaseUpdate', handleCodebaseUpdate);
  }, []);

  const fetchData = async () => {
    try {
      const connectionStatus = await connectWallet();
      if (connectionStatus === 'connected wallet successfully') {
        const walletAddress = await window.arweaveWallet.getActiveAddress();
        setWalletAddress(walletAddress);
        const user = await axios.post(
          `${process.env.BACKEND_URL}/user/create`,
          {
            name: 'test',
            walletAddress,
          }
        );
        console.log(user.data);
      }
    } catch (error) {
      console.error('Error during wallet connection or user creation:', error);
    }
  };

  useEffect(async () => {
    await fetchData();
    await fetchProjects();
  }, []);

  const handleRefreshProject = () => {
    if (!activeProject) {
      toast.error('No project selected to refresh');
      return;
    }

    fetchData();
    fetchProjects();
    toast.info('Refreshing project...');
  };
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      {/* Title Bar */}
      <div className="shrink-0">
        <TitleBar
          projects={projects}
          activeProject={activeProject}
          onProjectSelect={handleProjectSelect}
          onCreateProject={handleCreateProject}
          setIsCreating={setIsCreating}
          isCreating={isCreating}
          onSave={() =>
            activeProject
              ? handleSaveCode(files)
              : toast.error('No project selected to save')
          }
          onRun={handleRunProject}
          onRefresh={handleRefreshProject}
        />
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-destructive/10 px-4 py-2 text-destructive shrink-0 flex justify-between items-center">
          <p>{error}</p>
          <button
            onClick={fetchProjects}
            className="text-sm underline hover:text-destructive-dark"
          >
            Retry
          </button>
        </div>
      )}

      {/* Main Content */}
      {activeProject ? (
        <div
          id="main-container"
          className="flex flex-1 min-h-0 overflow-hidden"
        >
          <div
            style={{ width: `${splitPosition}%` }}
            className="h-full min-h-0"
          >
            <Codeview
              theme="dark"
              files={files}
              isSaving={isSavingCode}
              isGenerating={isGenerating}
              activeProject={activeProject}
            />
          </div>
          <div
            style={{ width: `${100 - splitPosition}%` }}
            czlassName="h-full min-h-0 border-l border-border"
          >
            <Chatview
              activeProject={activeProject}
              onGenerateStart={() => setIsGenerating(true)}
              onGenerateEnd={() => setIsGenerating(false)}
            />
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-background">
          <div className="text-center text-muted-foreground">
            <h3 className="text-lg font-medium mb-2">No Project Selected</h3>
            <button
              onClick={() => {
                setIsCreating(true);
              }}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
            >
              Create a New Project
            </button>
          </div>
        </div>
      )}

      {/* Status Bar */}
      <div className="shrink-0">
        <StatusBar
          isCreating={isCreating}
          activeProject={activeProject}
          isSaving={isSavingCode}
          isGenerating={isGenerating}
          connectionStatus={connectionStatus}
          status={status}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
