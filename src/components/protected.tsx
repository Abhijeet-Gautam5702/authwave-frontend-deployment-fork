"use client";

import { storeLogin } from "@/store/auth/auth.slice";
import { getAdmin } from "@/app/(default)/page";
import { RootState } from "@/store/store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectService } from "@/services/project.service";
import { storeSetProjects } from "@/store/project/project.slice";
import Persist from "@/store/persist";

/*
    PROTECTED COMPONENT
    This component is used to protect pages from being accessed by unauthenticated users.
    It takes a component and returns a component.

    <P extends object>(WrappedComponent: React.ComponentType<P>)
        - `WrappedComponent` is the component that is being protected.
        - `P` is the props that the `WrappedComponent` accepts. `P` extends `object` because the props can be of any type.
        - `React.ComponentType<P>` is a type that represents a React component that accepts props of type `P`.
*/
const Protected = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  // Create a protected component (which is essentially a function) and return it
  const ProtectedComponent = (props: P) => {
    const auth = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();

    // Set the auth and projects in the redux-store from the session-storage
    useEffect(() => {
      const authFromLocalStorage = Persist.auth.get();
      const projectsFromLocalStorage = Persist.projects.get();

      // If the admin is not authenticated, redirect to the login page
      if (!authFromLocalStorage) {
        router.replace("/login");
        return;
      } else {
        dispatch(storeLogin(authFromLocalStorage));
      }

      // If the projects are not in the redux-store, fetch them from the API and store them in the redux-store
      if (projectsFromLocalStorage) {
        dispatch(storeSetProjects(projectsFromLocalStorage));
      } else {
        (async () => {
          const response = await projectService.getProjects();
          if (response?.success) {
            dispatch(storeSetProjects(response.data));
          }
        })();
      }
    }, [router, pathname]);

    // Only render the wrapped component if authenticated
    return auth.isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return ProtectedComponent;
};

export default Protected;
