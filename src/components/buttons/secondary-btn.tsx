import { Loader as LoaderIcon } from "lucide-react";
import Link from "next/link";

interface SecondaryBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  href?: string;
  openOnNewTab?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const SecondaryBtn = ({
  text,
  type = "button",
  className,
  href,
  openOnNewTab,
  loading,
  ...props
}: SecondaryBtnProps) => {
  const btnClass = `cursor-pointer rounded-4 2xl:rounded-8 border-[0.5px] 2xl:border-[1px] text-14 2xl:text-20 px-20 py-10 2xl:px-35 2xl:py-18 ${className}`;

  // Return a redirection type button when href is provided
  if (href) {
    return (
      <Link href={href} target={openOnNewTab ? "_blank" : "_self"}>
        <button
          disabled={loading}
          className={`flex-center ${btnClass}`}
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
      className={` flex-center ${btnClass}`}
      {...props}
    >
      {loading ? <LoaderIcon /> : text}
    </button>
  );
};

export default SecondaryBtn;
