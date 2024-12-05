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
  const btnClass = `cursor-pointer rounded-6 2xl:rounded-8 tracking-wider ${className}`;

  return (
    <button type={type} className={btnClass} {...props}>
      {loading ? <Loader className="animate-spin" /> : text}
    </button>
  );
};

export default ActionBtn;

/* --------- Danger Action Button --------- */

export const DangerActionBtn = ({
  text,
  className,
  loading,
  ...props
}: ActionBtnProps) => {
  return (
    <ActionBtn text={text} className={className} loading={loading} {...props} />
  );
};
