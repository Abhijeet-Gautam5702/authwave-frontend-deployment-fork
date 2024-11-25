import { Loader } from "lucide-react";

interface ActionBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  loading?: boolean;
  onClick?: () => void;
}

const ActionBtn = ({
  text,
  type = "button",
  className,
  loading,
  ...props
}: ActionBtnProps) => {
  const btnClass = `cursor-pointer font-medium border-[0.5px] 2xl:border-[1px]  border-white text-white rounded-4 2xl:rounded-6  ${className}`;

  return (
    <button type={type} className={btnClass} {...props}>
      {loading ? <Loader className="animate-spin" /> : text}
    </button>
  );
};

export default ActionBtn;
