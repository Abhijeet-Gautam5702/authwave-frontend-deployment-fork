const SDKIntegrationCard = ({
  index,
  title,
  code,
  className,
}: {
  index: number;
  title: string;
  code: string;
  className?: string;
}) => {
  return (
    <div className={`bg-bg-1 h-fit rounded-12 2xl:rounded-16 overflow-hidden ${className}`}>
      <div className="p-6 2xl:p-8 bg-bg-3">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="p-10 2xl:p-14">
        <h3 className="text-18 2xl:text-20 font-bold mb-4 2xl:mb-6 flex items-start gap-8 2xl:gap-10">
          <span className="text-p-accent">{index + 1}</span>
          {title}
        </h3>
        <pre className="min-h-[50px] w-full text-14 2xl:text-16 overflow-x-auto bg-bg-2 p-8 2xl:p-10 rounded-6 2xl:rounded-14 text-left">
          <code className="text-white/60 text-left w-full h-full">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default SDKIntegrationCard;
