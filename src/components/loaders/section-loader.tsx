export const SectionLoader = ({
  loadingMessage,
  className,
}: {
  loadingMessage?: string;
  className?: string;
}) => {
  return (
    <div
      className={`w-full h-full grow flex-center text-white ${className}`}
    >
      <div className="flex-center flex-col gap-20 2xl:gap-30">
        {/* Spinner */}
        <div className="w-[50px] h-[50px] border-4 border-p-accent border-t-transparent rounded-full animate-spin"></div>
        {loadingMessage && <p className="text-p-accent/50">{loadingMessage}</p>}
      </div>
    </div>
  );
};
