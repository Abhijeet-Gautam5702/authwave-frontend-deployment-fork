const SessionManagementCard = ({
  title,
  description,
  bullets,
  icon,
  className,
}: {
  title: string;
  description: string;
  bullets: {
    title: string;
    icon: React.ReactNode;
  }[];
  icon: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-bg-1 rounded-10 2xl:rounded-14 transition-colors duration-150 flex flex-row justify-start items-start gap-30 2xl:gap-35 p-20 2xl:p-30 ring-inset ring-1 ring-white/10 hover:ring-p-accent 2xl:ring-2 ${className}`}
    >
      <div className="w-1/2 flex flex-col justify-start items-start gap-20 2xl:gap-30">
        <div className="w-full flex-center gap-12 2xl:gap-18">
          <div className="text-p-accent w-[50px] h-[50px] 2xl:w-[70px] 2xl:h-[70px] p-12 2xl:p-18 bg-bg-0 rounded-full flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-left w-full text-18 2xl:text-24 font-semibold">
            {title}
          </h3>
        </div>
        <p className="w-full text-left text-white/60 text-16 2xl:text-18">{description}</p>
      </div>
      <ul className="w-1/2 flex flex-row justify-start items-start flex-wrap gap-14 2xl:gap-20">
        {bullets.map((item, index) => (
          <li
            key={index}
            className="text-white/60 text-16 2xl:text-18 flex justify-start items-start gap-10 2xl:gap-14 bg-bg-2 p-10 2xl:p-14 rounded-6 2xl:rounded-10"
          >
            <div className="text-p-accent w-5 h-5 2xl:w-6 2xl:h-6">
              {item.icon}
            </div>
            <span className="text-14 2xl:text-18 font-normal text-white">
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionManagementCard;
