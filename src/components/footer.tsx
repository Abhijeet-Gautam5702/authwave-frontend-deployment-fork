import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full px-30 py-20 2xl:px-40 2xl:py-30 flex flex-row justify-between items-center text-white text-14 2xl:text-20">
      {/* Copyright */}
      <div className="flex flex-row justify-start items-center gap-2 2xl:gap-4">
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
        {/* GitHub Logo */}
        <Link href="https://github.com/Auth-Wave" target="_blank">
          <FaGithub className="w-4 h-4 2xl:w-6 2xl:h-6" />
        </Link>
      </div>
      {/* Links */}
      <div className="flex flex-row justify-start items-center gap-4 2xl:gap-8">
        <p>{`Version 1.0.2`}</p>
        <Link href="/docs">Docs</Link>
        <Link href="https://github.com/Abhijeet-Gautam5702" target="_blank">
          <div className="flex flex-row justify-start items-center gap-2 2xl:gap-4">
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
