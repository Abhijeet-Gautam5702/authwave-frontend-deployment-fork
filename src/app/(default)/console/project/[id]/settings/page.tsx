"use client";

import { SecuritySettingCard } from "@/components/cards/project-setting-card";
import PageTitle from "@/components/page-title";
import Protected from "@/components/protected";
import { getProjectById } from "@/store/project/project.slice";
import { RootState } from "@/store/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SettingsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  const project = useSelector((state: RootState) =>
    getProjectById(state, params.id as string)
  );

  const projects = useSelector((state: RootState) => state.project.projects);
  console.log(projects);

  useEffect(() => {
    if (projects.length > 0) {
      setIsLoading(false);
    }
  }, [projects]);

  if (isLoading) {
    return (
      <div className="text-white grow h-full w-full flex flex-col justify-center items-center gap-0 p-0">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full grow flex flex-col justify-start items-center gap-0 p-0">
      {/* Page Title */}
      <PageTitle
        outerClassName="bg-bg-2 2xl:px-160 px-100 2xl:py-80 py-40"
        title="Settings"
        titleClassName="page-title"
        label={project?.appName}
        labelClassName="text-12 2xl:text-18 font-medium"
      />

      {/* Settings Content */}
      <div className="w-full min-h-full flex flex-col justify-start items-center gap-40 2xl:px-160 px-100 2xl:py-60 py-30">
        <section className="w-full flex flex-col justify-start items-start 2xl:gap-40 gap-20">
          <SecuritySettingCard project={project!}  />
        </section>
      </div>
    </div>
  );
};

export default Protected(SettingsPage);
