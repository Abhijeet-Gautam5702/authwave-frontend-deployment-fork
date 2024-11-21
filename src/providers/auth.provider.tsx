"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
