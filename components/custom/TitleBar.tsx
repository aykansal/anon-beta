import React, { useState } from 'react';
import {
  PlusIcon,
  // SettingsIcon,
  FolderIcon,
  RefreshCwIcon,
  // SearchIcon,
  // HelpCircleIcon,
  // BookOpenIcon,
  Github,
  Loader2,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ChevronDown,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useGitHub } from '@/context/GitHubContext';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

// Define status step type
type StatusStep = {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'loading' | 'success' | 'error';
  error?: string;
};

const TitleBar = ({
  // @ts-expect-error ignore type error
  projects,
  // @ts-expect-error ignore type error
  activeProject,
  // @ts-expect-error ignore type error
  onProjectSelect,
  // @ts-expect-error ignore type error
  onCreateProject,
  // @ts-expect-error ignore type error
  onConnectGithub,
  // @ts-expect-error ignore type error
  onRefresh,
}) => {
  const [newProjectName, setNewProjectName] = useState('');
  const [isStatusDrawerOpen, setIsStatusDrawerOpen] = useState(false);
  const [statusSteps, setStatusSteps] = useState<StatusStep[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [nameError, setNameError] = useState('');
  const [lastCheckedProject, setLastCheckedProject] = useState<string | null>(
    null
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Use GitHub context - only use what we need
  const {
    gitHubStatus,
    githubToken,
    connectGitHub,
    createRepository,
    disconnectGitHub,
    checkRepository,
    resetGitHubState,
  } = useGitHub();

  // Remove the useEffect that's causing the loop
  // and replace with a simple manual check function
  const checkProjectRepository = async (projectName: string) => {
    if (!githubToken || !projectName) return;

    console.log('Manually checking if repository exists for:', projectName);
    try {
      const exists = await checkRepository(projectName);
      setLastCheckedProject(projectName);
      return exists;
    } catch (err) {
      console.error('Error checking repository:', err);
      return false;
    }
  };

  // Get the appropriate GitHub button text (simplified)
  const getGitHubButtonText = () => {
    if (!githubToken) return 'Connect GitHub';
    return ''; // No text needed when connected, we'll use visual indicators
  };

  // Get status dot color class
  const getStatusDotClass = () => {
    switch (gitHubStatus) {
      case 'repo_exists':
        return 'bg-green-500';
      case 'authenticated':
        return 'bg-yellow-500';
      case 'error':
        return 'bg-destructive';
      case 'checking_repo':
        return 'bg-blue-500 animate-pulse';
      case 'creating_repo':
        return 'bg-yellow-500 animate-pulse';
      case 'committing':
        return 'bg-green-500 animate-pulse';
      default:
        return 'bg-muted-foreground';
    }
  };

  // Get the appropriate GitHub button title
  const getGitHubButtonTitle = () => {
    switch (gitHubStatus) {
      case 'disconnected':
        return 'Connect to GitHub';
      case 'authenticated':
        return 'GitHub account connected. Click to manage repository.';
      case 'checking_repo':
        return 'Checking if repository exists';
      case 'creating_repo':
        return 'Creating new repository';
      case 'repo_exists':
        return 'Repository connected. Click to push changes.';
      case 'committing':
        return 'Pushing changes to GitHub';
      case 'error':
        return 'An error occurred with GitHub';
      default:
        return 'Manage GitHub connection';
    }
  };

  // Update handleProjectChange to manually check repo after reset
  const handleProjectChange = (projectId: string) => {
    if (!Array.isArray(projects)) {
      console.error('Projects is not an array');
      return;
    }
    const selectedProject = projects.find((p) => p.projectId === projectId);
    if (selectedProject) {
      // Reset the lastCheckedProject when changing projects
      setLastCheckedProject(null);

      // If we're coming from a project with an existing repo or error,
      // reset the GitHub state to force a fresh check
      if (gitHubStatus === 'repo_exists' || gitHubStatus === 'error') {
        console.log('Resetting GitHub state for new project check');
        resetGitHubState(); // Reset to the authenticated state
      }

      onProjectSelect(selectedProject);
      // Close dropdown after selection
      setIsDropdownOpen(false);
      // No automatic check - we'll check manually when needed
    } else {
      console.error('Project not found with ID:', projectId);
    }
  };

  // Update GitHub button click handler to use manual check
  const handleGitHubClick = async () => {
    if (!githubToken) {
      connectGitHub();
    } else if (!activeProject) {
      toast.error('Please select a project first');
    } else {
      // Only check if we haven't already checked this project
      if (activeProject.name !== lastCheckedProject) {
        console.log('Checking repository status before opening drawer');
        await checkProjectRepository(activeProject.name);
      }

      // Open the drawer with the current status
      setIsStatusDrawerOpen(true);
    }
  };

  // Function to update a specific step's status
  const updateStepStatus = (
    stepId: string,
    status: StatusStep['status'],
    error?: string
  ) => {
    setStatusSteps((steps) =>
      steps.map((step) =>
        step.id === stepId
          ? { ...step, status, ...(error ? { error } : {}) }
          : step
      )
    );
  };

  // Initialize steps for repository creation
  const initRepoCreationSteps = () => {
    setStatusSteps([
      {
        id: 'auth-check',
        title: 'Checking GitHub Authentication',
        description: 'Verifying your GitHub credentials...',
        status: 'pending',
      },
      {
        id: 'create-repo',
        title: 'Creating Repository',
        description: `Creating repository: ${activeProject?.name}`,
        status: 'pending',
      },
      {
        id: 'init-repo',
        title: 'Initializing Repository',
        description: 'Setting up the initial repository structure...',
        status: 'pending',
      },
    ]);
  };

  // Initialize steps for pushing changes
  const initPushSteps = () => {
    setStatusSteps([
      {
        id: 'prepare-files',
        title: 'Preparing Files',
        description: 'Gathering and preparing files for commit...',
        status: 'pending',
      },
      {
        id: 'create-commit',
        title: 'Creating Commit',
        description: 'Creating a new commit with your changes...',
        status: 'pending',
      },
      {
        id: 'push-changes',
        title: 'Pushing to GitHub',
        description: 'Uploading your changes to GitHub...',
        status: 'pending',
      },
    ]);
  };

  // Modified handle create repo
  const handleCreateRepo = async () => {
    if (!activeProject) {
      toast.error('Please select a project first');
      return;
    }

    initRepoCreationSteps();

    try {
      // Auth check step
      updateStepStatus('auth-check', 'loading');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      updateStepStatus('auth-check', 'success');

      // Create repo step
      updateStepStatus('create-repo', 'loading');
      const success = await createRepository(activeProject.name);

      if (!success) throw new Error('Failed to create repository');
      updateStepStatus('create-repo', 'success');

      // Init repo step
      updateStepStatus('init-repo', 'loading');
      await new Promise((resolve) => setTimeout(resolve, 1500));
      updateStepStatus('init-repo', 'success');

      toast.success(`Repository '${activeProject.name}' created successfully`);
      // Keep drawer open to show success state
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      const currentStep = statusSteps.find((step) => step.status === 'loading');
      if (currentStep) {
        updateStepStatus(currentStep.id, 'error', errorMessage);
      }
      toast.error('Failed to create repository');
    }
  };

  // Modified handle commit to repo
  const handleCommitToRepo = async () => {
    if (!activeProject) {
      toast.error('Please select a project first');
      return;
    }

    initPushSteps();

    try {
      // Prepare files step
      updateStepStatus('prepare-files', 'loading');
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
      updateStepStatus('prepare-files', 'success');

      // Create commit step
      updateStepStatus('create-commit', 'loading');
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay
      updateStepStatus('create-commit', 'success');

      // Push changes step
      updateStepStatus('push-changes', 'loading');
      await onConnectGithub();
      updateStepStatus('push-changes', 'success');

      toast.success('Changes pushed to GitHub');

      // Close drawer after a delay
      setTimeout(() => setIsStatusDrawerOpen(false), 2000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      const currentStep = statusSteps.find((step) => step.status === 'loading');
      if (currentStep) {
        updateStepStatus(currentStep.id, 'error', errorMessage);
      }
      console.error('Error pushing to GitHub:', error);
      toast.error('Failed to push changes');
    }
  };

  const validateProjectName = (name: string) => {
    // Repository name validation: only ASCII letters, digits, and the characters ., - and _
    const validPattern = /^[a-zA-Z0-9._-]+$/;
    return validPattern.test(name);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setNewProjectName(name);

    if (name && !validateProjectName(name)) {
      setNameError(
        'Project name can only contain letters, numbers, dots, hyphens, and underscores'
      );
    } else {
      setNameError('');
    }
  };

  const handleCreateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProject = newProjectName.trim();

    if (!newProject) return;

    if (!validateProjectName(newProject)) {
      setNameError(
        'Project name can only contain letters, numbers, dots, hyphens, and underscores'
      );
      return;
    }

    onCreateProject(newProject);
    setNewProjectName('');
    setNameError('');
    setIsDialogOpen(false);
  };

  // Determine if the GitHub button should be disabled
  const isGitHubButtonDisabled = () => {
    return (
      gitHubStatus === 'checking_repo' ||
      gitHubStatus === 'creating_repo' ||
      gitHubStatus === 'committing'
    );
  };

  // Determine if the GitHub repo is ready to commit
  const isRepoReadyToCommit = gitHubStatus === 'repo_exists';

  // For handling clicks outside the dropdown
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.project-dropdown')) {
      setIsDropdownOpen(false);
    }
  };

  // Add and remove event listener for clicks outside dropdown
  React.useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
 <div className="border-b border-gray-200 bg-white backdrop-blur-sm supports-backdrop-filter:bg-white/95">
  {/* Main Toolbar */}
  <div className="h-14 px-4 flex items-center gap-3">
    {/* Project Selection - Custom dropdown */}
    <div className="relative project-dropdown">
      <div
        onClick={() =>
          projects?.length > 0 ? setIsDropdownOpen(!isDropdownOpen) : null
        }
        className={`
          h-9 px-3 min-w-[180px] flex items-center justify-between gap-2 
          ${
            projects?.length > 0
              ? 'bg-gray-100 cursor-pointer hover:bg-gray-200'
              : 'bg-gray-100 opacity-60 cursor-not-allowed'
          } 
          border border-gray-300 rounded-md
          transition-colors
        `}
      >
        <div className="flex items-center gap-2 overflow-hidden">
          <FolderIcon size={16} className="text-gray-500 shrink-0" />
          <span className="text-sm font-medium truncate text-gray-800">
            {activeProject
              ? activeProject.name
              : projects?.length > 0
              ? 'Select Project'
              : 'No Projects'}
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`text-gray-500 transition-transform duration-200 ${
            isDropdownOpen ? 'rotate-180' : ''
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && projects?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-[260px] overflow-auto"
        >
          {projects.map((project:any) => (
            <div
              key={project.projectId}
              onClick={() => handleProjectChange(project.projectId)}
              className={`p-2.5 border-b border-gray-100 last:border-0 cursor-pointer flex items-center gap-2 ${
                activeProject?.projectId === project.projectId
                  ? 'bg-green-100 text-green-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              <FolderIcon
                size={16}
                className={
                  activeProject?.projectId === project.projectId
                    ? 'text-green-600'
                    : 'text-gray-400'
                }
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">
                  {project.name}
                </div>
                {project.description && (
                  <div className="text-xs text-gray-500 truncate">
                    {project.description}
                  </div>
                )}
              </div>
              {activeProject?.projectId === project.projectId && (
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
              )}
            </div>
          ))}
        </motion.div>
      )}
    </div>

    {/* Separator */}
    <div className="w-px h-5 bg-gray-200" />

    {/* New Project Button */}
    <button
      onClick={() => setIsDialogOpen(true)}
      className="h-9 px-4 flex items-center gap-2 bg-blue-600 text-white hover:bg--700 rounded-md text-sm font-medium transition-colors shadow-sm"
      title="Create a new project"
    >
      <PlusIcon size={16} />
      <span>New</span>
    </button>

    {/* GitHub Button */}
    <div className="relative">
      <button
        onClick={handleGitHubClick}
        disabled={isGitHubButtonDisabled()}
        className={`
          relative h-9 text-black px-3 flex items-center gap-2 rounded-md 
          transition-colors duration-200
          ${
            isRepoReadyToCommit
              ? 'bg-green-100 hover:bg-green-200 border border-green-300'
              : gitHubStatus === 'error'
              ? 'bg-red-100 hover:bg-red-200 border border-red-300'
              : 'bg-gray-100 hover:bg-gray-200 border border-gray-300'
          }
          disabled:opacity-40
        `}
        title={getGitHubButtonTitle()}
      >
        {['checking_repo', 'creating_repo', 'committing'].includes(gitHubStatus) ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Github
            size={16}
            className={
              isRepoReadyToCommit
                ? 'text-green-600'
                : gitHubStatus === 'error'
                ? 'text-red-600'
                : 'text-gray-600'
            }
          />
        )}
        {githubToken && (
          <div
            className={`absolute top-1.5 right-1.5 w-2 h-2 rounded-full ${getStatusDotClass()} ring-1 ring-white`}
          />
        )}
        <span className="hidden sm:inline-block">
          {getGitHubButtonText() ||
            (isRepoReadyToCommit ? 'Push to GitHub' : 'GitHub')}
        </span>
      </button>
    </div>

    {/* Refresh Button */}
    <button
      onClick={onRefresh}
      disabled={!activeProject}
      className="h-9 px-3 flex text-black items-center gap-2 bg-white hover:bg-gray-100 border border-gray-300 rounded-md text-sm font-medium disabled:opacity-40"
      title="Refresh Project"
    >
      <RefreshCwIcon size={16} className="text-gray-600" />
      <span className="hidden sm:inline-block">Refresh</span>
    </button>

    <div className="w-px h-5 bg-gray-200 hidden sm:block" />

    <div className="flex-1" />

    {/* Right-side buttons container (still hidden as in original) */}
    <div className="hidden sm:flex items-center gap-1">{/* Reserved */}</div>
  </div>
</div>


      {/* Enhanced Status Drawer with GitHub Actions */}
      <AnimatePresence>
  {isStatusDrawerOpen && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
        onClick={() => setIsStatusDrawerOpen(false)}
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="fixed inset-y-0 right-0 w-96 max-w-full bg-white border-l border-gray-200 shadow-xl z-50"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
              <Github size={18} />
              GitHub Integration
            </h3>
            <button
              onClick={() => setIsStatusDrawerOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-md transition-colors"
            >
              <XCircle size={18} className="text-gray-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {/* GitHub Actions */}
            <div className="p-4 border-b border-gray-200">
              {gitHubStatus === 'checking_repo' ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-yellow-500">
                    <Loader2 size={16} className="animate-spin" />
                    <p className="text-sm font-medium">Checking repository status...</p>
                  </div>
                </div>
              ) : gitHubStatus === 'creating_repo' ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-yellow-500">
                    <Loader2 size={16} className="animate-spin" />
                    <p className="text-sm font-medium">Creating repository...</p>
                  </div>
                </div>
              ) : gitHubStatus === 'repo_exists' ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-green-600">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <p className="text-sm font-medium">Repository connected to GitHub</p>
                  </div>
                  <Button
                    onClick={handleCommitToRepo}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <div className="flex items-center gap-2">
                      <Github size={16} />
                      Push Changes
                    </div>
                  </Button>
                </div>
              ) : gitHubStatus === 'authenticated' ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-yellow-600">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <p className="text-sm font-medium">GitHub account connected</p>
                  </div>
                  <div className="text-xs text-gray-500">
                    Create a repository named{' '}
                    <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">
                      {activeProject?.name}
                    </span>
                  </div>
                  <Button onClick={handleCreateRepo} className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    <div className="flex items-center gap-2">
                      <PlusIcon size={16} />
                      Create Repository
                    </div>
                  </Button>
                </div>
              ) : gitHubStatus === 'error' ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-red-600">
                    <AlertCircle size={16} />
                    <p className="text-sm font-medium">Error connecting to repository</p>
                  </div>
                  <div className="text-xs text-gray-500">Try creating a new repository</div>
                  <Button onClick={handleCreateRepo} className="w-full bg-red-500 hover:bg-red-600 text-white">
                    <div className="flex items-center gap-2">
                      <PlusIcon size={16} />
                      Create Repository
                    </div>
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                    <p className="text-sm font-medium">Not connected to GitHub</p>
                  </div>
                  <Button onClick={connectGitHub} className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    <div className="flex items-center gap-2">
                      <Github size={16} />
                      Connect GitHub Account
                    </div>
                  </Button>
                </div>
              )}
            </div>

            {/* Status Steps */}
            {statusSteps.length > 0 && (
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-500">Recent Activity</h4>
                  {statusSteps.some(
                    (step) => step.status === 'success' || step.status === 'error'
                  ) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 px-2 text-xs text-gray-500 hover:text-gray-700"
                      onClick={() => setStatusSteps([])}
                    >
                      Clear
                    </Button>
                  )}
                </div>
                {statusSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-start gap-3 pb-8">
                      <div className="mt-1">
                        {step.status === 'loading' ? (
                          <Loader2 size={20} className="text-blue-600 animate-spin" />
                        ) : step.status === 'success' ? (
                          <CheckCircle2 size={20} className="text-green-500" />
                        ) : step.status === 'error' ? (
                          <XCircle size={20} className="text-red-500" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-800">{step.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                        {step.status === 'error' && step.error && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-2 text-xs text-red-600 bg-red-100 p-2 rounded-sm flex items-start gap-2"
                          >
                            <AlertCircle size={14} className="mt-0.5 shrink-0" />
                            <span>{step.error}</span>
                          </motion.div>
                        )}
                      </div>
                    </div>
                    {index < statusSteps.length - 1 && (
                      <div
                        className="absolute left-2.5 top-8 bottom-0 w-px bg-gray-200"
                        style={{ transform: 'translateX(50%)' }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 flex gap-2">
            <Button
              variant="outline"
              className="flex-1 border-gray-300 hover:bg-gray-100"
              onClick={() => setIsStatusDrawerOpen(false)}
            >
              Close
            </Button>
            {gitHubStatus !== 'disconnected' && (
              <Button
                variant="destructive"
                className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                onClick={() => {
                  disconnectGitHub();
                  setLastCheckedProject(null);
                  setIsStatusDrawerOpen(false);
                }}
              >
                Disconnect
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>


      {/* Create Project Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
  <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-white border border-gray-200 shadow-xl rounded-lg">
    <div className="bg-gray-50 px-6 py-5 border-b border-gray-200">
      <DialogTitle className="text-xl font-semibold text-gray-900">Create New Project</DialogTitle>
      <p className="text-sm text-gray-500 mt-1">
        Start a new coding project with AI assistance
      </p>
    </div>

    <form onSubmit={handleCreateSubmit} className="px-6 py-5">
      <div className="space-y-1 mb-6">
        <label
          htmlFor="projectName"
          className="text-sm font-medium text-gray-700 block mb-2"
        >
          Project Name
        </label>
        <input
          id="projectName"
          type="text"
          value={newProjectName}
          onChange={handleNameChange}
          className="w-full p-3 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          placeholder="Enter a descriptive name"
          required
          autoFocus
        />
        {nameError ? (
          <div className="mt-2 flex items-start gap-2 text-red-500 text-xs">
            <AlertCircle size={12} className="mt-0.5 shrink-0" />
            <span>{nameError}</span>
          </div>
        ) : (
          <p className="text-xs text-gray-400 mt-2">
            Only letters, numbers, dots, hyphens, and underscores allowed
          </p>
        )}
      </div>

      <DialogFooter className="flex justify-end gap-2 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => setIsDialogOpen(false)}
          className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </Button>
        <Button 
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white"
          disabled={!newProjectName.trim() || !!nameError}
        >
          <div className="flex items-center gap-2">
            <PlusIcon size={16} />
            Create Project
          </div>
        </Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>

    </>
  );
};

export default TitleBar;