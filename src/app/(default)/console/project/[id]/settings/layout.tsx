"use client";

import { SecuritySettingCard } from "@/components/cards/project-setting-card";
import { SectionLoader } from "@/components/loaders/section-loader";
import ProjectNavbar from "@/components/navbars/project-navbar";
import PageTitle from "@/components/page-title";
import Protected from "@/components/protected";
import { getProjectById } from "@/store/project/project.slice";
import { RootState } from "@/store/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  const navItems = [
    { name: "Overview", href: "/settings/overview", disabled: false },
    { name: "Security", href: "/settings/security", disabled: false },
    {
      name: "Email Templates",
      href: "/settings/email-templates",
      disabled: true,
    }, // !!! FEATURE NOT READY FOR PRODUCTION !!!
  ];

  const params = useParams();

  const project = useSelector((state: RootState) =>
    getProjectById(state, params.id as string)
  );

  const projects = useSelector((state: RootState) => state.project.projects);

  useEffect(() => {
    if (projects) {
      setIsLoading(false);
    }
  }, [projects]);

  if (isLoading) {
    return <SectionLoader loadingMessage="Loading..." />;
  }

  return (
    <div className="w-full h-full grow flex flex-col justify-start  gap-0 p-0">
      {/* Page Title */}
      <PageTitle
        outerClassName="bg-bg-2 2xl:px-160 px-50 2xl:pt-60 pt-40"
        title="Settings"
        titleClassName="page-title"
        label={project?.appName}
        labelClassName="text-12 2xl:text-18 font-medium"
      />
      <ProjectNavbar
        className="bg-bg-2 2xl:px-160 px-50 pt-30 2xl:pt-40 gap-25 2xl:gap-40"
        navItems={navItems}
        navItemStyle="text-14 2xl:text-18 2xl:pb-18 pb-10"
      />

      {/* Settings Content */}
      <div className="w-full h-full flex flex-col justify-start items-stretch gap-40 2xl:px-160 px-50 2xl:py-60 py-30">
        {children}
      </div>
    </div>
  );
};

export default Protected(SettingsLayout);
