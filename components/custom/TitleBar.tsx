import React, { useState, useEffect } from 'react';
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

// Simple dropdown menu components
const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative">{children}</div>;
};

const DropdownMenuTrigger = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const DropdownMenuContent = ({ 
  children,
  align = "start" 
}: { 
  children: React.ReactNode;
  align?: "start" | "center" | "end";
}) => {
  // Use align to position the dropdown
  const alignClass = 
    align === "end" ? "right-0" : 
    align === "center" ? "left-1/2 transform -translate-x-1/2" : 
    "left-0";
    
  return (
    <div className={`absolute z-50 mt-1 min-w-[8rem] rounded-md border border-border bg-background p-1 shadow-md ${alignClass}`}>
      {children}
    </div>
  );
};

const DropdownMenuItem = ({ 
  children, 
  onClick, 
  className = "" 
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string 
}) => {
  return (
    <button 
      onClick={onClick}
      className={`w-full text-left px-2 py-1.5 text-sm rounded-sm hover:bg-secondary ${className}`}
    >
      {children}
    </button>
  );
};

const DropdownMenuSeparator = () => {
  return <div className="my-1 h-px bg-border" />;
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isGitHubDialogOpen, setIsGitHubDialogOpen] = useState(false);
  const [nameError, setNameError] = useState('');
  
  // Use GitHub context - only use what we need
  const { 
    gitHubStatus, 
    githubToken, 
    connectGitHub, 
    checkRepository, 
    createRepository,
    disconnectGitHub
  } = useGitHub();
  
  // Check repository when project is selected
  useEffect(() => {
    if (activeProject && githubToken && gitHubStatus === 'authenticated') {
      checkRepository(activeProject.name)
        .catch(error => console.error("Error checking repository:", error));
    }
  }, [activeProject, githubToken, gitHubStatus, checkRepository]);
  
  // Get the appropriate GitHub button text
  const getGitHubButtonText = () => {
    switch (gitHubStatus) {
      case 'disconnected':
        return 'Connect GitHub';
      case 'authenticated':
        return 'GitHub Connected';
      case 'checking_repo':
        return 'Checking Repo...';
      case 'creating_repo':
        return 'Creating Repo...';
      case 'repo_exists':
        return 'GitHub Repo Connected';
      case 'committing':
        return 'Pushing to GitHub...';
      case 'error':
        return 'GitHub Error';
      default:
        return 'GitHub';
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
  
  // Handle GitHub button click - now shows a dropdown
  const handleGitHubClick = async () => {
    if (!githubToken) {
      // Not authenticated - connect to GitHub
      connectGitHub();
    } else if (!activeProject) {
      toast.error('Please select a project first');
    } else {
      // Otherwise, open the GitHub dialog for more options
      setIsGitHubDialogOpen(true);
    }
  };
  
  // Handle creating a new repository
  const handleCreateRepo = async () => {
    if (!activeProject) {
      toast.error('Please select a project first');
      return;
    }
    
    setIsGitHubDialogOpen(false);
    const success = await createRepository(activeProject.name);
    
    if (success) {
      toast.success(`Repository '${activeProject.name}' created successfully`);
    }
  };
  
  // Handle committing to repository
  const handleCommitToRepo = async () => {
    if (!activeProject) {
      toast.error('Please select a project first');
      return;
    }
    
    setIsGitHubDialogOpen(false);
    
    try {
      await onConnectGithub();
      toast.success('Changes pushed to GitHub');
    } catch (error) {
      console.error('Error pushing to GitHub:', error);
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

        {/* GitHub Button with Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              onClick={handleGitHubClick}
              disabled={isGitHubButtonDisabled()}
              className={`h-8 px-3 flex items-center gap-2 bg-transparent hover:bg-secondary/50 rounded-md text-sm font-medium disabled:opacity-40 ${gitHubStatus === 'error' ? 'text-destructive' : ''} ${isRepoReadyToCommit ? 'text-green-500' : ''}`}
              title={getGitHubButtonTitle()}
            >
              {gitHubStatus === 'checking_repo' || gitHubStatus === 'creating_repo' || gitHubStatus === 'committing' ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Github size={16} />
              )}
              <span>{getGitHubButtonText()}</span>
            </button>
          </DropdownMenuTrigger>
          
          {githubToken && (
            <DropdownMenuContent align="start">
              {isRepoReadyToCommit && (
                <DropdownMenuItem onClick={handleCommitToRepo}>
                  Push to GitHub
                </DropdownMenuItem>
              )}
              
              {gitHubStatus === 'authenticated' && activeProject && (
                <DropdownMenuItem onClick={handleCreateRepo}>
                  Create Repository
                </DropdownMenuItem>
              )}
              
              <DropdownMenuSeparator />
              
              <DropdownMenuItem onClick={disconnectGitHub} className="text-destructive">
                Disconnect GitHub
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>

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

      {/* GitHub Dialog */}
      <Dialog open={isGitHubDialogOpen} onOpenChange={setIsGitHubDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>GitHub Repository</DialogTitle>
            <DialogDescription>
              {activeProject ? `Manage GitHub repository for ${activeProject.name}` : 'Select a project first'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 space-y-4">
            {gitHubStatus === 'repo_exists' ? (
              <div className="text-sm">
                <p className="mb-2">Repository <span className="font-semibold">{activeProject?.name}</span> is connected to GitHub.</p>
                <Button onClick={handleCommitToRepo} className="w-full">
                  Push Changes to GitHub
                </Button>
              </div>
            ) : gitHubStatus === 'authenticated' ? (
              <div className="text-sm">
                <p className="mb-2">GitHub account connected. Create a repository for this project?</p>
                <p className="text-xs text-muted-foreground mb-2">
                  This will create a new repository named <span className="font-mono">{activeProject?.name}</span>
                </p>
                <Button onClick={handleCreateRepo} className="w-full">
                  Create Repository
                </Button>
              </div>
            ) : (
              <p className="text-sm">Connect your GitHub account to push your code to GitHub.</p>
            )}
          </div>
          
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsGitHubDialogOpen(false)}
            >
              Close
            </Button>
            
            {gitHubStatus !== 'disconnected' && (
              <Button 
                variant="destructive" 
                onClick={() => {
                  disconnectGitHub();
                  setIsGitHubDialogOpen(false);
                }}
              >
                Disconnect GitHub
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TitleBar;
