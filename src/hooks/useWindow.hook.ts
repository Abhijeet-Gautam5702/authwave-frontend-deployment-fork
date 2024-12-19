"use client";

import { useEffect, useState } from "react";

const useWindowWidth = (threshold: number) => {
  // Initialize with undefined to prevent hydration mismatch
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWidth(window.innerWidth);
        if (width! < threshold) {
          window.alert(
            "This screen is too small to view this page. Please use a larger screen."
          );
        }
      };

      // Set initial width
      handleResize();

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return width as number;
};

export default useWindowWidth;
