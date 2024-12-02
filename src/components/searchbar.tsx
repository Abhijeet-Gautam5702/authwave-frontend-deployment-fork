import { InputHTMLAttributes } from "react";
import { IoIosSearch } from "react-icons/io";

interface SearchbarProps {
  disabled?: boolean;
  props?: any;
  placeholder?: string;
  name: string;
  register: any;
  iconStyle?: string;
  inputStyle?: string;
  outerContainerStyle?: string;
}

const Searchbar = ({
  disabled = false,
  props,
  placeholder,
  register,
  name,
  iconStyle,
  inputStyle,
  outerContainerStyle,
}: SearchbarProps) => {
  return (
    <div
      className={`w-[350px] 2xl:w-[500px] flex flex-row justify-start items-center gap-10 2xl:gap-20 bg-bg-2 rounded-6 2xl:rounded-8 px-12 py-12 2xl:px-18 2xl:py-18 ${outerContainerStyle}`}
    >
      <IoIosSearch className={`${iconStyle} 2xl:w-[25px] 2xl:h-[25px]`} size={20} />
      <input
        id={name}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full font-extralight text-14 2xl:text-20 text-white placeholder:text-white/50 focus:outline-none focus:none disabled:text-white/30 disabled:cursor-not-allowed bg-transparent ${inputStyle}`}
        {...register(name)}
      />
    </div>
  );
};

export default Searchbar;
