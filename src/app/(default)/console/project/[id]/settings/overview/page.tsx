"use client";

import {
  CredentialsCard,
  DetailsCard,
  LoginMethodsCard,
  DeleteProjectCard,
} from "@/components/cards/project-setting-card";
import ProjectNavbar from "@/components/navbars/project-navbar";
import Protected from "@/components/protected";
import { getProjectById } from "@/store/project/project.slice";
import { RootState } from "@/store/store";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

const Overview = () => {
  const params = useParams();
  const project = useSelector((state: RootState) =>
    getProjectById(state, params.id as string)
  );
  return (
    <section className="w-full flex flex-col justify-start items-start 2xl:gap-40 gap-20">
      <CredentialsCard project={project!} />
      <DetailsCard project={project!} />
      <LoginMethodsCard project={project!} />
      {/* Danger Zone */}
      <section className="w-full flex flex-col justify-start items-start 2xl:gap-20 gap-12">
        <p className="text-18 2xl:text-24 w-full rounded-6 2xl:rounded-12 bg-danger-2/15 text-danger-2 font-medium p-12 2xl:p-20 text-center">
          DANGER ZONE
        </p>

        <DeleteProjectCard project={project!} />
      </section>
    </section>
  );
};

export default Protected(Overview);
