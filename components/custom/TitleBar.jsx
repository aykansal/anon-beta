import React, { useState } from 'react';
import {
  PlayIcon,
  PlusIcon,
  SaveIcon,
  SettingsIcon,
  FolderIcon,
  RefreshCwIcon,
  SearchIcon,
  HelpCircleIcon,
  BookOpenIcon
} from 'lucide-react';

const TitleBar = ({
  projects,
  activeProject,
  onProjectSelect,
  onCreateProject,
  onSave,
  onRun,
  onRefresh
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (newProjectName.trim()) {
      onCreateProject(newProjectName.trim());
      setNewProjectName('');
      setIsCreating(false);
    }
  };

  return (
    <div className="border-b bg-background">
      {/* Main Toolbar */}
      <div className="h-10 px-2 flex items-center gap-2">
        {/* Project Selection */}
        <select
          value={activeProject?.id || ''}
          onChange={(e) => {
            e.preventDefault();
            const project = projects.find(p => p.id === e.target.value);
            console.log(project)
            onProjectSelect(project);
          }}
          className="h-7 px-2 bg-background border rounded text-sm"
        >
          <option value="">Select Project</option>
          {projects && projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>

        {/* Separator */}
        <div className="w-px h-4 bg-border mx-1" />

        {/* Action Buttons */}
        <button
          onClick={() => setIsCreating(true)}
          className="h-7 px-2 flex items-center gap-1 hover:bg-accent rounded-md text-sm"
          title="New Project"
        >
          <PlusIcon size={14} />
          <span>New</span>
        </button>

        <button
          onClick={onSave}
          disabled={!activeProject}
          className="h-7 px-2 flex items-center gap-1 hover:bg-accent rounded-md text-sm disabled:opacity-50"
          title="Save Project"
        >
          <SaveIcon size={14} />
          <span>Save</span>
        </button>

        <button
          onClick={onRun}
          disabled={!activeProject}
          className="h-7 px-2 flex items-center gap-1 hover:bg-accent rounded-md text-sm disabled:opacity-50"
          title="Run Project"
        >
          <PlayIcon size={14} />
          <span>Run</span>
        </button>

        <button
          onClick={onRefresh}
          disabled={!activeProject}
          className="h-7 px-2 flex items-center gap-1 hover:bg-accent rounded-md text-sm disabled:opacity-50"
          title="Refresh Project"
        >
          <RefreshCwIcon size={14} />
          <span>Refresh</span>
        </button>

        {/* Separator */}
        <div className="w-px h-4 bg-border mx-1" />

        {/* Additional Tools */}
        <button
          className="h-7 w-7 flex items-center justify-center hover:bg-accent rounded-md"
          title="Search"
        >
          <SearchIcon size={14} />
        </button>

        <button
          className="h-7 w-7 flex items-center justify-center hover:bg-accent rounded-md"
          title="File Explorer"
        >
          <FolderIcon size={14} />
        </button>

        <div className="flex-1" /> {/* Spacer */}

        {/* Right-side buttons */}
        <button
          className="h-7 w-7 flex items-center justify-center hover:bg-accent rounded-md"
          title="Documentation"
        >
          <BookOpenIcon size={14} />
        </button>

        <button
          className="h-7 w-7 flex items-center justify-center hover:bg-accent rounded-md"
          title="Help"
        >
          <HelpCircleIcon size={14} />
        </button>

        <button
          className="h-7 w-7 flex items-center justify-center hover:bg-accent rounded-md"
          title="Settings"
        >
          <SettingsIcon size={14} />
        </button>
      </div>

      {/* New Project Form */}
      {isCreating && (
        <form onSubmit={handleCreateSubmit} className="p-2 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              placeholder="Enter project name..."
              className="flex-1 h-8 px-2 bg-background border rounded text-sm"
              autoFocus
            />
            <button
              type="submit"
              className="h-8 px-3 bg-primary text-primary-foreground rounded text-sm"
            >
              Create
            </button>
            <button
              type="button"
              onClick={() => {
                setIsCreating(false);
                setNewProjectName('');
              }}
              className="h-8 px-3 border rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TitleBar;
