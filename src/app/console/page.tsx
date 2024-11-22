"use client";

import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const ConsolePage = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  if (!isAuthenticated) {
    router.push("/login");
  }
  return <div>Console</div>;
};

export default ConsolePage;
