import { useEffect, useState } from 'react';
import ProjectSidebar from '../components/ProjectSidebar';
import axios from 'axios';
import { toast } from 'sonner';
import Chatview from '@/components/custom/Chatview';
import { Menu, X } from 'lucide-react';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [projectMessages, setProjectMessages] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchProjects = async () => {
    try {
      await axios.get('http://localhost:5000/projects?walletAddress=ww5nJTj6dD6Q6oIg-bOm20y2yawWDqDcQbQDcmwGOlI').then((res) => {
        console.log(res.data.projects)
        setProjects(res?.data?.projects)
      })
    } catch (error) {
      console.log('err in fetching projects', error)
    }
  }

  const handleCreateProject = async (projectName) => {
    try {
      const newProject = await axios.post('http://localhost:5000/projects', {
        name: projectName,
        arweaveId: "new Id",
        sandboxId: "null",
        walletAddress: "ww5nJTj6dD6Q6oIg-bOm20y2yawWDqDcQbQDcmwGOlI"
      }).then((res) => {
        const project = res?.data?.project
        console.log(project)
        return project
      })

      setProjects([...projects, newProject]);
      setProjectMessages(prev => ({
        ...prev,
        [newProject.id]: []
      }));
      toast.success("Project created successfully");
    } catch (error) {
      toast.error("Error creating project")
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background border rounded-md"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed lg:relative
        w-64 h-full
        transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        bg-background border-r z-40
      `}>
        <ProjectSidebar
          projects={projects}
          activeProject={activeProject}
          onCreateProject={handleCreateProject}
          onProjectSelect={(project) => setActiveProject(project)}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full">
        <Chatview activeProject={activeProject} />
      </div>
    </div>
  );
};

export default ProjectsPage;
