import Link from "next/link";
import PrimaryBtn from "../buttons/primary-btn";
import SecondaryBtn from "../buttons/secondary-btn";
import { AUTHWAVE_DOCS_BASE_URL } from "@/constants";

export default function Hero() {
  return (
    <section className="w-full mt-12 px-10 2xl:mt-16 min-h-screen flex-center">
      <div className="w-full flex-center flex-col text-center gap-14 2xl:gap-20 px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="font-bold text-30 sm:text-40 md:text-50 2xl:text-80 leading-tight">
          <span className="text-gradient">Simplify</span> Secure Authentication
          <p>for your applications</p>
        </h1>
        {/* Subtitle */}
        <p className="text-white/60 text-16 sm:text-18 md:text-20 2xl:text-26 leading-normal max-w-xl sm:max-w-2xl md:max-w-3xl 2xl:max-w-4xl mx-auto">
          Write hundreds of lines of code to create exceptional apps <br />
          <span className="italic font-bold text-white px-6"> not </span> to
          set up authentication
        </p>
        {/* Button */}
        <div className="w-full mt-8 2xl:mt-16 flex-center gap-10 sm:gap-14 md:gap-20 2xl:gap-30">
          <PrimaryBtn
            text="Get started"
            href="/console"
            className="text-14 sm:text-16 md:text-18 2xl:text-24 rounded-6 2xl:rounded-10 px-20 sm:px-24 md:px-32 py-10 sm:py-12 md:py-16 2xl:px-40 2xl:py-22"
          />
          <SecondaryBtn
            text="View Documentation"
            href={AUTHWAVE_DOCS_BASE_URL}
            openOnNewTab
            className="text-14 sm:text-16 md:text-18 2xl:text-24 rounded-6 2xl:rounded-10 px-20 sm:px-24 md:px-32 py-10 sm:py-12 md:py-16 2xl:px-40 2xl:py-22 border-p-accent text-p-accent font-medium hover:bg-p-accent/10 transition-colors duration-150"
          />
        </div>
      </div>
    </section>
  );
}
