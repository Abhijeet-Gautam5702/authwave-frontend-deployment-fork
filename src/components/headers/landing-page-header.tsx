"use client";

import Link from "next/link";
import { adminAuthService } from "@/services/admin-auth.service";
import PrimaryBtn from "../buttons/primary-btn";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { storeLogin } from "@/store/auth/auth.slice";
import useUniversalLoader from "../loaders/universal-loader";
import { AUTHWAVE_DOCS_BASE_URL } from "@/constants";

export default function LandingPageHeader() {
  const dispatch = useDispatch();
  const { startLoading, stopLoading } = useUniversalLoader();

  // const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  // const [isScreenSmall, setIsScreenSmall] = useState<boolean>(
  //   screenWidth < 1024
  // );

  // useEffect(() => {
  //   setIsScreenSmall(screenWidth < 1024);
  // }, [screenWidth]);

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
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md px-10 py-6 sm:px-20 sm:py-10 2xl:px-30 2xl:py-16 flex flex-row justify-between items-center text-white text-14 2xl:text-20">
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
      <nav className="hidden md:flex items-center gap-10 sm:gap-20 2xl:gap-30">
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
      <PrimaryBtn text="Console" href="/console" className="hidden md:block" />
      <MobileMenu />
    </header>
  );
}

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 right-0 w-full px-6">
          <nav className="flex flex-col gap-8 px-30 rounded-12 py-14 bg-bg-2">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#security"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Security
            </Link>
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href={AUTHWAVE_DOCS_BASE_URL}
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Documentation
            </Link>
            {/* <PrimaryBtn text="Console" href="/console" className="mt-2" /> */}
          </nav>
        </div>
      )}
    </div>
  );
};
