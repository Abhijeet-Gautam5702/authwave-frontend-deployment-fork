interface ToggleSwitchProps {
  register: any;
  name: string;
  label: string;
  labelStyle?: string;
  disabled?: boolean;
}

const ToggleSwitch = ({
  register,
  name,
  label,
  labelStyle,
  disabled = false,
}: ToggleSwitchProps) => {
  return (
    <div className="flex flex-row justify-between items-center w-full gap-10 2xl:gap-20">
      <label
        className={`text-14 2xl:text-18 font-normal text-white ${labelStyle}`}
      >
        {label}
      </label>
      <label className={`relative inline-flex items-center cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
        <input type="checkbox" className="sr-only peer" {...register(name)} disabled={disabled} />
        <div className={`w-[44px] 2xl:w-[60px] h-[24px] 2xl:h-[32px] bg-bg-3 peer-focus:outline-none rounded-[12px] 2xl:rounded-[16px] peer peer-checked:after:translate-x-[20px] 2xl:peer-checked:after:translate-x-[28px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 2xl:after:top-[3px] after:left-[2px] 2xl:after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-[10px] 2xl:after:rounded-[14px] after:h-[20px] 2xl:after:h-[26px] after:w-[20px] 2xl:after:w-[26px] after:transition-all peer-checked:bg-p-accent ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
