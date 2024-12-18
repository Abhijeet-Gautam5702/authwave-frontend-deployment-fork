"use client";

import Link from "next/link";
import { adminAuthService } from "@/services/admin-auth.service";
import PrimaryBtn from "../buttons/primary-btn";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { storeLogin } from "@/store/auth/auth.slice";
import useUniversalLoader from "../loaders/universal-loader";
import { AUTHWAVE_DOCS_BASE_URL } from "@/constants";

export default function LandingPageHeader() {
  const dispatch = useDispatch();
  const { startLoading, stopLoading } = useUniversalLoader();

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

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md px-20 py-10 2xl:px-30 2xl:py-16 flex flex-row justify-between items-center text-white text-14 2xl:text-20 ">
      <Link href="#hero">
        <div className="flex flex-row justify-center items-center gap-2">
          <Image
            src={"/assets/images/logo.png"}
            alt="logo"
            width={45}
            height={45}
            className="2xl:w-[70px] 2xl:h-[70px]"
          />
          <p className="font-bold text-18 2xl:text-24">Auth Wave</p>
        </div>
      </Link>
      <nav className="hidden md:flex items-center gap-20 2xl:gap-30">
        <Link
          href="#features"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Features
        </Link>
        <Link
          href="#security"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Security
        </Link>
        <Link
          href="#pricing"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Pricing
        </Link>
        <Link
          href={AUTHWAVE_DOCS_BASE_URL}
          target="_blank"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Documentation
        </Link>
      </nav>
      <PrimaryBtn text="Console" href="/console" />
    </header>
  );
}
