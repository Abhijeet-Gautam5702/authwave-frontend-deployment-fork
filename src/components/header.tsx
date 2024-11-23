"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import PrimaryBtn from "@/components/buttons/primary-btn";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Header = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const pathname = usePathname();
  const isConsoleRoute = pathname.includes("/console");

  return (
    <header className="w-full px-30 py-20 2xl:px-40 2xl:py-30 flex flex-row justify-between items-center text-white text-14 2xl:text-20 border-b-[0.5px] border-white/15 2xl:border-b-[1px] 2xl:border-b-white/25">
      {/* Logo */}
      <Link href="/">
        <div className="flex flex-row justify-center items-center gap-2">
          <Image
            src={"/assets/images/logo.png"}
            alt="logo"
            width={50}
            height={50}
            className="2xl:w-[80px] 2xl:h-[80px]"
          />
          <p className="font-bold text-18 2xl:text-24">Auth Wave</p>
        </div>
      </Link>
      {/* Nav items */}
      <div className="flex flex-row justify-center items-center gap-20  2xl:gap-30">
        <Link
          href="/docs"
          className={pathname === "/docs" ? "active-text" : "inactive-text"}
        >
          Documentation
        </Link>
        {/* Only authenticated users can access the projects page */}
        {isAuthenticated && (
          <Link
            href="/console"
            className={
              pathname === "/console" ? "active-text" : "inactive-text"
            }
          >
            Projects
          </Link>
        )}
        {/* Only authenticated users can access the account page */}
        {isAuthenticated && (
          <Link
            href="/account"
            className={
              pathname === "/account" ? "active-text" : "inactive-text"
            }
          >
            Account
          </Link>
        )}
        {/* Console button is visible only on non-console routes */}
        {!isConsoleRoute && <PrimaryBtn text="Console" href="/console" />}
      </div>
    </header>
  );
};

export default Header;
