'use client';

import axios from 'axios';
import { toast } from 'sonner';
import { useCallback, useContext, useEffect, useState } from 'react';
import Chatview from '@/components/custom/Chatview';
import Codeview from '@/components/custom/Codeview';
import TitleBar from '@/components/custom/TitleBar';
import StatusBar from '@/components/custom/StatusBar';
import { motion } from 'framer-motion';
import { Octokit } from '@octokit/core';
import { PanelRightClose, PanelRightOpen } from 'lucide-react';
// @ts-expect-error - expected type mismatch due to third-party types
import { ProjectType } from '@/lib/types';
import logo from "../../public/bgRemoveLogoAnon.png"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PreviewContext } from '@/context/PreviewContext';
import { MessageContext } from '@/context/MessagesContext';
import Markdown from 'react-markdown';

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
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [activeTab, setActiveTab] = useState("Chat");
  const [loading, setloading] = useState(true)
  const [userInput, setuserInput] = useState("");






  const isSavingCode: boolean = false;

  // Validate environment variable
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!backendUrl) {
    throw new Error('NEXT_PUBLIC_BACKEND_URL environment variable is not set');
  }

  const Previewcontext = useContext(PreviewContext);
  if (!Previewcontext) {
    throw new Error("context not defined");
  }
  const {setPreview } = Previewcontext;

  // const Msgcontext = useContext(MessageContext);
  // if (!Msgcontext) {
  //   throw new Error("context not present");
  // }

  // const { messages, setMessage } = Msgcontext;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey && userInput.length > 1) {
      event.preventDefault();
    }
  };

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
    <div className="w-full h-screen overflow-hidden bg-[#fff]  flex ">
      {/* this is the left most  nav bar  */}
  {/*  */}


{/* have to add the loader in the initial screen */}





      {/* middle part */}

      <div className="w-[73.2%]  border-r-[0.5px] border-[#37454E]/20  h-full flex flex-col">
        {/* top nav bar  */}

        <div className="w-full  text-black    h-[8.5%] flex items-center justify-between px-5  ">
          {/* first part */}
          <div className="flex w-[30%]   h-full items-center ">

          <div className="w-[30%]  h-full opacity-80">
            <Image className="w-full h-full object-cover" src={logo} alt="not showing" />
          </div>  

          <div className="relative inline-block text-left">
      <div
        className="w-9 mr-3 -ml-1 bg-transparent flex items-center justify-center transition-all duration-150 h-9 rounded-full hover:bg-[#F2F2F2] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide opacity-60 lucide-chevron-down"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </div>

      {isOpen && (
        <div className="absolute left-[10%] mt-2 w-48 bg-white rounded-md border border-black/50 z-50">
          <div className="py-1 f19">
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Git Push</button>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">New Project</button>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Download</button>
          </div>
        </div>
      )}
    </div>

          <div
                  onClick={() => (setClicked(!clicked) ,  setPreview(prev=>!prev))}
      className={`w-[20%] px-1 flex items-center h-[57%] border border-black/20 rounded-lg overflow-hidden transition-colors duration-200
        ${clicked ? 'bg-[#37454E]' : 'bg-[#F2F2F2]'}`}
    >
      <div
        onClick={() => setClicked(!clicked)}
        className={`w-[65%] h-[75%] flex items-center justify-center rounded-lg transition-all duration-500 cursor-pointer
          ${clicked ? 'translate-x-[60%] bg-white' : 'translate-x-0 bg-white'}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-code"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </div>
    </div>
    <div className="mx-5 opacity-70"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-panel-bottom"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 15h18"></path></svg></div>
    <div className="opacity-70"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-package-check"><path d="m16 16 2 2 4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg></div>
          </div>
          {/* search bar section */}
          <div className="w-[36%] h-full flex items-center justify-center ">
            <div className="w-full h-[50%] rounded-md bg-[#F2F2F2] flex items-center justify-between px-2">
              {/*  the left section*/}
              <div className="flex items-center  gap-1">
                <div className="p-1 hover:bg-[#E7E8E9] rounded-lg transition-all duration-200">
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="opacity-50"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                </div>

                <div className="p-1 mr-2 hover:bg-[#E7E8E9] rounded-lg transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house opacity-70"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                </div>

                <div className="f17 opacity-80">
                  <p>BetaVersion/</p>
                </div>

              </div>
            {/* right side */}
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-refresh-cw opacity-70"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
              </div>
            </div>
          </div>

          <div className="w-[20%] h-full flex items-center justify-end gap-2  ">
            <div className="p-1 hover:bg-[#E7E8E9] transition-all  rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </div>
            <div className="p-1 hover:bg-[#E7E8E9] transition-all  rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </div>

            <div className="px-3 py-1 flex items-center gap-2 bg-[#37454E] text-white rounded-[4px]">
              <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="opacity-90" height=".9em" width=".9em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg></div>
              <p className="f17">Run Lua</p>
            </div>

          </div>

          
        </div>

        {/* code & preview part */}

        <div className="w-full flex items-end justify-center h-[91%] text-white ">

          <div className="w-[97.5%] h-[99%] rounded-lg overflow-hidden border-[1px] border-black/10">
          <Codeview
                // files={files}
                isSaving={isSavingCode}
                isGenerating={isGenerating}
                activeProject={activeProject}
                onCommit={handleSaveToGithub}
              />

          </div>

        </div>
      </div>

      {/* last part chat section  */}

      <div className="w-[33.7%]  h-full text-black flex flex-col">
  <div className="relative items-center w-full h-[9%] border-b border-[#37454E]/20 flex px-4">

      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-panel-right"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M15 3v18"></path></svg>        
      </div>

  </div>

  {/* Conditional Content */}
  {activeTab === "Chat" ? (
    <div className="w-full h-[77%] text-[#000]  gap-5 justify-end px-4 flex flex-col">
      {/* Chat Section */}
      <div className="flex flex-col overflow-y-auto py-5 gap-5 justify-end items-end">
        {/* {messages.map((msg:any, index:any) => (
          <div key={index} className="w-full flex flex-col gap-3 justify-end items-end">
            {msg.role === "user" && (
              <div className="min-w-[70%] max-w-[80%] py-2 px-2 text-sm rounded-lg bg-[#F2F2F2]">
                {msg.msg}
              </div>
            )}

            {loading ? (
              <div className="w-full flex items-start gap-2">
                <div className="w-[12%] flex justify-center h-full">
                  <div className="w-8 h-8 rounded-full bg-[#313D45] flex items-center justify-center">
                    <svg
                      className="w-[20px] text-[#8F989E]"
                      width="20"
                      height="20"
                      viewBox="0 0 25 25"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5192 1.91235L17.0537 4.53232L18.1874 5.18731M21.5883 7.15228V12.2914V13.5762M21.5883 17.4306L17.0537 20.0506L15.9201 20.7056M12.5192 22.6705L7.98463 20.0506L6.85099 19.3956M3.45007 17.4306V12.2914V11.0067M3.45007 7.15228L7.98463 4.53232L9.11826 3.87733"
                        stroke="#fff"
                        strokeWidth="1.25"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              
                <div className="w-[85%] flex gap-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-200"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse delay-400"></span>
                </div>
              </div>
            ) : (
              msg.role === "ai" && (
                <div className="w-full gap-2 flex items-start">
                  <div className="w-[12%] flex justify-center h-full">
                    <div className="w-8 h-8 rounded-full bg-[#313D45] flex items-center justify-center">
                      <svg
                        className="w-[20px] text-[#8F989E]"
                        width="20"
                        height="20"
                        viewBox="0 0 25 25"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5192 1.91235L17.0537 4.53232L18.1874 5.18731M21.5883 7.15228V12.2914V13.5762M21.5883 17.4306L17.0537 20.0506L15.9201 20.7056M12.5192 22.6705L7.98463 20.0506L6.85099 19.3956M3.45007 17.4306V12.2914V11.0067M3.45007 7.15228L7.98463 4.53232L9.11826 3.87733"
                          stroke="#fff"
                          strokeWidth="1.25"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-[85%] f4 text-sm">

                  <Markdown>{msg.msg}</Markdown>
                  </div>
                </div>
              )
            )}
          </div>
        ))} */}
      </div>
    </div>
  ) : (
    <div className="w-full h-[77%] border-b border-[#37454E] flex flex-col justify-center px-4">
      <div className="text-white text-sm font-semibold">Deployed URL</div>
      <div className="text-[#8F989E] text-sm mt-2">
        <a href="https://example.com" target="_blank" className="underline">
          https://example.com
        </a>
      </div>
    </div>
  )}

  {/* Input Section (Visible in Both Tabs) */}
  <div className="w-full h-[20%]  text-black flex items-center justify-start px-1">
    <div className="w-[95%] ml-1 h-[76%] justify-between flex flex-col border-[#37454E]/40 border rounded-lg">
      <div className="w-full py-2">
        <input
          value={userInput}
          onChange={(e) => setuserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full text-black outline-none f4 bg-transparent placeholder:text-[#45544D] text-sm px-3"
          type="text"
          placeholder="What do you want to change..."
        />
      </div>
      <div className="w-full flex justify-end items-center px-4">
        <div className="p-2 text-sm rounded-full mb-2 flex items-center justify-center text-white bg-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 12 7-7 7 7"></path>
            <path d="M12 19V5"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};
export default ProjectsPage;