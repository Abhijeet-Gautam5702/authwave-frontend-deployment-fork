import ActionBtn from "./buttons/action-btn";
import PrimaryBtn from "./buttons/primary-btn";
import RoleLabel from "./labels/role-label";

interface PageTitleProps {
  title: string;
  titleClassName?: string;
  outerClassName?: string;
  label?: string;
  labelClassName?: string;
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
        {label && <RoleLabel role={label} className={labelClassName} />}
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
