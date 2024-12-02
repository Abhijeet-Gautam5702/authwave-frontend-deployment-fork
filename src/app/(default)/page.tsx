"use client";

import useLoader from "@/components/loader";
import { adminAuthService } from "@/services/admin-auth.service";
import { storeLogin } from "@/store/auth/auth.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { startLoading, stopLoading } = useLoader();

  // On Page Load => Log the admin into the store
  useEffect(() => {
    (async () => {
      try {
        startLoading();
        const response = await adminAuthService.getAccount();
        if (response?.success) {
          dispatch(storeLogin(response.data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          stopLoading();
        }, 1000);
      }
    })();
  }, []);

  return <div className="text-white font-normal text-4xl">Home</div>;
}
