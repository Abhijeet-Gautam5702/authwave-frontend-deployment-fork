"use client";

import { storeLogin } from "@/store/auth/auth.slice";
import { RootState } from "@/store/store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectService } from "@/services/project.service";
import { storeSetProjects } from "@/store/project/project.slice";
import Persist from "@/store/persist";
import useUniversalLoader from "./loaders/universal-loader";

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
    const { startLoading, stopLoading } = useUniversalLoader();

    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();

    // Check if the screen width is less than 1024 and alert the user
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    if (screenWidth < 1024) {
      window.alert(
        "The developer console is not optimized for mobile devices. Please use a desktop or laptop to access the application."
      );
      return;
    }

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
          try {
            startLoading();
            const response = await projectService.getProjects();
            if (response?.success) {
              dispatch(storeSetProjects(response.data));
            }
          } catch (error) {
            console.log(error);
          } finally {
            // setTimeout(() => {
            stopLoading();
            // }, 1000);
          }
        })();
      }
    }, [router, pathname]);

    // Only render the wrapped component if authenticated and the screen width is greater than or equal to 1024
    return auth.isAuthenticated && screenWidth >= 1024 ? (
      <WrappedComponent {...props} />
    ) : null;
  };

  return ProtectedComponent;
};

export default Protected;
