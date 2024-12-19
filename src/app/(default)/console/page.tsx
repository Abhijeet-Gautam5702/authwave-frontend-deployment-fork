"use client";

import CreateProjectCard from "@/components/cards/create-project-card";
import ProjectCard from "@/components/cards/project-card";
import Protected from "@/components/protected";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const ConsolePage = () => {
  /*
    SINGLE SOURCE OF TRUTH - REDUX STORE
    1. The store is the single source of truth for the projects. Once populated, the component will use the data from the store instead of making an additional request.
    2. The store data is being watched for changes, so if the data is updated, the component will re-render with the new data.
    3. No need to create additional local state.
  */
  const projectsFromStore = useSelector(
    (state: RootState) => state.project.projects
  );

  return (
    <div className="text-white w-full grow flex flex-col items-start justify-start gap-20 2xl:gap-40 px-100 2xl:px-200 py-40 2xl:py-80">
      <h1 className="page-title">Personal Projects</h1>
      <section className="w-full flex flex-wrap items-center justify-start gap-30">
        {projectsFromStore.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
        <CreateProjectCard href="/console/create" />
      </section>
    </div>
  );
};

export default Protected(ConsolePage);
