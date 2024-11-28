import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Persist from "../persist";

/* -----------------------------TYPES----------------------------- */
interface Admin {
  _id: string;
  name: string;
  email: string;
  password: string;
  accessToken: string;
  accessTokenExpiry: Date;
  refreshToken: string;
  refreshTokenExpiry: Date;
}

interface AuthState {
  isAuthenticated: boolean;
  admin: Admin | null;
}

/* -----------------------------INITIAL STATE----------------------------- */
const initialState: AuthState = {
  isAuthenticated: false,
  admin: null,
};

/* -----------------------------SLICE----------------------------- */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeLogin: (state, action: PayloadAction<Admin>) => {
      state.isAuthenticated = true;
      state.admin = action.payload;
      Persist.auth.set(action.payload); // update auth in session-storage
    },
    storeLogout: (state) => {
      state.isAuthenticated = false;
      state.admin = null;
      Persist.auth.remove(); // remove auth from session-storage
      Persist.projects.clear(); // remove projects from session-storage
    },
    storeUpdateAdminInfo: (state, action: PayloadAction<Partial<Admin>>) => {
      if (state.admin) {
        state.admin = { ...state.admin, ...action.payload };
        Persist.auth.set(state.admin); // update auth in session-storage
      }
    },
  },
});

/* -----------------------------ACTIONS AND REDUCER----------------------------- */
export const { storeLogin, storeLogout, storeUpdateAdminInfo } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
