import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
interface CreateProjectCardProps {
  href: string;
}

const CreateProjectCard = ({ href = "" }: CreateProjectCardProps) => {
  return (
    <Link
      href={href}
      className="w-[300px] 2xl:w-[400px] h-[150px] 2xl:h-[200px] bg-bg-2 rounded-8 2xl:rounded-12 flex flex-col items-center justify-center gap-14 2xl:gap-20 cursor-pointer hover:bg-bg-2/60 transition-all"
    >
      <div className="bg-bg-3 rounded-full p-10 2xl:p-14 flex-center">
        <AiOutlinePlus className="text-white text-24 2xl:text-32" />
      </div>
      <p className="inactive-text text-14 2xl:text-18">Create a new project</p>
    </Link>
  );
};

export default CreateProjectCard;
