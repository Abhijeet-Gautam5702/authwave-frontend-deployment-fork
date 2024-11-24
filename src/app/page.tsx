"use client";

import { adminAuthService } from "@/services/admin-auth.service";
import { storeLogin } from "@/store/auth/auth.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Get the admin account details
export const getAdmin = async () => {
  try {
    const response = await adminAuthService.getAccount();
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default function Home() {
  const dispatch = useDispatch();

  // On Page Load => Log the admin into the system
  useEffect(() => {
    (async () => {
      const response = await getAdmin();
      if (response?.success) {
        dispatch(storeLogin(response.data));
      }
    })();
  }, []);

  return <div className="text-white font-normal text-4xl">Home</div>;
}
