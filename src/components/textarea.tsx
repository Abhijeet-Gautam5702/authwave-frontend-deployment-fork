"use client";

import { TextareaHTMLAttributes } from "react";
import { RegisterOptions } from "react-hook-form";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelStyle?: string;
  subText?: string;
  subTextStyle?: string;
  additionalStyle?: string;
  widthStyle?: string;
  name: any;
  register: any;
  registerOptions?: RegisterOptions;
  error?: string;
}

const Textarea = ({
  label,
  labelStyle,
  subText,
  subTextStyle,
  disabled = false,
  placeholder,
  widthStyle = "w-[350px] 2xl:w-[500px]",
  additionalStyle = "",
  register,
  registerOptions,
  name,
  error,
  ...props
}: TextareaProps) => {
  return (
    <div
      className={`${widthStyle} flex flex-col items-start gap-8 2xl:gap-12 transition-all duration-300`}
    >
      <div className="w-full flex flex-col justify-start items-start 2xl:gap-2">
        {label && (
          <label htmlFor={name} className={`text-white ${labelStyle}`}>
            {label}
          </label>
        )}
        {subText && (
          <p className={`text-white/50 ${subTextStyle}`}>{subText}</p>
        )}
      </div>
      <div className="w-full flex flex-row justify-start items-center gap-12 2xl:gap-20">
        <textarea
          id={name}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full h-[300px] font-extralight text-14 2xl:text-20 text-white placeholder:text-white/50 rounded-4 2xl:rounded-8 px-20 py-12 2xl:px-35 2xl:py-18 border-[0.5px] 2xl:border-[1px] border-white/50 focus:outline-none focus:none disabled:text-white/30 disabled:cursor-not-allowed bg-transparent ${additionalStyle}`}
          {...register(name, registerOptions)}
          {...props}
        />
      </div>
      {/* Error Message */}
      {error && (
        <span className="w-full bg-danger-2/10 text-12 2xl:text-18 self-start text-danger-1/70 font-normal rounded-8 2xl:rounded-12 p-12 2xl:p-18 transition-all duration-300 tracking-wider">
          {error}
        </span>
      )}
    </div>
  );
};

export default Textarea;
