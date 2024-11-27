"use client";

import { IAccountFormData } from "@/app/(default)/account/page";
import { InputHTMLAttributes, useEffect, useState } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelStyle?: string;
  subText?: string;
  subTextStyle?: string;
  additionalStyle?: string;
  widthStyle?: string;
  type?: string;
  name: any;
  register: any;
  registerOptions?: RegisterOptions;
  error?: string; // For handling errors from React-Hook-Form
}

const Input = ({
  label,
  labelStyle,
  subText,
  subTextStyle,
  disabled = false,
  placeholder,
  widthStyle = "w-[350px] 2xl:w-[500px]",
  additionalStyle = "",
  type = "text",
  register,
  registerOptions,
  name,
  error,
  ...props
}: InputProps) => {
  return (
    <div
      className={`${widthStyle} flex flex-col items-start gap-8 2xl:gap-12 transition-all duration-300`}
    >
      <div className="w-full flex flex-col justify-start items-start 2xl:gap-2">
        {label && <label className={`text-white ${labelStyle}`}>{label}</label>}
        {subText && (
          <p className={`text-white/50 ${subTextStyle}`}>{subText}</p>
        )}
      </div>
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full font-extralight text-14 2xl:text-20 text-white placeholder:text-white/50 rounded-4 2xl:rounded-8 px-20 py-12 2xl:px-35 2xl:py-18 border-[0.5px] 2xl:border-[1px] border-white/50 focus:outline-none focus:none disabled:bg-gray-100 disabled:cursor-not-allowed bg-transparent ${
          type === "number"
            ? "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            : ""
        } ${additionalStyle}`}
        {...register(name, registerOptions)}
        {...props}
      />
      {/* Error Message */}
      {error && (
        <span className="w-full bg-danger-2/10 text-12 2xl:text-18 self-start text-danger-1/60 font-medium rounded-8 2xl:rounded-12 p-12 2xl:p-18 transition-all duration-300 tracking-wider">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
