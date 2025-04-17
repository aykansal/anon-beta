import React, { useState } from 'react';
import {
  PlayIcon,
  PlusIcon,
  SettingsIcon,
  FolderIcon,
  RefreshCwIcon,
  SearchIcon,
  HelpCircleIcon,
  BookOpenIcon,
  GitBranch,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

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
  onSave,
  // @ts-expect-error ignore type error
  onRun,
  // @ts-expect-error ignore type error
  onRefresh,
  githubConnected = false,
}) => {
  const [newProjectName, setNewProjectName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // const projectId = parseInt(e.target.value);
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

  const handleCreateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProject = newProjectName.trim();
    if (newProject) {
      onCreateProject(newProject);
      setNewProjectName('');
      setIsDialogOpen(false);
    }
  };

  return (
<div className="  bg-[#fffefc] backdrop-blur-sm supports-backdrop-filter:bg-[#F0F0F0]">
  {/* Main Toolbar */}
  <div className="h-12 px-4 flex items-center gap-3">
    {/* Project Selection */}
    <select
      value={activeProject?.projectId || ''}
      onChange={handleProjectChange}
      className="h-8 px-3 bg-[#f9f8f6] border border-gray-300 rounded-md text-sm font-medium text-black focus:outline-none focus:ring-0 focus:border-gray-400"
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
    <div className="w-px h-5 bg-gray-300" />

    {/* Action Buttons */}
    <button
      onClick={() => setIsDialogOpen(true)}
      className="h-8 px-3 flex items-center gap-2 bg-transparent hover:bg-[#f2f0ec] rounded-md text-sm font-medium text-black"
      title="New Project"
    >
      <PlusIcon size={16} />
      <span>New</span>
    </button>

    <button
      onClick={onSave}
      disabled={!activeProject}
      className="h-8 px-3 flex items-center gap-2 bg-transparent hover:bg-[#f2f0ec] rounded-md text-sm font-medium text-black disabled:opacity-40"
      title={githubConnected ? 'Push to GitHub' : 'Connect GitHub'}
    >
      <GitBranch size={16} />
      <span>{githubConnected ? 'Push to GitHub' : 'Connect GitHub'}</span>
    </button>

    <button
      onClick={onRun}
      disabled={!activeProject}
      className="h-8 px-3 flex items-center gap-2 bg-transparent hover:bg-[#f2f0ec] rounded-md text-sm font-medium text-black disabled:opacity-40"
      title="Run Project"
    >
      <PlayIcon size={16} />
      <span>Run Lua</span>
    </button>

    <button
      onClick={onRefresh}
      disabled={!activeProject}
      className="h-8 px-3 flex items-center gap-2 bg-transparent hover:bg-[#f2f0ec] rounded-md text-sm font-medium text-black disabled:opacity-40"
      title="Refresh Project"
    >
      <RefreshCwIcon size={16} />
      <span>Refresh</span>
    </button>

    {/* Separator */}
    <div className="w-px h-5 bg-gray-300" />

    {/* Additional Tools */}
    <button
      className="h-8 w-8 flex items-center justify-center bg-transparent hover:bg-[#f2f0ec] rounded-md text-black"
      title="Search"
    >
      <SearchIcon size={16} />
    </button>

    <button
      className="h-8 w-8 flex items-center justify-center bg-transparent hover:bg-[#f2f0ec] rounded-md text-black"
      title="File Explorer"
    >
      <FolderIcon size={16} />
    </button>

    <div className="flex-1" />

    {/* Right-side buttons */}
    <button
      className="h-8 w-8 flex items-center justify-center bg-transparent hover:bg-[#f2f0ec] rounded-md text-black"
      title="Documentation"
    >
      <BookOpenIcon size={16} />
    </button>

    <button
      className="h-8 w-8 flex items-center justify-center bg-transparent hover:bg-[#f2f0ec] rounded-md text-black"
      title="Help"
    >
      <HelpCircleIcon size={16} />
    </button>

    <button
      className="h-8 w-8 flex items-center justify-center bg-transparent hover:bg-[#f2f0ec] rounded-md text-black"
      title="Settings"
    >
      <SettingsIcon size={16} />
    </button>
  </div>

  {/* Create Project Dialog */}
  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <DialogContent className="bg-[#fffefc]">
      <DialogHeader>
        <DialogTitle>Create New Project</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleCreateSubmit}>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label
              htmlFor="projectName"
              className="text-sm font-medium leading-none text-black"
            >
              Project Name
            </label>
            <input
              id="projectName"
              type="text"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 bg-white text-black placeholder:text-gray-500"
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
</div>


  );
};

export default TitleBar;
