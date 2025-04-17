'use client';

import axios from 'axios';
import { toast } from 'sonner';
import { useCallback, useEffect, useState } from 'react';
import Chatview from '@/components/custom/Chatview';
import Codeview from '@/components/custom/Codeview';
import TitleBar from '@/components/custom/TitleBar';
import StatusBar from '@/components/custom/StatusBar';
import { motion } from 'framer-motion';
import { PanelRightClose, PanelRightOpen, ArrowUp, PlusCircle } from 'lucide-react';
import { ActiveProjectType } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { GitHubProvider } from '@/context/GitHubContext';
import { useGitHub } from '@/context/GitHubContext';

const ProjectsPageContent = () => {
  const [projects, setProjects] = useState<ActiveProjectType[]>([]);
  const [splitPosition] = useState<number>(70);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<ActiveProjectType | null>(
    null
  );
  const [connectionStatus, setConnectionStatus] = useState<string>('connected');
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<string>('');
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [isChatVisible, setIsChatVisible] = useState<boolean>(true);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [newProjectName, setNewProjectName] = useState<string>('');
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);

  const { commitToRepository, resetGitHubState } = useGitHub();

  const isSavingCode: boolean = false;

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!backendUrl) {
    throw new Error('NEXT_PUBLIC_BACKEND_URL environment variable is not set');
  }

  const fetchProjects = useCallback(async () => {
    try {
      setConnectionStatus('connecting');
      setError(null);
      const walletAddres = await window?.arweaveWallet?.getActiveAddress();
      const res = await axios.get(
        `${backendUrl}/projects?walletAddress=${walletAddres}`
      );
      if (!res.data || typeof res.data.projects === 'undefined') {
        throw new Error('Invalid response format from server');
      }

      if (res.data.projects.length > 0) {
        setProjects(res.data.projects);
        setIsFirstVisit(false);

        const storedProjectId = localStorage.getItem('activeProjectId');

        if (storedProjectId) {
          const storedProject = res.data.projects.find(
            (p: {
              createdAt: string;
              description: string;
              id: number;
              name: string;
              processId: string;
              projectId: string;
              sandboxId: string;
              updatedAt: string;
              walletAddress: string;
            }) => p.projectId === storedProjectId
          );
          if (storedProject) {
            setActiveProject(storedProject);
          } else {
            // If stored project not found, set first project as active
            setActiveProject(res.data.projects[0]);
            localStorage.setItem(
              'activeProjectId',
              res.data.projects[0].projectId
            );
          }
        } else {
          // If no stored project, set first project as active
          setActiveProject(res.data.projects[0]);
          localStorage.setItem(
            'activeProjectId',
            res.data.projects[0].projectId
          );
        }

        toast.success('Projects fetched successfully');
      } else {
        setProjects([]);
        setActiveProject(null);
        localStorage.removeItem('activeProjectId');
        // Don't show toast for first-time users with no projects
        if (!isFirstVisit) {
          toast.info('No projects found! Create a new project');
        }
      }
      setConnectionStatus('connected');
    } catch (error) {
      console.error('Error fetching projects:', error);
      const errorMessage =
        // @ts-expect-error ignore
        error.response?.data?.error ||
        // @ts-expect-error ignore
        error.message ||
        'Failed to fetch projects';
      setError(new Error(errorMessage));
      toast.error(errorMessage);
      setConnectionStatus('disconnected');
    }
  }, [backendUrl, isFirstVisit]);

  const handleProjectSelect = async (project: ActiveProjectType) => {
    try {
      if (!project) {
        setActiveProject(null);
        // setFiles({});
        setError(null);
        localStorage.removeItem('activeProjectId');
        resetGitHubState(); // Reset GitHub state when switching projects
        return;
      }

      if (!project.projectId) {
        throw new Error('Invalid project ID');
      }

      // Check if wallet address is available
      if (!walletAddress) {
        const currentWalletAddress =
          await window?.arweaveWallet?.getActiveAddress();
        if (!currentWalletAddress) {
          throw new Error(
            'Wallet address is required. Please connect your wallet.'
          );
        }
        setWalletAddress(currentWalletAddress);
      }

      setConnectionStatus('connecting');
      setError(null);

      // Store the selected project ID in localStorage
      localStorage.setItem('activeProjectId', project.projectId);

      // Fetch project details including codebase
      const response = await axios.get(
        `${backendUrl}/projects/${project.projectId}?walletAddress=${walletAddress}`
      );

      if (response.data) {
        // Update the active project with full project data
        setActiveProject(project);

        // Update files if codebase exists
        if (response.data.codebase) {
          if (Array.isArray(response.data.codebase)) {
            const normalizedCodebase = {};
            // @ts-expect-error ignore
            response.data.codebase.forEach((file) => {
              const filePath = file.filePath.startsWith('/')
                ? file.filePath
                : `/${file.filePath}`;
              // @ts-expect-error ignore
              normalizedCodebase[filePath] = file.code;
            });
            // setFiles(normalizedCodebase);
          } else {
            // setFiles(response.data.codebase);
          }
        } else {
          // setFiles({});
        }
      }

      setConnectionStatus('connected');
      toast.success(`Selected project: ${project.name}`);
    } catch (error) {
      console.error('Error selecting project:', error);
      let errorMessage = 'Failed to load project';

      // @ts-expect-error ignore
      if (error.response) {
        // @ts-expect-error ignore
        if (error.response.status === 400) {
          errorMessage = 'Invalid request. Wallet address might be missing.';
          // @ts-expect-error ignore
        } else if (error.response.status === 404) {
          errorMessage = 'Project not found. It may have been deleted.';
        }

        // @ts-expect-error ignore
        if (error.response.data && error.response.data.error) {
          // @ts-expect-error ignore
          errorMessage = error.response.data.error;
        }
        // @ts-expect-error ignore
      } else if (error.message) {
        // @ts-expect-error ignore
        errorMessage = error.message;
      }

      setError(new Error(errorMessage));
      toast.error(errorMessage);
      setConnectionStatus('disconnected');
      setActiveProject(null);
      localStorage.removeItem('activeProjectId');
    }
  };

  const handleCreateProject = async (projectName: string) => {
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

      // Get the actual spawnProcess function
      const spawnProcessFn = await import('@/lib/arkit').then(
        (mod) => mod.spawnProcess
      );
      const processId = await spawnProcessFn(projectName, [
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
        walletAddress: walletAddress,
      });

      if (!res.data?.project) {
        throw new Error('Invalid response from server: missing project data');
      }

      const newProject = res.data.project;
      console.log('Created new project:', newProject);

      setProjects((prevProjects) => [...prevProjects, newProject]);
      await handleProjectSelect(newProject);
      setIsFirstVisit(false);
      setConnectionStatus('connected');
      toast.success('Project created successfully');
    } catch (error) {
      console.error('Error creating project:', error);
      const errorMessage =
        // @ts-expect-error ignore
        error.response?.data?.error ||
        // @ts-expect-error ignore
        error.message ||
        'Error creating project';
      setError(new Error(errorMessage));
      toast.error(errorMessage);
      setConnectionStatus('disconnected');
    } finally {
      // setIsCreating(false); // Reset isCreating after completion
      setStatus(''); // Reset status after completion
    }
  };

  // useEffect(() => {
  //   const handleCodebaseUpdate = (event: CustomEvent) => {
  //     if (!event.detail || typeof event.detail !== 'object') {
  //       console.warn('Invalid codebase update event:', event);
  //       return;
  //     }
  //     const newCodebase = event.detail;
  //     setFiles(newCodebase);
  //   };

  //   window.addEventListener('codebaseUpdate', handleCodebaseUpdate);
  //   return () =>
  //     window.removeEventListener('codebaseUpdate', handleCodebaseUpdate);
  // }, []);

  const fetchData = useCallback(async () => {
    try {
      const connectWallet = await import('@/lib/arkit2').then(
        (mod) => mod.connectWallet
      );
      const connectionStatus = await connectWallet();
      if (connectionStatus === 'connected wallet successfully') {
        const walletAddress = await window.arweaveWallet.getActiveAddress();
        setWalletAddress(walletAddress);
        const user = await axios.post(`${backendUrl}/user/create`, {
          name: 'test',
          walletAddress,
        });
        console.log(user.data);
      }
    } catch (error) {
      // @ts-expect-error ignore
      if (error.status === 300) {
        toast.info('Welcome back !!', {
          position: 'top-right',
        });
        return;
      }
      console.error('Error during wallet connection or user creation:', error);
    }
  }, [backendUrl]);

  const handleRefreshProject = async () => {
    if (!activeProject) {
      toast.error('No project selected to refresh');
      return;
    }

    await fetchData();
    await fetchProjects();
    toast.info('Refreshing project...');
  };

  useEffect(() => {
    const fetchDataAndProjects = async () => {
      try {
        await fetchData();
        await fetchProjects();
      } catch (error) {
        console.error('Error in fetching data or projects:', error);
      }
    };
    fetchDataAndProjects();
  }, [fetchData, fetchProjects]);

  const handleSaveToGithub = async () => {
    if (!activeProject) {
      toast.error('No project selected');
      return;
    }

    setStatus('Processing GitHub request...');
    setConnectionStatus('connecting');

    try {
      await commitToRepository(activeProject, walletAddress, true);
      setConnectionStatus('connected');
    } catch (error) {
      console.error('Error in GitHub operation:', error);
      setConnectionStatus('disconnected');
    } finally {
      setStatus('');
    }
  };

  useEffect(() => {
    const handleGitHubAuth = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get('access_token');

      if (accessToken) {
        localStorage.setItem('githubToken', accessToken);
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
        toast.success('Successfully connected to GitHub');
      }
    };

    handleGitHubAuth();
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem('githubToken');
    if (storedToken) {
      localStorage.setItem('githubToken', storedToken);
    }
  }, []);

  const handleCreateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProject = newProjectName.trim();
    if (newProject) {
      await handleCreateProject(newProject);
      setNewProjectName('');
      setIsDialogOpen(false);
    }
  };

  console.log('activeProject', activeProject);

  // Add useEffect for Wander wallet events
  useEffect(() => {
    // Handler for arweaveWalletLoaded event
    const handleWalletLoaded = async () => {
      console.log("Wander wallet loaded - API now available");
      
      try {
        // Log wallet info
        // @ts-expect-error - Wander wallet types not fully defined
        console.log(`Using ${window.arweaveWallet.walletName} v${window.arweaveWallet.walletVersion}`);
        
        // Check if we have required permissions
        // @ts-expect-error - Wander wallet API types not fully defined
        const permissions = await window.arweaveWallet.getPermissions();
        
        if (permissions.length <= 0) {
          // Request minimal permissions with app info
          await window.arweaveWallet.connect(
            ["ACCESS_ADDRESS", "ACCESS_ARWEAVE_CONFIG", "SIGN_TRANSACTION", "DISPATCH"], 
            {
              name: "Anon - Coding Workspace",
              logo: "https://arweave.net/jAvd7Z1CBd8gVF2D6ESj7SMCCUYxDX_z3vpp5aHdaYk"
            },
            {
              host: "g8way.io",
              port: 443,
              protocol: "https"
            }
          );
          toast.success("Wallet connected successfully");
        }
        
        // Fetch wallet address
        if (permissions.includes("ACCESS_ADDRESS")) {
          const address = await window.arweaveWallet.getActiveAddress();
          setWalletAddress(address);
          console.log("Wallet address set:", address);
          
          // Fetch user projects after wallet is connected
          await fetchProjects();
        }
        
        // Get gateway config if permission available
        if (permissions.includes("ACCESS_ARWEAVE_CONFIG")) {
          try {
            // @ts-expect-error - Wander wallet API types not fully defined
            const config = await window.arweaveWallet.getArweaveConfig();
            console.log("Using Arweave gateway:", config.host);
          } catch (err) {
            console.error("Error getting Arweave config:", err);
          }
        }
      } catch (error) {
        console.error("Error initializing wallet:", error);
        toast.error("Failed to connect wallet");
      }
    };
    
    // Handler for walletSwitch event
    const handleWalletSwitch = (e: Event) => {
      try {
        // Cast to access the detail property
        const customEvent = e as CustomEvent<{ address: string }>;
        const newAddress = customEvent.detail.address;
        console.log("Wallet switched to:", newAddress);
        
        // Update wallet address in state
        setWalletAddress(newAddress);
        
        // Refresh projects for the new wallet
        setConnectionStatus('connecting');
        void fetchProjects(); // Use void to handle the Promise
        
        toast.info("Wallet switched - refreshing projects");
      } catch (error) {
        console.error("Error handling wallet switch:", error);
        toast.error("Error updating after wallet switch");
      }
    };
    
    // Add event listeners
    window.addEventListener("arweaveWalletLoaded", handleWalletLoaded);
    window.addEventListener("walletSwitch", handleWalletSwitch);
    
    // Event emitter for more advanced events if needed
    const setupAdvancedEvents = async () => {
      if (window.arweaveWallet) {
        // @ts-expect-error - Wander wallet events API not in type definitions
        if (window.arweaveWallet.events) {
          // Add any advanced event handlers here using window.arweaveWallet.events
          console.log("Setting up advanced wallet event handlers");
        }
      }
    };
    
    // Call this after a small delay to ensure wallet is loaded
    const timer = setTimeout(setupAdvancedEvents, 1000);
    
    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("arweaveWalletLoaded", handleWalletLoaded);
      window.removeEventListener("walletSwitch", handleWalletSwitch);
      clearTimeout(timer);
      console.log("Cleaned up Wander wallet event listeners");
    };
  }, [fetchProjects]); // Add fetchProjects as dependency

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <div className="shrink-0 border-b border-border">
        <TitleBar
          onProjectSelect={handleProjectSelect}
          onCreateProject={handleCreateProject}
          onRefresh={handleRefreshProject}
          // githubConnected={!!githubToken}
          activeProject={activeProject}
          onConnectGithub={handleSaveToGithub}
          projects={projects}
        />
      </div>

      {/* Error Display - Updated colors */}
      {error && (
  <div className="bg-white px-4 py-2 text-gray-800 flex justify-between items-center border border-gray-200 rounded-md shadow-sm">
    <p>{error.message}</p>
    <button
      onClick={fetchProjects}
      className="text-sm text-blue-600 hover:text-blue-500"
    >
      Retry
    </button>
  </div>
)}


      {/* Main Content */}
      {activeProject ? (
  <div
    id="main-container"
    className="flex flex-1 min-h-0 overflow-hidden bg-white text-gray-800"
  >
    <div
      style={{
        width: isChatVisible ? `${splitPosition}%` : '100%',
        transition: 'width 0.3s ease-in-out',
      }}
      className="h-full min-h-0 relative flex"
    >
      {/* Code Editor Container */}
      <div className="flex-1 relative">
        <Codeview
          isSaving={isSavingCode}
          isGenerating={isGenerating}
          activeProject={activeProject}
          onCommit={handleSaveToGithub}
        />
      </div>

      {/* Toggle Chat Button */}
      <div className="relative w-0">
        <button
          onClick={() => setIsChatVisible(!isChatVisible)}
          className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-100 hover:bg-gray-200 text-gray-700 p-1.5 rounded-full transition-colors border border-gray-300 shadow-sm"
          title={isChatVisible ? 'Hide Chat' : 'Show Chat'}
        >
          {isChatVisible ? (
            <PanelRightClose size={16} />
          ) : (
            <PanelRightOpen size={16} />
          )}
        </button>
      </div>
    </div>

    {/* Animated Chat Panel */}
    <motion.div
      style={{ width: `${100 - splitPosition}%` }}
      animate={{
        width: isChatVisible ? `${100 - splitPosition}%` : '0%',
        opacity: isChatVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: [0.32, 0.72, 0, 1],
      }}
      className="h-full min-h-0 border-l border-gray-200 bg-white relative"
    >
      {isChatVisible && (
        <Chatview
          activeProject={activeProject}
          onGenerateStart={() => setIsGenerating(true)}
          onGenerateEnd={() => setIsGenerating(false)}
        />
      )}
    </motion.div>
  </div>
) : (
  <div className="flex-1 flex items-center justify-center bg-gray-50 text-gray-700">
    <div className="text-center">
      <ArrowUp className="mx-auto text-blue-500 mb-4 animate-bounce" size={28} />
      <p className="text-lg font-medium mb-1">Click the &ldquo;New&rdquo; button above to create a project</p>
      <p className="text-sm text-gray-500">Start coding with AI assistance</p>
    </div>
  </div>
)}


      {/* Create Project Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Create New Project</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreateSubmit} className="space-y-4">
            <div className="grid gap-4 py-2">
              <div className="space-y-2">
                <label
                  htmlFor="projectName"
                  className="text-sm font-medium leading-none"
                >
                  Project Name
                </label>
                <input
                  id="projectName"
                  type="text"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="w-full p-3 rounded-md border border-border bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Enter a descriptive name for your project"
                  required
                  autoFocus
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Choose a clear, descriptive name for your project. This will help you identify it later.
                </p>
              </div>
            </div>
            <DialogFooter className="flex justify-end gap-2 pt-2">
              <Button
                type="button"
                variant="default"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                variant="default"
                className="flex bg-black text-white items-center gap-1"
                disabled={!newProjectName.trim()}
              >
                <PlusCircle size={16} />
                new Project
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Status Bar - Updated colors */}
      <div className="shrink-0 border-t border-border">
        <StatusBar
          activeProject={activeProject}
          connectionStatus={connectionStatus}
          status={status}
          // className="bg-background"
        />
      </div>
    </div>
  );
};

// Wrapper component with GitHub Provider
const ProjectsPage = () => {
  return (
    <GitHubProvider>
      <ProjectsPageContent />
    </GitHubProvider>
  );
};

export default ProjectsPage;
