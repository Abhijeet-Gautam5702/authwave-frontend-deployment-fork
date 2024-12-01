// !!! FEATURE NOT READY FOR PRODUCTION !!!

"use client";

import Protected from "@/components/protected";
import { RootState } from "@/store/store";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { getProjectById } from "@/store/project/project.slice";
import { EmailTemplateCard } from "@/components/cards/project-setting-card";
import { DefaultEmailTemplate } from "@/utils/default-email-template";

const EmailTemplates = () => {
  const params = useParams();

  const project = useSelector((state: RootState) =>
    getProjectById(state, params.id as string)
  );

  return (
    <section className="w-full flex flex-col justify-start items-start 2xl:gap-40 gap-20">
      <EmailTemplateCard
        project={project!}
        emailTemplate={DefaultEmailTemplate.userVerification(
          "https://dummy-base-link.com"
        )}
      />
    </section>
  );
};

export default Protected(EmailTemplates);
