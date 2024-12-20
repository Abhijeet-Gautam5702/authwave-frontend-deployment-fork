import toast from "react-hot-toast";
import React from "react";
import { IconType } from "react-icons";

export interface IToast {
  message: string;
  delay: number;
  icon?: IconType;
  iconStyle?: string;
}

export const useToast = ({ message, delay, icon: Icon, iconStyle }: IToast) => {
  setTimeout(() => {
    toast.custom((t) => (
      <div
        className={`bg-bg-2 px-20 py-12 shadow-md rounded-8 text-white text-center text-14 md:text-16 2xl:text-18 border-[1.5px] border-p-accent border-solid font-light flex flex-row justify-start items-center gap-10 ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        {Icon && (
          <Icon
            size={17}
            className={` w-[17px] h-[17px] md:w-[20px] md:h-[20px] ${iconStyle}`}
          />
        )}
        {message}
      </div>
    ));
  }, delay);
};
