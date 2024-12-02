"use client";
  
import Header from "@/components/headers/header";
import Footer from "@/components/footer";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Loader } from "@/components/loader";
import { MdOutlineChildFriendly } from "react-icons/md";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useSelector((state: RootState) => state.loader);

  return (
    <>
      <Header />
      <main className="grow flex flex-col justify-center items-center text-white">
        <Loader/>
        {children}
      </main>
      <Footer />
    </>
  );
}
