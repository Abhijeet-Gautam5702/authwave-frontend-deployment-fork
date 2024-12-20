"use client";

import { storeLogin } from "@/store/auth/auth.slice";
import { RootState } from "@/store/store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectService } from "@/services/project.service";
import { storeSetProjects } from "@/store/project/project.slice";
import Persist from "@/store/persist";
import useUniversalLoader from "./loaders/universal-loader";
import useWindowWidth from "@/hooks/useWindow.hook";
import { useToast } from "@/utils/toast-notification";
import { MdOutlineMobileOff } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";

const Protected = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ProtectedComponent = (props: P) => {
    const auth = useSelector((state: RootState) => state.auth);
    const { startLoading, stopLoading } = useUniversalLoader();
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();

    const width = useWindowWidth(1024);
    if (width < 1024) {
      router.back();
      useToast({
        message: "This page can be viewed in desktop only.",
        delay: 300,
        icon: MdOutlineMobileOff,
        iconStyle: "text-p-accent",
      });
    }

    useEffect(() => {
      const authFromLocalStorage = Persist.auth.get();
      const projectsFromLocalStorage = Persist.projects.get();

      if (!authFromLocalStorage) {
        router.replace("/login");
        useToast({
          message: "Please login to access the developer console",
          delay: 300,
          icon: IoLockClosed,
          iconStyle: "text-p-accent",
        });
        return;
      } else {
        dispatch(storeLogin(authFromLocalStorage));
      }

      if (projectsFromLocalStorage) {
        dispatch(storeSetProjects(projectsFromLocalStorage));
      } else {
        (async () => {
          try {
            startLoading();
            const response = await projectService.getProjects();
            if (response?.success) {
              dispatch(storeSetProjects(response.data));
            }
          } catch (error) {
            console.log(error);
          } finally {
            stopLoading();
          }
        })();
      }
    }, [router, pathname]);

    return auth.isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return ProtectedComponent;
};

export default Protected;
