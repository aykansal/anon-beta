import React, { createContext, useContext, useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';
import axios from 'axios';
import { toast } from 'sonner';
import { ActiveProjectType } from '@/lib/types';
import { defaultFiles_3 } from '@/data/defaultFiles';

// Define specific error types instead of using 'any'
interface GitHubError extends Error {
  status?: number;
  response?: {
    data?: {
      message?: string;
      errors?: Array<{ message?: string }>;
    };
  };
}

interface GitHubFile {
  filePath: string;
  code: string;
}

// Define the TreeItem type
interface TreeItem {
  path: string;
  mode: '100644' | '100755' | '040000' | '160000' | '120000';
  type: 'blob' | 'tree' | 'commit';
  sha: string;
}

// GitHub workflow status
type GitHubStatus =
  | 'disconnected' // Not connected to GitHub
  | 'authenticated' // Authenticated but no repo connected
  | 'checking_repo' // Checking if repo exists
  | 'repo_exists' // Repo exists and is connected
  | 'creating_repo' // Creating a new repo
  | 'committing' // Committing to repo
  | 'error'; // An error occurred

type GitHubContextType = {
  // State
  githubToken: string | null;
  gitHubStatus: GitHubStatus;
  error: string | null;

  // Actions
  connectGitHub: () => void;
  checkRepository: (projectName: string) => Promise<boolean>;
  createRepository: (projectName: string) => Promise<boolean>;
  commitToRepository: (
    activeProject: ActiveProjectType,
    walletAddress: string,
    forcePush?: boolean
  ) => Promise<void>;
  resetGitHubState: () => void;
  disconnectGitHub: () => void;
};

const GitHubContext = createContext<GitHubContextType | undefined>(undefined);

export const useGitHub = () => {
  const context = useContext(GitHubContext);
  if (context === undefined) {
    throw new Error('useGitHub must be used within a GitHubProvider');
  }
  return context;
};

export const GitHubProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // State
  const [githubToken, setGithubToken] = useState<string | null>(null);
  const [gitHubStatus, setGitHubStatus] =
    useState<GitHubStatus>('disconnected');
  const [error, setError] = useState<string | null>(null);
  const [octokit, setOctokit] = useState<Octokit | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  // Environment variables
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!backendUrl) {
    throw new Error('NEXT_PUBLIC_BACKEND_URL environment variable is not set');
  }

  // Initialize GitHub connection on component mount or token change
  useEffect(() => {
    const initializeGitHub = async () => {
      const storedToken = localStorage.getItem('githubToken');

      if (storedToken) {
        try {
          setGithubToken(storedToken);
          const octokitInstance = new Octokit({ auth: storedToken });
          setOctokit(octokitInstance);

          // Verify token is valid by fetching user info
          const userResponse = await octokitInstance.request('GET /user', {
            headers: { 'X-GitHub-Api-Version': '2022-11-28' },
          });

          if (userResponse.data.login) {
            setUsername(userResponse.data.login);
            setGitHubStatus('authenticated');
            console.log('GitHub authenticated as:', userResponse.data.login);
          } else {
            throw new Error('Failed to get GitHub username');
          }
        } catch (error) {
          console.error('GitHub token validation failed:', error);
          localStorage.removeItem('githubToken');
          setGithubToken(null);
          setOctokit(null);
          setGitHubStatus('disconnected');
        }
      }
    };

    initializeGitHub();
  }, []);

  // Handle GitHub auth redirect
  useEffect(() => {
    const handleGitHubAuth = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get('access_token');

      if (accessToken) {
        localStorage.setItem('githubToken', accessToken);
        setGithubToken(accessToken);
        setOctokit(new Octokit({ auth: accessToken }));
        setGitHubStatus('authenticated');
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

  // Step 1: Connect to GitHub (Authentication)
  const connectGitHub = () => {
    window.location.href = `${backendUrl}/auth/github`;
  };

  // Disconnect from GitHub
  const disconnectGitHub = () => {
    localStorage.removeItem('githubToken');
    setGithubToken(null);
    setOctokit(null);
    setGitHubStatus('disconnected');
    setUsername(null);
    toast.info('Disconnected from GitHub');
  };

  // Reset state for new project
  const resetGitHubState = () => {
    setGitHubStatus(githubToken ? 'authenticated' : 'disconnected');
    setError(null);
  };

  // Step 2: Check if repository exists
  const checkRepository = async (projectName: string): Promise<boolean> => {
    if (!octokit || !username) {
      setError('GitHub not authenticated');
      return false;
    }

    setGitHubStatus('checking_repo');
    setError(null);

    try {
      const repoResponse = await octokit.request('GET /repos/{owner}/{repo}', {
        owner: username,
        repo: projectName,
        headers: { 'X-GitHub-Api-Version': '2022-11-28' },
      });

      if (repoResponse.status === 200) {
        setGitHubStatus('repo_exists');
        toast.success('Connected to existing GitHub repository');
        return true;
      }

      return false;
    } catch (err) {
      const error = err as GitHubError;
      if (error.status === 404) {
        // Repository doesn't exist - this is not an error
        return false;
      }

      // Other errors
      setError(error.message || 'Failed to check repository');
      setGitHubStatus('error');
      return false;
    }
  };

  // Step 3: Create a new repository
  const createRepository = async (projectName: string): Promise<boolean> => {
    if (!octokit || !username) {
      setError('GitHub not authenticated');
      return false;
    }

    setGitHubStatus('creating_repo');
    setError(null);

    try {
      const createResponse = await octokit.request('POST /user/repos', {
        name: projectName,
        description: 'Created with ANON AI',
        private: true,
        headers: { 'X-GitHub-Api-Version': '2022-11-28' },
      });

      if (createResponse.status === 201) {
        setGitHubStatus('repo_exists');
        toast.success('New repository created successfully!');
        return true;
      }

      return false;
    } catch (err) {
      const error = err as GitHubError;

      // Check for name conflict
      if (
        error.response?.data?.errors?.some((e) =>
          e.message?.includes('name already exists')
        )
      ) {
        // Try to verify if we have access to the repo
        try {
          const exists = await checkRepository(projectName);
          return exists;
        } catch {
          // No variable needed for catch
          setError(
            'A repository with this name already exists but is not accessible'
          );
          setGitHubStatus('error');
          toast.error('Repository name conflict', {
            description:
              'A repository with this name already exists but is not accessible. Please use a different project name.',
          });
          return false;
        }
      }

      setError(error.message || 'Failed to create repository');
      setGitHubStatus('error');
      toast.error('Failed to create repository');
      return false;
    }
  };

  // Helper function to check if repository has any commits or branches
  const checkIsEmptyRepository = async (
    owner: string,
    repo: string
  ): Promise<boolean> => {
    try {
      // First, try to get branches
      const branchesResponse = await octokit!.request(
        'GET /repos/{owner}/{repo}/branches',
        {
          owner,
          repo,
          headers: { 'X-GitHub-Api-Version': '2022-11-28' },
        }
      );

      // If we have branches, the repo is not empty
      return branchesResponse.data.length === 0;
    } catch (err) {
      const error = err as GitHubError;
      // Check various indicators of an empty repository
      if (
        error.message?.includes('Git Repository is empty') ||
        error.status === 409 ||
        error.response?.data?.message?.includes('empty')
      ) {
        return true;
      }
      // For other errors, rethrow
      throw error;
    }
  };

  // Helper function to initialize an empty repository with a README.md
  const initializeEmptyRepository = async (
    owner: string,
    repo: string
  ): Promise<{ commitSha: string; treeSha: string }> => {
    console.log(
      `Initializing empty repository using Contents API: ${owner}/${repo}`
    );

    // Create README content
    const readmeContent = `# ${repo}

Project created with ANON AI
`;

    try {
      // Use the Contents API to create the first file (README.md)
      // This should automatically create the initial commit and the main branch
      const response = await octokit!.request(
        'PUT /repos/{owner}/{repo}/contents/{path}',
        {
          owner,
          repo,
          path: 'README.md',
          message: 'Initial commit',
          content: btoa(readmeContent), // Base64 encode content
          branch: 'main', // Explicitly create the main branch
          headers: { 'X-GitHub-Api-Version': '2022-11-28' },
        }
      );

      console.log(
        `Successfully initialized repository with README.md via Contents API`
      );

      // Extract commit and tree SHA from the response
      if (!response.data.commit?.sha) {
        throw new Error('Contents API did not return commit SHA');
      }
      if (!response.data.commit?.tree?.sha) {
        throw new Error('Contents API did not return tree SHA');
      }

      const commitSha = response.data.commit.sha;
      const treeSha = response.data.commit.tree.sha;

      return {
        commitSha,
        treeSha,
      };
    } catch (err) {
      const error = err as GitHubError;
      console.error('Error initializing repository:', error);

      // Handle "reference already exists" error - someone else may have initialized the repo
      if (error.message?.includes('reference already exists')) {
        // Try to get the existing reference
        try {
          const refResponse = await octokit!.request(
            'GET /repos/{owner}/{repo}/git/ref/{ref}',
            {
              owner,
              repo,
              ref: 'heads/main',
              headers: { 'X-GitHub-Api-Version': '2022-11-28' },
            }
          );

          // Get the commit that this reference points to
          const commitData = await octokit!.request(
            'GET /repos/{owner}/{repo}/git/commits/{commit_sha}',
            {
              owner,
              repo,
              commit_sha: refResponse.data.object.sha,
              headers: { 'X-GitHub-Api-Version': '2022-11-28' },
            }
          );

          console.log('Found existing reference to use instead');

          return {
            commitSha: commitData.data.sha,
            treeSha: commitData.data.tree.sha,
          };
        } catch (refError) {
          console.error('Error getting existing reference:', refError);
          throw error; 
        }
      }

      throw error;
    }
  };

  // Step 4: Commit to repository
  const commitToRepository = async (
    activeProject: ActiveProjectType,
    walletAddress: string,
    forcePush: boolean = true
  ): Promise<void> => {
    if (!octokit || !username) {
      setError('GitHub not authenticated');
      throw new Error('GitHub not authenticated');
    }

    if (!activeProject) {
      setError('No project selected');
      throw new Error('No project selected');
    }

    setGitHubStatus('committing');
    setError(null);
    console.log(`Starting GitHub commit for project: ${activeProject.name}`);

    try {
      // Verify or create repository
      let repoExists = await checkRepository(activeProject.name);

      if (!repoExists) {
        console.log(`Repository ${activeProject.name} not found. Attempting to create.`);
        toast.info(`Repository not found. Creating...`);
        const repoCreated = await createRepository(activeProject.name);

        if (!repoCreated) {
          // createRepository should have already set the error state and shown a toast
          // Throwing an error here ensures the commit process stops definitively.
          // Use a more specific error or rely on the state set by createRepository.
          const creationError = error || 'Failed to create repository after checking.';
          setError(creationError)
          setGitHubStatus('error'); // Ensure status reflects error
          throw new Error(creationError);
        }
        console.log(`Repository ${activeProject.name} created successfully.`);
        repoExists = true; // Update status, repo now exists
      }

      // Check if repository is empty (will be true if just created)
      // Use repoExists flag to avoid checking if creation failed earlier
      const isEmptyRepo = repoExists ? await checkIsEmptyRepository(
        username,
        activeProject.name
      ) : true;
      console.log(`Repository empty status: ${isEmptyRepo}`);

      // Initialize repository if empty
      let currentCommitSha: string | undefined;
      let currentTreeSha: string | undefined;

      if (isEmptyRepo) {
        // Initialize with README.md
        const initResult = await initializeEmptyRepository(
          username,
          activeProject.name
        );
        currentCommitSha = initResult.commitSha;
        currentTreeSha = initResult.treeSha;

        // Add a small delay to ensure GitHub processes the initial commit
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } else if (!forcePush) {
        // Only get current tree if not force pushing and not empty repo
        try {
          const branchResponse = await octokit.request(
            'GET /repos/{owner}/{repo}/branches/{branch}',
            {
              owner: username,
              repo: activeProject.name,
              branch: 'main',
              headers: { 'X-GitHub-Api-Version': '2022-11-28' },
            }
          );

          currentCommitSha = branchResponse.data.commit.sha;
          currentTreeSha = branchResponse.data.commit.commit.tree.sha;
        } catch (error) {
          console.warn('Could not get current branch info:', error);
        }
      }

      // Fetch project files
      console.log(`Fetching project files from backend`);
      const filesToCommitResponse = await axios.get(
        `${backendUrl}/projects/${activeProject.projectId}?walletAddress=${walletAddress}`
      );

      let codebaseData = filesToCommitResponse.data.codebase;

      if (!codebaseData) {
        setError('No codebase data returned from server');
        setGitHubStatus('repo_exists');
        toast.error('No codebase data returned');
        throw new Error('No codebase data returned from server');
      }
      codebaseData = {
        ...defaultFiles_3,
        ...codebaseData,
      };

      // Prepare files for commit
      const filesToCommit: Record<string, string> = {};

      // Handle different codebase formats (array or object)
      if (Array.isArray(codebaseData)) {
        // Handle array format
        codebaseData.forEach((file: GitHubFile) => {
          if (file && file.filePath && file.code) {
            const cleanPath = file.filePath.startsWith('/')
              ? file.filePath.substring(1)
              : file.filePath;
            filesToCommit[cleanPath] = file.code;
          }
        });
      } else if (typeof codebaseData === 'object' && codebaseData !== null) {
        // Handle object format
        Object.entries(codebaseData).forEach(([path, content]) => {
          if (path && content) {
            const cleanPath = path.startsWith('/') ? path.substring(1) : path;
            // Handle if content is an object with a code property
            if (
              typeof content === 'object' &&
              content !== null &&
              'code' in content
            ) {
              filesToCommit[cleanPath] = (content as { code: string }).code;
            } else if (typeof content === 'string') {
              filesToCommit[cleanPath] = content;
            }
          }
        });
      } else {
        console.error('Unexpected codebase format:', codebaseData);
        setError('Unexpected codebase format returned from server');
        setGitHubStatus('error');
        toast.error('Failed to process codebase data');
        throw new Error('Unexpected codebase format');
      }

      if (Object.keys(filesToCommit).length === 0) {
        setError('No files to commit');
        setGitHubStatus('repo_exists');
        toast.error('No files to commit');
        throw new Error('No files to commit');
      }

      // Create blobs for each file
      console.log(
        `Creating blobs for ${Object.keys(filesToCommit).length} files`
      );
      const treeItems: TreeItem[] = [];
      const blobPromises = [];

      for (const [filePath, content] of Object.entries(filesToCommit)) {
        if (!content || typeof content !== 'string') {
          console.warn(`Skipping ${filePath}: Invalid or empty content`);
          continue;
        }

        // Create a promise for each blob creation
        blobPromises.push(
          octokit
            .request('POST /repos/{owner}/{repo}/git/blobs', {
              owner: username,
              repo: activeProject.name,
              content: btoa(content),
              encoding: 'base64',
              headers: { 'X-GitHub-Api-Version': '2022-11-28' },
            })
            .then((response) => {
              treeItems.push({
                path: filePath,
                mode: '100644' as const,
                type: 'blob' as const,
                sha: response.data.sha,
              });
            })
            .catch((error) => {
              console.error(
                `Failed to create blob for file ${filePath}:`,
                error
              );
              // Continue with other files
            })
        );
      }

      // Wait for all blob creations to complete
      await Promise.allSettled(blobPromises);

      if (treeItems.length === 0) {
        setError('No valid files to commit');
        setGitHubStatus('repo_exists');
        toast.error('No valid files to commit');
        throw new Error('No valid files to commit');
      }

      // Create a new tree
      console.log('Creating tree with all files');
      const treeResponse = await octokit.request(
        'POST /repos/{owner}/{repo}/git/trees',
        {
          owner: username,
          repo: activeProject.name,
          tree: treeItems,
          base_tree: currentTreeSha, // Use current tree SHA if available
          headers: { 'X-GitHub-Api-Version': '2022-11-28' },
        }
      );

      // Create a new commit
      console.log('Creating commit');
      const commitResponse = await octokit.request(
        'POST /repos/{owner}/{repo}/git/commits',
        {
          owner: username,
          repo: activeProject.name,
          message: forcePush
            ? 'Force push from ANON AI (complete codebase)'
            : 'Commit from ANON AI',
          tree: treeResponse.data.sha,
          parents: currentCommitSha ? [currentCommitSha] : [],
          headers: { 'X-GitHub-Api-Version': '2022-11-28' },
        }
      );

      // Update the reference
      console.log('Updating reference to new commit');
      if (isEmptyRepo) {
        try {
          // For empty repos we just initialized, check if the reference exists first
          await octokit.request('GET /repos/{owner}/{repo}/git/ref/{ref}', {
            owner: username,
            repo: activeProject.name,
            ref: 'heads/main',
            headers: { 'X-GitHub-Api-Version': '2022-11-28' },
          });

          // If the reference exists, update it
          await octokit.request('PATCH /repos/{owner}/{repo}/git/refs/{ref}', {
            owner: username,
            repo: activeProject.name,
            ref: 'heads/main',
            sha: commitResponse.data.sha,
            force: forcePush,
            headers: { 'X-GitHub-Api-Version': '2022-11-28' },
          });
        } catch (refError) {
          // If the reference doesn't exist, create it
          if ((refError as GitHubError).status === 404) {
            await octokit.request('POST /repos/{owner}/{repo}/git/refs', {
              owner: username,
              repo: activeProject.name,
              ref: 'refs/heads/main',
              sha: commitResponse.data.sha,
              headers: { 'X-GitHub-Api-Version': '2022-11-28' },
            });
          } else {
            throw refError;
          }
        }
      } else {
        // For non-empty repos, simply update the reference
        await octokit.request('PATCH /repos/{owner}/{repo}/git/refs/{ref}', {
          owner: username,
          repo: activeProject.name,
          ref: 'heads/main',
          sha: commitResponse.data.sha,
          force: forcePush,
          headers: { 'X-GitHub-Api-Version': '2022-11-28' },
        });
      }

      setGitHubStatus('repo_exists');
      toast.success(
        `Files successfully ${
          forcePush ? 'force pushed' : 'committed'
        } to GitHub!`
      );
      console.log('GitHub commit completed successfully');
    } catch (err) {
      const error = err as GitHubError;
      let errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Failed to commit to GitHub';

      // Improved error message for common GitHub issues
      if (errorMessage.includes('Git Repository is empty')) {
        errorMessage = 'Repository is empty. Initializing failed.';
      } else if (errorMessage.includes('Not Found')) {
        errorMessage = 'Repository not found. Check if it exists.';
      } else if (errorMessage.includes('reference already exists')) {
        errorMessage = 'Branch already exists. Try force pushing.';
      } else if (errorMessage.includes('Branch not found')) {
        errorMessage = 'Branch not found. Creating initial branch failed.';
      }

      console.error('GitHub error details:', error);
      setError(errorMessage);
      setGitHubStatus('error');

      toast.error('GitHub Error', {
        description: errorMessage,
      });

      throw error;
    }
  };

  const value = {
    // State
    githubToken,
    gitHubStatus,
    error,

    // Actions
    connectGitHub,
    checkRepository,
    createRepository,
    commitToRepository,
    resetGitHubState,
    disconnectGitHub,
  };

  return (
    <GitHubContext.Provider value={value}>{children}</GitHubContext.Provider>
  );
};
