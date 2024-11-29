"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const params = useParams();
  return (
    <aside className="w-[230px] 2xl:w-[350px] grow flex flex-col justify-start items-center gap-10 2xl:gap-16 border-r-[0.5px] border-r-white/15 bg-bg-1 p-10 2xl:p-20">
      <SidebarNavItem
        productId={params.id as string}
        text="Overview"
        path="/overview"
      />
      <SidebarNavItem
        productId={params.id as string}
        text="Settings"
        path="/settings/overview"
      />
    </aside>
  );
};

export default Sidebar;

/* Utility component: Sidebar Nav Item */
const SidebarNavItem = ({
  productId,
  text,
  path,
}: {
  productId: string;
  text: string;
  path: string;
}) => {
  const pathname = usePathname();

  let isActive = false;
  if (path.includes("settings") && pathname.includes("settings")) {
    isActive = true;
  } else if (!path.includes("settings") && !pathname.includes("settings")) {
    isActive = true;
  }

  return (
    <Link
      href={`/console/project/${productId}${path}`}
      className={`w-full flex-center rounded-4 2xl:rounded-8  p-10 2xl:p-16 cursor-pointer text-14 2xl:text-20 text-white hover:bg-bg-2/80 transition-all duration-200 ${
        isActive ? "bg-bg-2" : ""
      }`}
    >
      {text}
    </Link>
  );
};
