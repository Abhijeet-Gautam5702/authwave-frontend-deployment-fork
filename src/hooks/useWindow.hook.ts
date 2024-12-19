import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // Add event listener to window (only on the client side)
    if (typeof window !== "undefined") {
      const handleResize = () => setWidth(window.innerWidth);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return { width };
};

export default useWindowWidth;
