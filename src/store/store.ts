import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth.slice";
import { projectReducer } from "./project/project.slice";
import { loaderReducer } from "./loader/loader.slice";
/* -----------------------------STORE----------------------------- */
export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
    loader: loaderReducer,
  },
});

/* -----------------------------TYPES----------------------------- */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
