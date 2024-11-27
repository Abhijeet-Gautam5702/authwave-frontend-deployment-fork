"use client";

import { storeLogin } from "@/store/auth/auth.slice";
import { getAdmin } from "@/app/(default)/page";
import { RootState } from "@/store/store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectService } from "@/services/project.service";
import { storeSetProjects } from "@/store/project/project.slice";

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
    const isAuthenticated = useSelector(
      (state: RootState) => state.auth.isAuthenticated
    );

    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();

    /*
      NOTE:
      Since this useEffect is asynchronous, it will run parallely in the background and will not block the render of any component wrapped inside it.
    */
    useEffect(() => {
      // Check if the admin is authenticated
      (async () => {
        const response = await getAdmin();
        if (response?.success) {
          dispatch(storeLogin(response.data));

          // Fetch the projects
          const projectsAPIResponse = await projectService.getProjects();
          if (projectsAPIResponse?.success) {
            dispatch(storeSetProjects(projectsAPIResponse.data));
          }
        } else {
          router.replace("/login");
        }
      })();
    }, [router, pathname]);

    // Only render the wrapped component if authenticated
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return ProtectedComponent;
};

export default Protected;
