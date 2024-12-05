interface RoleLabelProps {
  role: string;
  className?: string;
  basic?: boolean;
}

const RoleLabel = ({ role, className, basic = false }: RoleLabelProps) => {
  return (
    <div
      className={`${
        basic ? "bg-basic" : "bg-gradient"
      } rounded-full px-14 2xl:px-18 py-4 2xl:py-8 flex items-center justify-start ${className}`}
    >
      <p className={`text-white ${className}`}>{role}</p>
    </div>
  );
};

export default RoleLabel;
