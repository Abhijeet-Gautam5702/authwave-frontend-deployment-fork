import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  config: object;
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
    },
    storeUpdateProject: (
      state,
      action: PayloadAction<Partial<Project> & { id: string }>
    ) => {
      const index = state.projects.findIndex(
        (project) => project._id === action.payload._id
      );
      if (index !== -1) {
        state.projects[index] = { ...state.projects[index], ...action.payload };
      }
    },
    storeDeleteProject: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter(
        (project) => project._id !== action.payload
      );
    },
    storeSetProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
  },
});

/* -----------------------------ACTIONS AND REDUCER----------------------------- */
export const {
  storeAddProject,
  storeUpdateProject,
  storeDeleteProject,
  storeSetProjects,
} = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
