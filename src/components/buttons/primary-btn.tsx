import { Loader as LoaderIcon } from "lucide-react";
import Link from "next/link";

interface PrimaryBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  href?: string;
  openOnNewTab?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const PrimaryBtn = ({
  text,
  type = "button",
  className,
  href,
  openOnNewTab,
  loading,
  ...props
}: PrimaryBtnProps) => {
  const btnClass = `cursor-pointer rounded-4 2xl:rounded-8 bg-gradient-to-r from-p-accent to-s-accent text-white text-14 font-medium 2xl:text-20 px-20 py-10 2xl:px-35 2xl:py-18 ${className}`;

  // Return a redirection type button when href is provided
  if (href) {
    return (
      <Link href={href} target={openOnNewTab ? "_blank" : "_self"}>
        <button
          disabled={loading}
          className={`md:flex-center ${btnClass}`}
          {...props}
        >
          {loading ? <LoaderIcon /> : text}
        </button>
      </Link>
    );
  }

  // Return a clickable type button when no href is provided
  return (
    <button
      disabled={loading}
      type={type}
      className={`${btnClass} md:flex-center`}
      {...props}
    >
      {loading ? <LoaderIcon /> : text}
    </button>
  );
};

export default PrimaryBtn;
