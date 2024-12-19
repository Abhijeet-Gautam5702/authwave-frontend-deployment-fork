import { Check } from "lucide-react";

const SecurityFeatureCard = ({
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
      className={`bg-bg-1 rounded-10 2xl:rounded-14 transition-all duration-150 flex flex-col justify-start items-start gap-16 2xl:gap-20 p-20 2xl:p-30 ring-inset ring-1 ring-white/10 2xl:ring-2 bg-gradient-hover ${className}`}
    >
      <div className="flex flex-row justify-start items-center gap-18 2xl:gap-22">
        <div className="text-p-accent w-7 h-7 2xl:w-8 2xl:h-8">{icon}</div>
        <h3 className="text-left text-18 2xl:text-24 font-semibold">{title}</h3>
      </div>
      <ul className="flex flex-col justify-start items-start gap-10 2xl:gap-14">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="text-white/60 text-16 2xl:text-18 flex justify-start items-start gap-6 2xl:gap-8"
          >
            <Check className="text-p-accent w-5 h-5 2xl:w-6 2xl:h-6" />
            <p className="text-left">{bullet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecurityFeatureCard;
