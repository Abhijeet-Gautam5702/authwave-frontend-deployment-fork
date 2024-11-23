import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth.slice";
import { projectReducer } from "./project/project.slice";

/* -----------------------------STORE----------------------------- */
export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
  },
});

/* -----------------------------TYPES----------------------------- */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
