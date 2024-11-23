import { BiCodeAlt } from "react-icons/bi";

const ProjectLabel = () => {
  return (
    <div className="bg-gradient rounded-full px-12 2xl:px-18 py-6 2xl:py-10 flex items-center justify-start gap-6 2xl:gap-8">
      <BiCodeAlt className="text-white text-18 2xl:text-24" />
      <p className="text-white text-14 2xl:text-18 font-medium">Web</p>
    </div>
  );
};

export default ProjectLabel;
