import { createContext } from "react";

export const ProjectCtx = createContext({
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
  addTasks: () => {},
    deleteProjects: () => {},
    deleteTasks: () => {},
    startAddingProject: () => {},
    cancelAddProject: () => {},
    addProject: () => {},
    selectProject: () => {},
});

export function ProjectContextProvider () {}
