import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function LandingPageFooter() {
  return (
    <footer className="w-full px-20 pt-80 2xl:px-40 2xl:pt-160 flex flex-col justify-between items-center text-white text-14 2xl:text-20 bg-bg-2">
      <div className="w-full flex flex-col justify-between items-stretch gap-10">
        <div className="flex flex-row justify-between items-start gap-80 2xl:gap-100 mb-12">
          {/* Logo and Description */}
          <div className="w-1/2 flex flex-col justify-start items-start gap-10 2xl:gap-20">
            <Link
              href="/"
              className="flex flex-row justify-start items-center gap-4"
            >
              <Image
                src={"/assets/images/logo.png"}
                alt="logo"
                width={50}
                height={50}
                className="2xl:w-[70px] 2xl:h-[70px]"
              />
              <p className="text-white text-20 2xl:text-26 font-bold">
                Auth Wave
              </p>
            </Link>
            <p className="text-white/60">
              Enterprise-grade authentication and user management platform that
              streamlines secure user access for modern applications.
            </p>
            <div className="flex gap-12 2xl:gap-20 mt-2">
              <Link
                href="https://github.com/Auth-Wave"
                target="_blank"
                className="text-white/60 hover:text-white"
              >
                <FaGithub className="w-5 h-5 2xl:w-7 2xl:h-7" />
              </Link>
              <Link
                href="https://x.com/abhijeet_gautam"
                target="_blank"
                className="text-white/60 hover:text-white"
              >
                <FaTwitter className="w-5 h-5 2xl:w-7 2xl:h-7" />
              </Link>
            </div>
          </div>
          {/* Footer Columns */}
          <div className="w-1/2 flex flex-row justify-start items-start gap-20 2xl:gap-50">
            <FooterColumn
              title="Resources"
              items={["Documentation", "API Reference"]}
            />
            <FooterColumn
              title="Product"
              items={["Features", "Pricing", "Security"]}
            />
            <FooterColumn title="Company" items={["About", "Contact"]} />
          </div>
        </div>
        {/* Copyright and Links */}
        <div className="w-full px-20 py-16 2xl:px-40 2xl:py-32 flex flex-row justify-between items-center text-white/60 text-14 2xl:text-20 border-t-[0.5px] border-white/15 2xl:border-t-[1px] 2xl:border-t-white/25">
          <div className="flex flex-row justify-start items-center gap-12 2xl:gap-30">
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
            {/* GitHub Logo */}
            <Link href="https://github.com/Auth-Wave" target="_blank">
              <FaGithub className="w-4 h-4 2xl:w-8 2xl:h-8 hover:text-white" />
            </Link>
          </div>
          {/* Links */}
          <div className="flex flex-row justify-start items-center gap-20 2xl:gap-40">
            <p>{`Version 1.0.2`}</p>
            {/* <Link href="/docs">Docs</Link> */}
            <div className="flex flex-row justify-start items-center gap-12 2xl:gap-30">
              <p>Developer</p>
              {/* GitHub Logo */}
              <Link
                href="https://github.com/Abhijeet-Gautam5702"
                target="_blank"
              >
                <FaGithub className="w-4 h-4 2xl:w-8 2xl:h-8 hover:text-white" />
              </Link>
              <Link href="https://x.com/abhijeet_gautam" target="_blank">
                <FaTwitter className="w-4 h-4 2xl:w-8 2xl:h-8 hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  items: string[];
}

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div className="w-1/3">
      <h3 className="text-14 2xl:text-20 font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <Link href="#" className="text-white/60 hover:text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
