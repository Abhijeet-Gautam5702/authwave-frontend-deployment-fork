"use client";

import { adminAuthService } from "@/services/admin-auth.service";
import { storeLogout } from "@/store/auth/auth.slice";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      const response = await adminAuthService.logout();
      if (response.success) {
        // send success toast notification

        // redirect to the home page
        router.replace("/");

        // dispatch logout action after some time
        setTimeout(() => {
          dispatch(storeLogout());
        }, 200);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside className="w-[230px] 2xl:w-[350px] grow flex flex-col justify-between items-center border-r-[0.5px] border-r-white/15 bg-bg-1 p-10 2xl:p-20">
      <div className="w-full flex flex-col justify-start items-center gap-10 2xl:gap-16">
        <SidebarNavItem
          productId={params.id as string}
          text="Authentication"
          path="/overview/users"
        />
        <SidebarNavItem
          productId={params.id as string}
          text="Settings"
          path="/settings/overview"
        />
      </div>
      {/* <p
        onClick={logout}
        className="text-14 2xl:text-20 text-white/50 underline hover:scale-105 transition-all duration-150 cursor-pointer"
      >
        Logout
      </p> */}
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
