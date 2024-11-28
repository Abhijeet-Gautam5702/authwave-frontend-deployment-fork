"use client";

import { SecuritySettingCard } from "@/components/cards/project-setting-card";
import ProjectNavbar from "@/components/navbars/project-navbar";
import PageTitle from "@/components/page-title";
import Protected from "@/components/protected";
import { getProjectById } from "@/store/project/project.slice";
import { RootState } from "@/store/store";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

const Security = () => {
  const params = useParams();

  const project = useSelector((state: RootState) =>
    getProjectById(state, params.id as string)
  );

  return (
    <section className="w-full flex flex-col justify-start items-start 2xl:gap-40 gap-20">
      <SecuritySettingCard project={project!} />
    </section>
  );
};

export default Protected(Security);
