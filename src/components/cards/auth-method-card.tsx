import { Check } from "lucide-react";

const AuthMethodCard = ({
  icon,
  title,
  bullets,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
  className?: string;
}) => {
  return (
    <div
      className={`bg-bg-1 rounded-10 2xl:rounded-14 transition-colors duration-150 flex flex-col justify-start items-start gap-24 2xl:gap-28 2xl:p-30 p-20  ring-inset ring-1 ring-white/10 hover:ring-p-accent 2xl:ring-2 ${className}`}
    >
      <div className=" w-full flex flex-row justify-start items-center lg:flex-col lg:justify-start lg:items-start gap-24 2xl:gap-28">
        <div className="w-fit lg:w-full flex-center">
          <div className="text-p-accent w-[50px] h-[50px]  lg:w-[70px] lg:h-[70px] 2xl:w-[90px] 2xl:h-[90px] p-12 md:p-14 lg:p-18 2xl:p-24 bg-bg-0 rounded-full flex items-center justify-center ">
            {icon}
          </div>
        </div>
        <h3 className="text-left lg:text-center w-full text-16 lg:text-18 2xl:text-24 font-semibold">
          {title}
        </h3>
      </div>
      <ul className="flex flex-col justify-start items-start gap-10 2xl:gap-14">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="text-white/60  flex items-start gap-6 md:gap-8"
          >
            <Check className="text-p-accent  w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6" />
            <span className="text-left text-14 lg:text-16 2xl:text-20">{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthMethodCard;
