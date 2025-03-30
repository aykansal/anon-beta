import { Octokit } from '@octokit/core';
import axios from 'axios';
import { toast } from 'sonner';

export const handleGitHubAuth = (setGithubToken) => {
  const urlParams = new URLSearchParams(window.location.search);
  const accessToken = urlParams.get('access_token');

  if (accessToken) {
    setGithubToken(accessToken);
    localStorage.setItem('githubToken', accessToken);
    window.history.replaceState({}, document.title, window.location.pathname);
    toast.success('Successfully connected to GitHub');
  }
};

export const handleSaveToGithub = async (
  activeProject,
  githubToken,
  backendUrl,
  setStatus,
  setConnectionStatus,
  setError
) => {
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

      const repoResponse = await octokit.request(
        'GET /repos/{owner}/{repo}',
        {
          owner: repoOwner,
          repo: activeProject.name,
          headers: { 'X-GitHub-Api-Version': '2022-11-28' },
        }
      );
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
      if (checkError.status === 404) {
        setStatus('Creating new GitHub repository...');
        const createResponse = await octokit.request('POST /user/repos', {
          name: activeProject.name,
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
    codebase.forEach((file) => {
      const cleanPath = file.filePath.startsWith('/')
        ? file.filePath.substring(1)
        : file.filePath;
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
          encoding: 'base64',
          content: btoa(content),
          repo: activeProject.name,
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
      error.response?.data?.error ||
      error.message ||
      'Failed to commit to GitHub';
    setError(errorMessage);
    toast.error('Error committing to GitHub:', {
      description: 'Check dev console for more details',
    });
    setConnectionStatus('disconnected');
  } finally {
    setStatus('');
  }
}; 