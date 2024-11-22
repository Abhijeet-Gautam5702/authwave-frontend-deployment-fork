import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Protected = (WrappedComponent: React.ComponentType) => {
  const ProtectedComponent = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/login");
      }
    }, [isAuthenticated, router]);

    // Only render the wrapped component if authenticated
    return isAuthenticated ? <WrappedComponent /> : null;
  };

  return ProtectedComponent;
};

export default Protected;
