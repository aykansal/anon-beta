import React, { useState } from 'react';
import {
  PlusIcon,
  SettingsIcon,
  FolderIcon,
  RefreshCwIcon,
  SearchIcon,
  HelpCircleIcon,
  BookOpenIcon,
  Github,
  Loader2,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
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
  
  // Use GitHub context - only use what we need
  const { 
    gitHubStatus, 
    githubToken, 
    connectGitHub, 
    createRepository,
    disconnectGitHub
  } = useGitHub();
  
  // Get the appropriate GitHub button text (simplified)
  const getGitHubButtonText = () => {
    if (!githubToken) return 'Connect GitHub';
    return ''; // No text needed when connected, we'll use visual indicators
  };
  
  // Get status dot color class
  const getStatusDotClass = () => {
    switch (gitHubStatus) {
      case 'authenticated':
      case 'repo_exists':
        return 'bg-green-500';
      case 'error':
        return 'bg-destructive';
      case 'checking_repo':
      case 'creating_repo':
      case 'committing':
        return 'bg-yellow-500 animate-pulse';
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
  
  // Modified GitHub button click handler
  const handleGitHubClick = async () => {
    if (!githubToken) {
      connectGitHub();
    } else if (!activeProject) {
      toast.error('Please select a project first');
    } else {
      setIsStatusDrawerOpen(true);
    }
  };
  
  // Function to update a specific step's status
  const updateStepStatus = (
    stepId: string,
    status: StatusStep['status'],
    error?: string
  ) => {
    setStatusSteps(steps =>
      steps.map(step =>
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
        status: 'pending'
      },
      {
        id: 'create-repo',
        title: 'Creating Repository',
        description: `Creating repository: ${activeProject?.name}`,
        status: 'pending'
      },
      {
        id: 'init-repo',
        title: 'Initializing Repository',
        description: 'Setting up the initial repository structure...',
        status: 'pending'
      }
    ]);
  };

  // Initialize steps for pushing changes
  const initPushSteps = () => {
    setStatusSteps([
      {
        id: 'prepare-files',
        title: 'Preparing Files',
        description: 'Gathering and preparing files for commit...',
        status: 'pending'
      },
      {
        id: 'create-commit',
        title: 'Creating Commit',
        description: 'Creating a new commit with your changes...',
        status: 'pending'
      },
      {
        id: 'push-changes',
        title: 'Pushing to GitHub',
        description: 'Uploading your changes to GitHub...',
        status: 'pending'
      }
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
      await new Promise(resolve => setTimeout(resolve, 1000));
      updateStepStatus('auth-check', 'success');
      
      // Create repo step
      updateStepStatus('create-repo', 'loading');
      const success = await createRepository(activeProject.name);
      
      if (!success) throw new Error('Failed to create repository');
      updateStepStatus('create-repo', 'success');
      
      // Init repo step
      updateStepStatus('init-repo', 'loading');
      await new Promise(resolve => setTimeout(resolve, 1500));
      updateStepStatus('init-repo', 'success');
      
      toast.success(`Repository '${activeProject.name}' created successfully`);
      
      // Don't auto-close drawer, let user see the success state
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      const currentStep = statusSteps.find(step => step.status === 'loading');
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
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
      updateStepStatus('prepare-files', 'success');
      
      // Create commit step
      updateStepStatus('create-commit', 'loading');
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
      updateStepStatus('create-commit', 'success');
      
      // Push changes step
      updateStepStatus('push-changes', 'loading');
      await onConnectGithub();
      updateStepStatus('push-changes', 'success');
      
      toast.success('Changes pushed to GitHub');
      
      // Close drawer after a delay
      setTimeout(() => setIsStatusDrawerOpen(false), 2000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      const currentStep = statusSteps.find(step => step.status === 'loading');
      if (currentStep) {
        updateStepStatus(currentStep.id, 'error', errorMessage);
      }
      console.error('Error pushing to GitHub:', error);
      toast.error('Failed to push changes');
    }
  };

  const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const projectId = e.target.value;
    if (!Array.isArray(projects)) {
      console.error('Projects is not an array');
      return;
    }
    const selectedProject = projects.find((p) => p.projectId === projectId);
    if (selectedProject) {
      onProjectSelect(selectedProject);
    } else {
      console.error('Project not found with ID:', projectId);
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
      setNameError('Project name can only contain letters, numbers, dots, hyphens, and underscores');
    } else {
      setNameError('');
    }
  };

  const handleCreateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProject = newProjectName.trim();
    
    if (!newProject) return;
    
    if (!validateProjectName(newProject)) {
      setNameError('Project name can only contain letters, numbers, dots, hyphens, and underscores');
      return;
    }
    
    onCreateProject(newProject);
    setNewProjectName('');
    setNameError('');
    setIsDialogOpen(false);
  };
  
  // Determine if the GitHub button should be disabled
  const isGitHubButtonDisabled = () => {
    return gitHubStatus === 'checking_repo' || 
           gitHubStatus === 'creating_repo' || 
           gitHubStatus === 'committing';
  };
  
  // Determine if the GitHub repo is ready to commit
  const isRepoReadyToCommit = gitHubStatus === 'repo_exists';

  return (
    <>
      <div className="border-b border-border/50 bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
        {/* Main Toolbar */}
        <div className="h-12 px-4 flex items-center gap-3">
          {/* Project Selection */}
          <select
            value={activeProject?.projectId || ''}
            onChange={handleProjectChange}
            className="h-8 px-3 bg-secondary/80 border-border/50 rounded-md text-sm font-medium focus:outline-hidden focus:ring-0 focus:border-border"
          >
            <option value="">Select Project</option>
            {projects.length > 0 &&
              // @ts-expect-error ignore type error
              projects?.map((project) => (
                <option key={project.projectId} value={project.projectId}>
                  {project.name}
                </option>
              ))}
          </select>

          {/* Separator */}
          <div className="w-px h-5 bg-border/50" />

          {/* Action Buttons */}
          <button
            onClick={() => setIsDialogOpen(true)}
            className="h-8 px-3 flex items-center gap-2 bg-transparent hover:bg-secondary/50 rounded-md text-sm font-medium"
            title="New Project"
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
                relative h-8 px-3 flex items-center gap-2 rounded-md 
                transition-colors duration-200
                ${isRepoReadyToCommit 
                  ? 'bg-green-500/10 hover:bg-green-500/20' 
                  : gitHubStatus === 'error'
                  ? 'bg-destructive/10 hover:bg-destructive/20'
                  : 'bg-secondary/50 hover:bg-secondary'
                }
                disabled:opacity-40
              `}
              title={getGitHubButtonTitle()}
            >
              {gitHubStatus === 'checking_repo' || gitHubStatus === 'creating_repo' || gitHubStatus === 'committing' ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Github size={16} className={
                  isRepoReadyToCommit ? 'text-green-500' : 
                  gitHubStatus === 'error' ? 'text-destructive' : 
                  'text-foreground'
                } />
              )}
              {/* Status Dot */}
              {githubToken && (
                <div className={`
                  absolute top-1.5 right-1.5 w-2 h-2 rounded-full 
                  ${getStatusDotClass()}
                  shadow-sm ring-1 ring-background
                `} />
              )}
              {/* Only show text when not connected */}
              {!githubToken && <span>{getGitHubButtonText()}</span>}
            </button>
          </div>

          <button
            onClick={onRefresh}
            disabled={!activeProject}
            className="h-8 px-3 flex items-center gap-2 bg-transparent hover:bg-secondary/50 rounded-md text-sm font-medium disabled:opacity-40"
            title="Refresh Project"
          >
            <RefreshCwIcon size={16} />
            <span>Refresh</span>
          </button>

          {/* Separator */}
          <div className="w-px h-5 bg-border/50" />

          {/* Additional Tools */}
          <button
            className="h-8 w-8 flex items-center justify-center bg-transparent hover:bg-secondary/50 rounded-md"
            title="Search"
          >
            <SearchIcon size={16} />
          </button>

          <button
            className="h-8 w-8 flex items-center justify-center bg-transparent hover:bg-secondary/50 rounded-md"
            title="File Explorer"
          >
            <FolderIcon size={16} />
          </button>

          <div className="flex-1" />

          {/* Right-side buttons */}
          <button
            className="h-8 w-8 flex items-center justify-center bg-transparent hover:bg-secondary/50 rounded-md"
            title="Documentation"
          >
            <BookOpenIcon size={16} />
          </button>

          <button
            className="h-8 w-8 flex items-center justify-center bg-transparent hover:bg-secondary/50 rounded-md"
            title="Help"
          >
            <HelpCircleIcon size={16} />
          </button>

          <button
            className="h-8 w-8 flex items-center justify-center bg-transparent hover:bg-secondary/50 rounded-md"
            title="Settings"
          >
            <SettingsIcon size={16} />
          </button>
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
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsStatusDrawerOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-96 bg-background border-l border-border shadow-xl z-50"
            >
              <div className="h-full flex flex-col">
                {/* Drawer Header */}
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Github size={18} />
                    GitHub Integration
                  </h3>
                  <button
                    onClick={() => setIsStatusDrawerOpen(false)}
                    className="p-1 hover:bg-secondary/80 rounded-md transition-colors"
                  >
                    <XCircle size={18} />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto">
                  {/* GitHub Actions Section */}
                  <div className="p-4 border-b border-border">
                    {gitHubStatus === 'repo_exists' ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-green-500">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <p className="text-sm font-medium">Repository connected to GitHub</p>
                        </div>
                        <Button 
                          onClick={handleCommitToRepo} 
                          className="w-full bg-green-500 hover:bg-green-600"
                        >
                          <div className="flex items-center gap-2">
                            <Github size={16} />
                            Push Changes
                          </div>
                        </Button>
                      </div>
                    ) : gitHubStatus === 'authenticated' ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-yellow-500" />
                          <p className="text-sm font-medium">GitHub account connected</p>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Create a repository named <span className="font-mono bg-muted px-1 py-0.5 rounded">{activeProject?.name}</span>
                        </div>
                        <Button onClick={handleCreateRepo} className="w-full">
                          <div className="flex items-center gap-2">
                            <PlusIcon size={16} />
                            Create Repository
                          </div>
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                          <p className="text-sm font-medium">Not connected to GitHub</p>
                        </div>
                        <Button onClick={connectGitHub} className="w-full">
                          <div className="flex items-center gap-2">
                            <Github size={16} />
                            Connect GitHub Account
                          </div>
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Status Steps Section */}
                  {statusSteps.length > 0 && (
                    <div className="p-4 space-y-4">
                      <h4 className="text-sm font-medium text-muted-foreground">Recent Activity</h4>
                      {statusSteps.map((step, index) => (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="relative"
                        >
                          {/* Step content */}
                          <div className="flex items-start gap-3 pb-8">
                            {/* Status icon */}
                            <div className="mt-1">
                              {step.status === 'loading' ? (
                                <Loader2 size={20} className="text-primary animate-spin" />
                              ) : step.status === 'success' ? (
                                <CheckCircle2 size={20} className="text-green-500" />
                              ) : step.status === 'error' ? (
                                <XCircle size={20} className="text-destructive" />
                              ) : (
                                <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                              )}
                            </div>
                            
                            {/* Step details */}
                            <div className="flex-1">
                              <h4 className="text-sm font-medium">{step.title}</h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {step.description}
                              </p>
                              {step.status === 'error' && step.error && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  className="mt-2 text-xs text-destructive bg-destructive/10 p-2 rounded-sm flex items-start gap-2"
                                >
                                  <AlertCircle size={14} className="mt-0.5 shrink-0" />
                                  <span>{step.error}</span>
                                </motion.div>
                              )}
                            </div>
                          </div>
                          
                          {/* Connector line */}
                          {index < statusSteps.length - 1 && (
                            <div 
                              className="absolute left-2.5 top-8 bottom-0 w-px bg-border"
                              style={{ transform: 'translateX(50%)' }}
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Drawer Footer */}
                <div className="p-4 border-t border-border flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setIsStatusDrawerOpen(false)}
                  >
                    Close
                  </Button>
                  {gitHubStatus !== 'disconnected' && (
                    <Button 
                      variant="destructive"
                      className="flex-1"
                      onClick={() => {
                        disconnectGitHub();
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
                  onChange={handleNameChange}
                  className="w-full p-2 rounded-md border border-border bg-background text-foreground"
                  placeholder="Enter project name"
                  required
                />
                {nameError && (
                  <div className="mt-1 flex items-center text-destructive text-xs">
                    <span className="mr-1">⚠️</span>
                    <span>{nameError}</span>
                  </div>
                )}
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
    </>
  );
};

export default TitleBar;
