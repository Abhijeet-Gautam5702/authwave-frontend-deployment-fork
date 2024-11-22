"use client";

import Protected from "@/components/protected";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const ConsolePage = () => {
  return <div>Console</div>;
};

export default Protected(ConsolePage);
