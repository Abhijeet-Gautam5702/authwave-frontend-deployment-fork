"use client";

import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";

const CreateProjectPageHeader = () => {
  const router = useRouter();
  return (
    <header className="w-full px-100 py-12 2xl:px-200 2xl:py-20 bg-black text-white flex flex-row justify-between items-center">
      <p className="text-14 2xl:text-20 font-medium">CREATE NEW PROJECT</p>
      <IoMdClose
        className="text-18 2xl:text-24 cursor-pointer hover:text-red-500 transition-colors"
        onClick={() => {
          router.back();
        }}
      />
    </header>
  );
};

export default CreateProjectPageHeader;
