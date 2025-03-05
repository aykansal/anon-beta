import { useState } from 'react';
import CreateProjectModal from './CreateProjectModal';

const ProjectSidebar = ({
  projects,
  activeProject,
  onProjectSelect,
  onCreateProject,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateProject = (projectName) => {
    onCreateProject(projectName);
  };

  return (
    <>
      <div className="w-64 h-screen bg-card border-r border-border p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            + New
          </button>
        </div>
        <div className="space-y-2">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectSelect(project)}
              className={`p-3 rounded-md cursor-pointer ${
                activeProject.projectId === project.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent'
              }`}
            >
              {project.name}
            </div>
          ))}
        </div>
      </div>
      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateProject}
      />
    </>
  );
};

export default ProjectSidebar;
