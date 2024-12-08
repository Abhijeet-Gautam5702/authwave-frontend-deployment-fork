import { Check } from "lucide-react";

const UserManagementCard = ({
  icon,
  title,
  bullets,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: {
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={`bg-bg-1 rounded-10 2xl:rounded-14 transition-colors duration-150 flex flex-col justify-start items-start gap-24 2xl:gap-28 p-20 2xl:p-30 ring-inset ring-1 ring-white/10 hover:ring-p-accent 2xl:ring-2 ${className}`}
    >
      <div className="w-full flex-center gap-12 2xl:gap-18">
        <div className="text-p-accent w-[50px] h-[50px] 2xl:w-[70px] 2xl:h-[70px] p-12 2xl:p-18 bg-bg-0 rounded-full flex items-center justify-center ">
          {icon}
        </div>
        <h3 className="text-left w-full text-18 2xl:text-24 font-semibold">
          {title}
        </h3>
      </div>
      <ul className="flex flex-col justify-start items-start gap-14 2xl:gap-14">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="text-white/60 text-16 2xl:text-18 flex justify-start items-start gap-6"
          >
            <Check className="text-p-accent w-5 h-5 2xl:w-6 2xl:h-6" />
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <span className="text-16 2xl:text-20 font-medium text-white">
                {bullet.title}
              </span>
              <p className="text-14 2xl:text-16">{bullet.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagementCard;
