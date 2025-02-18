import axios from 'axios';
import { toast } from 'sonner';
import Extras from '@/data/Extras';
import { useEffect, useState } from 'react';
import Chatview from '@/components/custom/Chatview';
import Codeview from '@/components/custom/Codeview';
import TitleBar from '@/components/custom/TitleBar';
import StatusBar from '@/components/custom/StatusBar';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [projectMessages, setProjectMessages] = useState({});
  const [files, setFiles] = useState(Extras.DEFAULT_FILE);
  const [isSavingCode, setIsSavingCode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [splitPosition, setSplitPosition] = useState(70);
  const [isResizing, setIsResizing] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('connected');

  const fetchProjects = async () => {
    try {
      setConnectionStatus('connecting');
      const res = await axios.get(
        'http://localhost:5000/projects?walletAddress=ww5nJTj6dD6Q6oIg-bOm20y2yawWDqDcQbQDcmwGOlI'
      );
      console.log('Fetched projects:', res.data.projects);
      setProjects(res?.data?.projects || []);
      setActiveProject(res?.data?.projects[0]);
      setConnectionStatus('connected');
    } catch (error) {
      console.error('Error fetching projects:', error);
      setConnectionStatus('disconnected');
      toast.error('Failed to fetch projects');
    }
  };

  const handleProjectSelect = async (project) => {
    console.log('Selecting project:', project);
    try {
      if (!project) {
        setActiveProject(null);
        setFiles(Extras.DEFAULT_FILE);
        return;
      }

      setConnectionStatus('connecting');
      const codeRes = await axios.get(
        `http://localhost:5000/projects/code?activeProjectId=${project.id}`
      );
      console.log('Fetched project code:', codeRes.data);

      setActiveProject(project);
      if (codeRes.data.files) {
        setFiles(codeRes.data.files);
      } else {
        setFiles(Extras.DEFAULT_FILE);
      }
      setConnectionStatus('connected');
    } catch (error) {
      console.error('Error loading project:', error);
      setConnectionStatus('disconnected');
      toast.error('Failed to load project code');
      setFiles(Extras.DEFAULT_FILE);
    }
  };

  const handleCreateProject = async (projectName) => {
    try {
      setConnectionStatus('connecting');
      const res = await axios.post('http://localhost:5000/projects', {
        name: projectName,
        arweaveId: 'new Id',
        sandboxId: 'null',
        walletAddress: 'ww5nJTj6dD6Q6oIg-bOm20y2yawWDqDcQbQDcmwGOlI',
      });

      const newProject = res?.data?.project;
      console.log('Created new project:', newProject);

      setProjects((prevProjects) => [...prevProjects, newProject]);
      setProjectMessages((prev) => ({
        ...prev,
        [newProject.id]: [],
      }));

      // Select the new project
      await handleProjectSelect(newProject);
      setConnectionStatus('connected');
      toast.success('Project created successfully');
    } catch (error) {
      console.error('Error creating project:', error);
      setConnectionStatus('disconnected');
      toast.error('Error creating project');
    }
  };

  const handleSaveCode = async (updatedFiles) => {
    try {
      setIsSavingCode(true);
      setConnectionStatus('connecting');

      if (!activeProject?.id) {
        throw new Error('Project ID is required to save code');
      }

      await axios.post(
        `http://localhost:5000/projects/${activeProject.id}/code`,
        {
          files: updatedFiles,
          sandboxId: Date.now().toString(),
        }
      );

      setFiles(updatedFiles);
      setConnectionStatus('connected');
      toast.success('Code saved successfully');
    } catch (error) {
      console.error('Error saving code:', error);
      setConnectionStatus('disconnected');
      toast.error('Failed to save code');
    } finally {
      setIsSavingCode(false);
    }
  };

  const handleRunProject = () => {
    toast.info('Running project...');
  };

  const handleRefreshProject = () => {
    fetchProjects();
    toast.info('Refreshing project...');
  };

  const startResizing = (e) => {
    setIsResizing(true);
    document.addEventListener('mousemove', handleResizing);
    document.addEventListener('mouseup', stopResizing);
  };

  const handleResizing = (e) => {
    if (isResizing) {
      const containerWidth =
        document.getElementById('main-container').offsetWidth;
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
    fetchProjects();
  }, []);

  // Debug effect to monitor activeProject changes
  useEffect(() => {
    console.log('Active project changed:', activeProject);
  }, [activeProject]);

  return (
    <div className="flex flex-col bg-background h-screen overflow-hidden">
      {/* Title Bar - Always show */}
      <div className="shrink-0">
        <TitleBar
          projects={projects}
          activeProject={activeProject}
          onProjectSelect={handleProjectSelect}
          onCreateProject={handleCreateProject}
          onSave={() => handleSaveCode(files)}
          onRun={handleRunProject}
          onRefresh={handleRefreshProject}
        />
      </div>

      {/* Main Content - Only show when project is selected */}
      {activeProject ? (
        <div id="main-container" className="flex flex-1 bg-gray-700 min-h-0">
          {/* Code Section */}
          <div style={{ width: `${splitPosition}%` }} className="h-full">
            <Codeview
              theme="dark"
              files={files}
              onSave={handleSaveCode}
              isSaving={isSavingCode}
              isGenerating={isGenerating}
              activeProject={activeProject}
            />
          </div>

          {/* Resizer */}
          <div
            className={`w-1 h-full bg-border hover:bg-primary/50 cursor-col-resize active:bg-primary ${
              isResizing ? 'bg-primary' : ''
            }`}
            onMouseDown={startResizing}
          />

          {/* Chat Section */}
          <div style={{ width: `${100 - splitPosition}%` }} className="h-full">
            <Chatview
              activeProject={activeProject}
              onGenerateStart={() => setIsGenerating(true)}
              onGenerateEnd={() => setIsGenerating(false)}
            />
          </div>
        </div>
      ) : (
        // Show this when no project is selected
        <div className="flex-1 flex items-center justify-center bg-background">
          <div className="text-center text-muted-foreground">
            <h3 className="text-lg font-medium mb-2">No Project Selected</h3>
            <p className="text-sm">
              Select an existing project or create a new one to get started
            </p>
          </div>
        </div>
      )}

      {/* Status Bar - Only show when project is selected */}
      {activeProject && (
        <StatusBar
          activeProject={activeProject}
          isSaving={isSavingCode}
          isGenerating={isGenerating}
          connectionStatus={connectionStatus}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
