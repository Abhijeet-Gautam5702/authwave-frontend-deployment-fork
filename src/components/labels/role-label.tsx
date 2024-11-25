interface RoleLabelProps {
  role: string;
  className?: string;
}

const RoleLabel = ({ role, className }: RoleLabelProps) => {
  return (
    <div
      className={`bg-gradient rounded-full px-14 2xl:px-18 py-4 2xl:py-8 flex items-center justify-start ${className}`}
    >
      <p className={`text-white ${className}`}>{role}</p>
    </div>
  );
};

export default RoleLabel;
