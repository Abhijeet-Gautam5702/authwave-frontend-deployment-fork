"use client";

import Link from "next/link";
import { useRouter, usePathname, useParams } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
}
interface ProjectNavbarProps {
  className?: string;
  navItems: NavItem[];
  navItemStyle?: string;
}

const ProjectNavbar = ({
  className,
  navItems,
  navItemStyle,
}: ProjectNavbarProps) => {
  const params = useParams();
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === `/console/project/${params.id}${href}`;

  return (
    <div
      className={`w-full flex flex-row justify-start items-center ${className}`}
    >
      {navItems.map((item, index) => (
        <Link
          className={` transition-all duration-100 ${navItemStyle} ${
            isActive(item.href)
              ? "font-medium border-b-2 border-b-white"
              : "font-light"
          }`}
          href={`/console/project/${params.id}${item.href}`}
          key={index}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default ProjectNavbar;
