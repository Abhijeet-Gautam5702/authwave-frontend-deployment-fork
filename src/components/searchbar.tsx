import { IoIosSearch } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";

interface SearchbarProps {
  disabled?: boolean;
  props?: any;
  placeholder?: string;
  name: string;
  value: string;
  setSearchQuery: (value: string) => void;
  // register: any;
  iconStyle?: string;
  inputStyle?: string;
  outerContainerStyle?: string;
  actionIconStyle?: string;
  actionIconClick?: () => void;
}

const Searchbar = ({
  disabled = false,
  props,
  placeholder,
  value,
  setSearchQuery,
  // register,
  name,
  iconStyle,
  inputStyle,
  outerContainerStyle,
  actionIconStyle,
  actionIconClick,
}: SearchbarProps) => {
  return (
    <div
      className={`w-[350px] 2xl:w-[500px] flex flex-row justify-start items-center gap-10 2xl:gap-20 bg-bg-2 rounded-6 2xl:rounded-8 px-12 py-12 2xl:px-18 2xl:py-18 ${outerContainerStyle}`}
    >
      <IoIosSearch
        className={`${iconStyle} 2xl:w-[25px] 2xl:h-[25px] text-white/50`}
        size={20}
      />
      <input
        id={name}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full font-extralight text-14 2xl:text-20 text-white placeholder:text-white/50 focus:outline-none focus:none disabled:text-white/30 disabled:cursor-not-allowed bg-transparent ${inputStyle}`}
        value={value}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <div className="group relative">
        <span className="absolute w-[100px] left-1/2 -translate-x-1/2 px-10 py-4 bg-bg-3 text-white text-12 2xl:text-16 rounded-4 2xl:rounded-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bottom-full mb-2">
          Reset Search
        </span>
        <GrPowerReset
          className={`${actionIconStyle} 2xl:w-[20px] 2xl:h-[20px] cursor-pointer hover:scale-105 transition-transform duration-100`}
          size={16}
          onClick={actionIconClick}
        />
      </div>
    </div>
  );
};

export default Searchbar;
