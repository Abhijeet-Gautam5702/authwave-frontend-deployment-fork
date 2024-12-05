import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import ActionBtn, { DangerActionBtn } from "../buttons/action-btn";
import Input from "../input";
import { IAccountFormData } from "@/app/(default)/account/page";

interface AccountSettingCardProps {
  title: string;
  cardClassName?: string;
  description?: string;
  buttonText: string;
  inputPlaceholder?: string;
  register: any;
  registerOptions?: RegisterOptions;
  inputName: string;
  inputType?: string;
  inputError?: string;
  buttonClick: () => void;
}

export const AccountSettingCard = ({
  title,
  description,
  cardClassName,
  buttonText,
  inputPlaceholder,
  buttonClick,
  register,
  registerOptions,
  inputName,
  inputType,
  inputError,
  ...props
}: AccountSettingCardProps) => {
  return (
    <section
      className={`bg-bg-2 w-full flex flex-col justify-between items-center 2xl:gap-30 gap-20 p-26 2xl:p-40 rounded-12 2xl:rounded-16 ${cardClassName}`}
    >
      {/* Setting title and input container */}
      <div className="w-full flex flex-row justify-between items-start gap-30 2xl:gap-40">
        {/* Title and Description */}
        <div className="w-1/2 flex flex-col justify-start items-start gap-0">
          <p className="text-20 2xl:text-24 font-medium">{title}</p>
          <p className="text-12 2xl:text-18 text-white/50">{description}</p>
        </div>

        {/* Input Component*/}
        <div className="w-1/2 flex flex-col justify-start items-start gap-10">
          <Input
            additionalStyle="text-14 2xl:text-18"
            widthStyle="w-full"
            label={title}
            labelStyle="text-14 2xl:text-18"
            placeholder={inputPlaceholder}
            register={register}
            registerOptions={registerOptions}
            name={inputName}
            type={inputType}
            error={inputError}
            {...props}
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full flex flex-row justify-end items-end gap-10">
        <ActionBtn
          text={buttonText}
          onClick={buttonClick}
          className="px-20 py-8 2xl:px-35 2xl:py-14 text-14 2xl:text-18 border-[0.5px] 2xl:border-[1px]  border-white text-white"
        />
      </div>
    </section>
  );
};

export const AccountSettingDangerCard = ({
  title,
  description,
  cardClassName,
  buttonText,
  buttonClick,
  ...props
}: Partial<AccountSettingCardProps>) => {
  return (
    <section
      className={`bg-bg-2 w-full flex flex-col justify-between items-center 2xl:gap-30 gap-20 p-26 2xl:p-40 rounded-12 2xl:rounded-16 border-l-4 border-danger-2 ${cardClassName}`}
    >
      {/* Setting title and input container */}
      <div className="w-full flex flex-row justify-between items-start gap-30 2xl:gap-40">
        {/* Title and Description */}
        <div className="w-2/3 flex flex-col justify-start items-start gap-0">
          <p className="text-20 2xl:text-24 font-medium">{title}</p>
          <p className="text-12 2xl:text-18 text-white/50">{description}</p>
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full flex flex-row justify-end items-end gap-10">
        {/* <DangerActionBtn
          text={buttonText!}
          className="px-20 py-8 2xl:px-35 2xl:py-14 text-14 2xl:text-18 border-[1px] 2xl:border-[2px] font-semibold border-danger-2 text-danger-2"
          onClick={buttonClick}
        /> */}
        <ActionBtn
          type="button"
          text={buttonText!}
          onClick={buttonClick}
          className="px-20 py-10 2xl:px-35 2xl:py-16 text-14 2xl:text-18 border-[0.5px] 2xl:border-[1px] border-danger-1 text-danger-1"
        />
      </div>
    </section>
  );
};
