"use client";

import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

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
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/login");
      }
    }, [isAuthenticated, router]);

    // Only render the wrapped component if authenticated
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return ProtectedComponent;
};

export default Protected;
