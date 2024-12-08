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
      className={`bg-bg-1 rounded-10 2xl:rounded-14 transition-colors duration-150 flex flex-col justify-start items-start gap-24 2xl:gap-28 p-20 2xl:p-30 ring-inset ring-1 ring-white/10 hover:ring-p-accent 2xl:ring-2 ${className}`}
    >
      <div className="w-full flex-center">
        <div className="text-p-accent w-[70px] h-[70px] 2xl:w-[90px] 2xl:h-[90px] p-18 2xl:p-24 bg-bg-0 rounded-full flex items-center justify-center ">
          {icon}
        </div>
      </div>
      <h3 className="text-center w-full text-18 2xl:text-24 font-semibold">
        {title}
      </h3>
      <ul className="flex flex-col justify-start items-start gap-10 2xl:gap-14">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="text-white/60 text-16 2xl:text-18 flex items-center gap-6"
          >
            <Check className="text-p-accent w-5 h-5 2xl:w-6 2xl:h-6" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthMethodCard;
