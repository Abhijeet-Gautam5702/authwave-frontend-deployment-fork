import { IProjectConfig } from "@/services/project.service";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Persist from "../persist";

/* -----------------------------TYPES----------------------------- */
export interface Project {
  _id: string;
  projectName: string;
  appName: string;
  appEmail: string;
  createdAt: string;
  updatedAt: string;
  projectKey: string;
  owner: string;
  config: IProjectConfig;
}

interface ProjectState {
  projects: Project[];
}

/* -----------------------------INITIAL STATE----------------------------- */
const initialState: ProjectState = {
  projects: [],
};

/* -----------------------------SLICE----------------------------- */
const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    storeAddProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
      Persist.projects.set(state.projects); // update projects in session-storage
    },
    storeUpdateProject: (
      state,
      action: PayloadAction<{
        _id: string;
        appName?: string;
        appEmail?: string;
        config?: Partial<IProjectConfig>;
      }>
    ) => {
      const index = state.projects.findIndex(
        (project) => project._id === action.payload._id
      );
      if (index !== -1) {
        const project = state.projects[index];

        // Update allowed top-level fields
        if (action.payload.appName) {
          state.projects[index].appName = action.payload.appName;
        }
        if (action.payload.appEmail) {
          state.projects[index].appEmail = action.payload.appEmail;
        }

        // Update config if provided
        if (action.payload.config) {
          state.projects[index].config = {
            ...project.config,
            ...action.payload.config,
          };
        }
      }
      Persist.projects.set(state.projects); // update projects in session-storage
    },
    storeDeleteProject: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter(
        (project) => project._id !== action.payload
      );
      Persist.projects.remove(action.payload); // remove project from session-storage
    },
    storeSetProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
      Persist.projects.set(state.projects); // update projects in session-storage
    },
    storeResetProjects: (state) => {
      state.projects = [];
      Persist.projects.clear(); // clear projects from session-storage
    },
  },
});

/* ----------------SELECTORS------  ------------- */

/*
  NOTE:
  Redux reducers are not supposed to return a value; they are only meant to mutate the state.
  Therefore, we use selectors to get the state values.
*/
export const getProjectById = (
  state: { project: ProjectState },
  id: string
) => {
  return state.project.projects.find((project) => project._id === id);
};

/* -----------------------------ACTIONS AND REDUCER----------------------------- */
export const {
  storeAddProject,
  storeUpdateProject,
  storeDeleteProject,
  storeSetProjects,
  storeResetProjects,
} = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
