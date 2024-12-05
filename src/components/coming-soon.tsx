import { FaTools } from "react-icons/fa";
import ComingSoonLabel from "./labels/coming-soon";

export default function ComingSoon() {
  return (
    <div className="w-full grow h-full flex flex-col justify-center items-center gap-20 2xl:gap-30">
      <FaTools className="text-40 2xl:text-60 text-white/50" />
      <ComingSoonLabel className="text-14 2xl:text-18 font-medium px-20 py-4 2xl:px-24 2xl:py-6" />
      <div className="flex flex-col justify-center items-center gap-4 2xl:gap-6">
        <h1 className="text-24 2xl:text-35 font-normal text-white/50">
          We are working on this feature!
        </h1>
        <p className="text-14 2xl:text-18 font-normal text-white/50">
          This feature will be available soon.
        </p>
      </div>
    </div>
  );
}
