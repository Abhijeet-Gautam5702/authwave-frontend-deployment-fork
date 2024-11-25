import { UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import ActionBtn from "../buttons/action-btn";
import Input from "../input";
import { IAccountFormData } from "@/app/account/page";

interface AccountSettingCardProps {
  title: string;
  description?: string;
  buttonText: string;
  inputPlaceholder: string;
  register: UseFormRegister<Partial<IAccountFormData>>;
  inputName: keyof IAccountFormData;
  inputType?: string;
  buttonClick: () => void;
}

export const AccountSettingCard = ({
  title,
  description,
  buttonText,
  inputPlaceholder,
  buttonClick,
  register,
  inputName,
  inputType,
  ...props
}: AccountSettingCardProps) => {
  return (
    <section className="bg-bg-2 w-full flex flex-col justify-between items-center 2xl:gap-30 gap-20 p-26 2xl:p-40 rounded-12 2xl:rounded-16">
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
            name={inputName}
            type={inputType}
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full flex flex-row justify-end items-end gap-10">
        <ActionBtn
          text={buttonText}
          onClick={buttonClick}
          className="px-20 py-8 2xl:px-35 2xl:py-14 text-14 2xl:text-18"
        />
      </div>
    </section>
  );
};

export const AccountSettingDangerCard = () => {
  return <div>AccountSettingDangerCard</div>;
};
