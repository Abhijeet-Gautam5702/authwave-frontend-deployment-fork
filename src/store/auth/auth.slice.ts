import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* -----------------------------TYPES----------------------------- */
interface Admin {
  name: string;
  email: string;
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
    },
    storeLogout: (state) => {
      state.isAuthenticated = false;
      state.admin = null;
    },
    storeUpdateAdminInfo: (state, action: PayloadAction<Partial<Admin>>) => {
      if (state.admin) {
        state.admin = { ...state.admin, ...action.payload };
      }
    },
  },
});

/* -----------------------------ACTIONS AND REDUCER----------------------------- */
export const { storeLogin, storeLogout, storeUpdateAdminInfo } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
