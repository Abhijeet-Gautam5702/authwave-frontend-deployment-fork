import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* -----------------------------TYPES----------------------------- */
interface LoaderState {
  isLoading: boolean;
  loadingMessage?: string;
}

/* -----------------------------INITIAL STATE----------------------------- */
const initialState: LoaderState = {
  isLoading: false,
  loadingMessage: undefined,
};

/* -----------------------------SLICE----------------------------- */
const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<LoaderState>) => {
      state.isLoading = action.payload.isLoading;
      state.loadingMessage = action.payload.loadingMessage || undefined;
    },
    stopLoading: (state) => {
      state.isLoading = false;
      state.loadingMessage = undefined;
    },
  },
});

/* -----------------------------ACTIONS AND REDUCER----------------------------- */
export const { setLoading, stopLoading } = loaderSlice.actions;
export const loaderReducer = loaderSlice.reducer;
