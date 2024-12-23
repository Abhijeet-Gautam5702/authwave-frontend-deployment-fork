import { AUTHWAVE_DOCS_BASE_URL } from "@/constants";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full px-20 py-12 2xl:px-30 2xl:py-16 flex flex-row justify-between items-center text-white text-14 2xl:text-20 border-t-[0.5px] border-white/15 2xl:border-t-[1px] 2xl:border-t-white/25">
      {/* Copyright */}
      <div className="flex flex-row justify-start items-center gap-12 2xl:gap-20">
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
        {/* GitHub Logo */}
        <Link href="https://github.com/Auth-Wave" target="_blank">
          <FaGithub className="w-4 h-4 2xl:w-6 2xl:h-6" />
        </Link>
      </div>
      {/* Links */}
      <div className="flex flex-row justify-start items-center gap-20 2xl:gap-30">
        <p>{`Version 1.0.2`}</p>
        <Link href={AUTHWAVE_DOCS_BASE_URL} target="_blank">
          Docs
        </Link>
        <Link href="https://github.com/Abhijeet-Gautam5702" target="_blank">
          <div className="flex flex-row justify-start items-center gap-12 2xl:gap-20">
            <p>Developer</p>
            {/* GitHub Logo */}
            <FaGithub className="w-4 h-4 2xl:w-6 2xl:h-6" />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
