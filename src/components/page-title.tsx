import ActionBtn from "./buttons/action-btn";
import PrimaryBtn from "./buttons/primary-btn";
import RoleLabel from "./labels/role-label";
import { FiCopy } from "react-icons/fi";

interface PageTitleProps {
  title: string;
  titleClassName?: string;
  outerClassName?: string;
  label?: string;
  labelClassName?: string;
  copy?: boolean;
  buttonText?: string;
  buttonClassName?: string;
  buttonClick?: () => void;
}

const PageTitle = ({
  title,
  titleClassName,
  outerClassName,
  label,
  labelClassName,
  copy = false,
  buttonText,
  buttonClassName,
  buttonClick,
}: PageTitleProps) => {
  return (
    <div
      className={` w-full flex flex-row justify-between items-center ${outerClassName}`}
    >
      <div className="flex flex-row justify-start items-center 2xl:gap-20 gap-10 p-0">
        <h1 className={`font-medium ${titleClassName}`}>{title}</h1>
        {label && (
          <RoleLabel role={label} className={labelClassName} basic={copy} />
        )}
        {copy && (
          <div className="group relative flex-center">
            <FiCopy
              className="cursor-pointer text-white/50 hover:text-white transition-colors duration-100 h-[18px] w-[18px] 2xl:h-[24px] 2xl:w-[24px]"
              onClick={() => navigator.clipboard.writeText(label as string)}
            />
            <span className="w-[100px] mt-2 absolute left-1/2 -translate-x-1/2 px-10 py-4 bg-bg-3 text-white text-12 2xl:text-16 rounded-4 2xl:rounded-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Copy User ID
            </span>
          </div>
        )}
      </div>
      {buttonText && (
        <ActionBtn
          text={buttonText}
          className={buttonClassName}
          onClick={buttonClick}
        />
      )}
    </div>
  );
};

export default PageTitle;
