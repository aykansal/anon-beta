'use client';

import axios from 'axios';
import { toast } from 'sonner';
import { useCallback, useEffect, useState } from 'react';
import Chatview from '@/components/custom/Chatview';
import Codeview from '@/components/custom/Codeview';
import TitleBar from '@/components/custom/TitleBar';
import StatusBar from '@/components/custom/StatusBar';
import { motion } from 'framer-motion';
import { Octokit } from '@octokit/core';
import { PanelRightClose, PanelRightOpen } from 'lucide-react';
import { ProjectType } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [splitPosition] = useState<number>(70);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<string>('connected');
  const [error, setError] = useState<Error | null>(null); // Global error state for UI feedback
  const [status, setStatus] = useState<string>(''); // New state for handling status
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [githubToken, setGithubToken] = useState<string | null>(null);
  const [isChatVisible, setIsChatVisible] = useState<boolean>(true);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [newProjectName, setNewProjectName] = useState<string>('');

  const isSavingCode: boolean = false;

  // Validate environment variable
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

        // Get the stored project ID from localStorage
        const storedProjectId = localStorage.getItem('activeProjectId');

        if (storedProjectId) {
          // Find the stored project in the fetched projects
          const storedProject = res.data.projects.find(
            // @ts-expect-error ignore
            (p) => p.projectId === storedProjectId
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
        toast.info('No projects found! Create a new project');
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
  }, [backendUrl]);

  const handleProjectSelect = async (project: ProjectType) => {
    try {
      if (!project) {
        setActiveProject(null);
        // setFiles({});
        setError(null);
        localStorage.removeItem('activeProjectId');
        return;
      }

      if (!project.projectId) {
        throw new Error('Invalid project ID');
      }

      setConnectionStatus('connecting');
      setError(null);

      // Store the selected project ID in localStorage
      localStorage.setItem('activeProjectId', project.projectId);

      // Fetch project details including codebase
      const response = await axios.get(
        `${backendUrl}/projects/${project.projectId}`
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
      // @ts-expect-error ignore
      const errorMessage = error.message || 'Failed to load project';
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

  const handleRunProject = () => {
    if (!activeProject) {
      toast.error('No project selected to run');
      return;
    }
    setStatus('Running Project...'); // Set status to running
    toast.info('Running project...');
  };

  useEffect(() => {
    console.log('Active project changed:', activeProject);
  }, [activeProject]);

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
    try {
      if (!activeProject) {
        throw new Error('No active project selected');
      }

      if (!githubToken) {
        window.location.href = `${backendUrl}/auth/github`;
        return;
      }

      setStatus('Checking GitHub repository...');
      setConnectionStatus('connecting');
      setError(null);
      localStorage.setItem('githubToken', githubToken);
      const store = localStorage.getItem('githubToken');

      const octokit = new Octokit({
        auth: store,
      });

      let repoOwner;
      let repoExists = false;
      let currentCommitSha;
      let currentTreeSha;

      // Check if repository exists and get current HEAD
      try {
        const userResponse = await octokit.request('GET /user', {
          headers: { 'X-GitHub-Api-Version': '2022-11-28' },
        });
        repoOwner = userResponse.data.login;

        // const repoResponse = await octokit.request(
        //   'GET /repos/{owner}/{repo}',
        //   {
        //     owner: repoOwner,
        //     repo: activeProject.name,
        //     headers: { 'X-GitHub-Api-Version': '2022-11-28' },
        //   }
        // );
        repoExists = true;
        toast.info('Found existing repository');

        // Get the latest commit SHA from the main branch
        const branchResponse = await octokit.request(
          'GET /repos/{owner}/{repo}/branches/{branch}',
          {
            owner: repoOwner,
            repo: activeProject.name,
            branch: 'main', // Assuming 'main' is the default branch
            headers: { 'X-GitHub-Api-Version': '2022-11-28' },
          }
        );
        currentCommitSha = branchResponse.data.commit.sha;
        currentTreeSha = branchResponse.data.commit.commit.tree.sha;
      } catch (checkError) {
        // @ts-expect-error ignore
        if (checkError.status === 404) {
          setStatus('Creating new GitHub repository...');
          const createResponse = await octokit.request('POST /user/repos', {
            name: activeProject.name,
            // description: 'Created with Vybe IDE',
            description: 'Created with ANON AI',
            private: true,
            headers: { 'X-GitHub-Api-Version': '2022-11-28' },
          });
          repoOwner = createResponse.data.owner.login;
          toast.success('New repository created successfully!');
        } else {
          throw checkError;
        }
      }

      // Fetch and prepare files to commit
      setStatus('Fetching project files...');
      const filesToCommitResponse = await axios.get(
        `${backendUrl}/projects/${activeProject.projectId}`
      );
      const codebase = filesToCommitResponse.data.codebase;

      if (!codebase || codebase.length === 0) {
        console.log('No files to commit');
        toast.error('No files to commit');
        return;
      }

      const filesToCommit = {};
      // @ts-expect-error ignore
      codebase.forEach((file) => {
        const cleanPath = file.filePath.startsWith('/')
          ? file.filePath.substring(1)
          : file.filePath;
        // @ts-expect-error ignore
        filesToCommit[cleanPath] = file.code;
      });

      console.log('Prepared files to commit:', filesToCommit);

      // Prepare tree objects for batch commit
      setStatus('Preparing batch commit...');
      const treeItems = [];
      for (const [filePath, content] of Object.entries(filesToCommit)) {
        if (!content || typeof content !== 'string') {
          console.warn(`Skipping ${filePath}: Invalid or empty content`);
          continue;
        }

        // Create a blob for each file
        const blobResponse = await octokit.request(
          'POST /repos/{owner}/{repo}/git/blobs',
          {
            owner: repoOwner,
            repo: activeProject.name,
            content: btoa(content),
            encoding: 'base64',
            headers: { 'X-GitHub-Api-Version': '2022-11-28' },
          }
        );

        treeItems.push({
          path: filePath,
          mode: '100644', // Regular file mode
          type: 'blob',
          sha: blobResponse.data.sha,
        });
      }

      if (treeItems.length === 0) {
        toast.error('No valid files to commit');
        return;
      }

      // Create a new tree
      const treeResponse = await octokit.request(
        'POST /repos/{owner}/{repo}/git/trees',
        {
          owner: repoOwner,
          repo: activeProject.name,
          // @ts-expect-error ignore
          tree: treeItems,
          base_tree: repoExists ? currentTreeSha : undefined, // Use base tree if repo exists
          headers: { 'X-GitHub-Api-Version': '2022-11-28' },
        }
      );

      // Create a new commit
      setStatus('Committing files to GitHub...');
      const commitResponse = await octokit.request(
        'POST /repos/{owner}/{repo}/git/commits',
        {
          owner: repoOwner,
          repo: activeProject.name,
          message: 'Batch commit from ANON AI',
          // message: 'Batch commit from Vybe IDE',
          tree: treeResponse.data.sha,
          parents: repoExists && currentCommitSha ? [currentCommitSha] : [],
          headers: { 'X-GitHub-Api-Version': '2022-11-28' },
        }
      );

      // Update the main branch reference
      await octokit.request('PATCH /repos/{owner}/{repo}/git/refs/{ref}', {
        owner: repoOwner,
        repo: activeProject.name,
        ref: 'heads/main', // Assuming 'main' is the default branch
        sha: commitResponse.data.sha,
        headers: { 'X-GitHub-Api-Version': '2022-11-28' },
      });

      toast.success('Files successfully batch committed to GitHub!');
      setConnectionStatus('connected');
    } catch (error) {
      console.error('Error committing to GitHub:', error);
      const errorMessage =
        // @ts-expect-error ignore
        error.response?.data?.error ||
        // @ts-expect-error ignore
        error.message ||
        'Failed to commit to GitHub';
      setError(new Error(errorMessage));
      toast.error('Error committing to GitHub:', {
        description: 'Check dev console for more details',
      });
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
        setGithubToken(accessToken);
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
      setGithubToken(storedToken);
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

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <div className="shrink-0 border-b border-border">
        <TitleBar
          onProjectSelect={handleProjectSelect}
          onCreateProject={handleCreateProject}
          onRefresh={handleRefreshProject}
          githubConnected={!!githubToken}
          activeProject={activeProject}
          onSave={handleSaveToGithub}
          onRun={handleRunProject}
          projects={projects}
        />
      </div>

      {/* Error Display - Updated colors */}
      {error && (
        <div className="bg-destructive/5 px-4 py-2 text-destructive flex justify-between items-center border-b border-destructive/10">
          <p>{error.message}</p>
          <button
            onClick={fetchProjects}
            className="text-sm text-destructive hover:text-destructive/80"
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
            style={{
              width: isChatVisible ? `${splitPosition}%` : '100%',
              transition: 'width 0.3s ease-in-out',
            }}
            className="h-full min-h-0 relative flex"
          >
            {/* Code Editor Container */}
            <div className="flex-1 relative">
              <Codeview
                // files={files}
                isSaving={isSavingCode}
                isGenerating={isGenerating}
                // @ts-expect-error ignore
                activeProject={activeProject}
                onCommit={handleSaveToGithub}
              />
            </div>

            {/* Toggle Chat Button - Repositioned */}
            <div className="relative w-0">
              <button
                onClick={() => setIsChatVisible(!isChatVisible)}
                className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-primary/10 hover:bg-primary/20 text-primary p-1.5 rounded-full transition-colors border border-border"
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
            className="h-full min-h-0 border-l border-border relative"
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
        <div className="flex-1 flex items-center justify-center bg-background">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2 text-foreground">
              No Project Selected
            </h3>
            {/* <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90"
            >
              Create a New Project
            </button> */}
          </div>
        </div>
      )}

      {/* Create Project Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Project</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreateSubmit}>
            <div className="grid gap-4 py-4">
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
                  className="w-full p-2 rounded-md border border-border bg-background text-foreground"
                  placeholder="Enter project name"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Create Project</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Status Bar - Updated colors */}
      <div className="shrink-0 border-t border-border">
        <StatusBar
          // isCreating={isCreating}
          activeProject={activeProject}
          // isSaving={isSavingCode}
          // isGenerating={isGenerating}
          connectionStatus={connectionStatus}
          status={status}
          // className="bg-background"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
