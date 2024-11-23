import { Project } from "@/store/project/project.slice";
import Link from "next/link";
import ProjectLabel from "../labels/project-label";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      href={`/console/project/${project._id}`}
      className="w-[300px] 2xl:w-[420px] h-[150px] 2xl:h-[250px] bg-bg-2 rounded-8 2xl:rounded-12 p-20 2xl:p-30 flex flex-col items-start justify-between cursor-pointer hover:bg-bg-2/60 transition-all"
    >
      <div className="flex flex-col items-start justify-start gap-4 2xl:gap-6">
        <p className="inactive-text text-10 2xl:text-14">{project._id}</p>
        <p className="text-18 2xl:text-24 font-semibold">
          {project.projectName}
        </p>
      </div>

      <div className="w-full flex items-center justify-end">
        <ProjectLabel />
      </div>
    </Link>
  );
};

export default ProjectCard;
