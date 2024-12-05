interface ComingSoonLabelProps {
  className?: string;
}

const ComingSoonLabel = ({ className }: ComingSoonLabelProps) => {
  return (
    <div
      className={`bg-warning/10 rounded-full px-6 2xl:px-10 py-4 2xl:py-8 flex items-center justify-start ${className}`}
    >
      <p className={`text-warning ${className}`}>Coming Soon</p>
    </div>
  );
};

export default ComingSoonLabel;
