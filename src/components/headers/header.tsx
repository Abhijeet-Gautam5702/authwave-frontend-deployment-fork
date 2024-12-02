"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import PrimaryBtn from "@/components/buttons/primary-btn";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import ActionBtn from "../buttons/action-btn";
import { MdLogout } from "react-icons/md";
import { storeLogout } from "@/store/auth/auth.slice";
import { adminAuthService } from "@/services/admin-auth.service";
import { storeResetProjects } from "@/store/project/project.slice";

const Header = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      const response = await adminAuthService.logout();
      if (response.success) {
        // send success toast notification

        // redirect to the home page
        router.replace("/");

        // dispatch logout action after some time
        setTimeout(() => {
          dispatch(storeLogout());
          dispatch(storeResetProjects());
        }, 200);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="w-full px-30 py-10 2xl:px-40 2xl:py-16 flex flex-row justify-between items-center text-white text-14 2xl:text-20 border-b-[0.5px] border-b-white/15 2xl:border-b-[1px] 2xl:border-b-white/25">
      {/* Logo */}
      <Link href="/">
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
      {/* Nav items */}
      <div className="flex flex-row justify-center items-center gap-20  2xl:gap-30">
        <Link
          href="/docs"
          className={pathname === "/docs" ? "active-text" : "inactive-text"}
        >
          Documentation
        </Link>
        {/* Only authenticated users can access the projects page */}
        {!isHomeRoute && isAuthenticated && (
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
        {!isHomeRoute && isAuthenticated && (
          <Link
            href="/account"
            className={
              pathname === "/account" ? "active-text" : "inactive-text"
            }
          >
            Account
          </Link>
        )}
        {/* Only authenticated users can logout */}
        {!isHomeRoute && isAuthenticated && (
          <div className="group relative" onClick={logout}>
            <MdLogout className="cursor-pointer h-[20px] w-[20px] 2xl:h-[24px] 2xl:w-[24px]" />
            <span className="absolute left-1/2 -translate-x-1/2 px-10 py-4 bg-bg-3 text-white text-12 2xl:text-16 rounded-4 2xl:rounded-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Logout
            </span>
          </div>
        )}
        {/* Console button is visible only on non-console routes */}
        {isHomeRoute && <PrimaryBtn text="Console" href="/console" />}
      </div>
    </header>
  );
};

export default Header;
