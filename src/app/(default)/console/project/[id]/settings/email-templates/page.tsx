// !!! FEATURE NOT READY FOR PRODUCTION !!!

"use client";

import Protected from "@/components/protected";
import { RootState } from "@/store/store";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { getProjectById } from "@/store/project/project.slice";
import { EmailTemplateCard } from "@/components/cards/project-setting-card";
import { DefaultEmailTemplate } from "@/utils/default-email-template";
import ComingSoon from "@/components/coming-soon";

const EmailTemplates = () => {
  const params = useParams();

  const project = useSelector((state: RootState) =>
    getProjectById(state, params.id as string)
  );

  return <ComingSoon />;
};

export default Protected(EmailTemplates);
