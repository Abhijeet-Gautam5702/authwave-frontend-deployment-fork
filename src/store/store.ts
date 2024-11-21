import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth.slice";

/* -----------------------------STORE----------------------------- */
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

/* -----------------------------TYPES----------------------------- */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
