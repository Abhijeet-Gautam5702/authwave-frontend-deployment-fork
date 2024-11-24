"use client";

import { adminAuthService } from "@/services/admin-auth.service";
import { storeLogin } from "@/store/auth/auth.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const getAdmin = async () => {
    try {
      const response = await adminAuthService.getAccount();
      console.log(response);
      dispatch(storeLogin(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  return <div className="text-white font-normal text-4xl">Home</div>;
}
