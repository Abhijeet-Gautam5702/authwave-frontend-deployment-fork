import Link from "next/link";
import PrimaryBtn from "../buttons/primary-btn";
import SecondaryBtn from "../buttons/secondary-btn";

export default function Hero() {
  return (
    <section className="w-full mt-12 2xl:mt-16 min-h-screen flex-center">
      <div className="w-full flex-center flex-col text-center gap-14 2xl:gap-20">
        {/* Title */}
        <h1 className="font-bold text-50 2xl:text-80 leading-tight">
          <span className="text-gradient">Simplify</span> Secure Authentication
          <p>for your applications</p>
        </h1>
        {/* Subtitle */}
        <p className="text-white/60 text-20 2xl:text-26 leading-normal max-w-3xl 2xl:max-w-4xl mx-auto">
          Write hundreds of lines of code for creating exceptional applications
          and{" "}
          <span className="italic font-semibold text-white px-6"> not </span> for
          setting up authentication
        </p>
        {/* Button */}
        <div className="w-full mt-8 2xl:mt-16 flex-center gap-20 2xl:gap-30">
          <PrimaryBtn
            text="Get started"
            href="/console"
            className="text-16 2xl:text-24 rounded-6 2xl:rounded-10 px-32 py-16 2xl:px-40 2xl:py-22"
          />
          <SecondaryBtn
            text="View Documentation"
            href="https://github.com/Auth-Wave/authwave-docs/wiki"
            openOnNewTab
            className="text-16 2xl:text-24 rounded-6 2xl:rounded-10 px-32 py-16 2xl:px-40 2xl:py-22 border-p-accent text-p-accent font-medium hover:bg-p-accent/10 transition-colors duration-150"
          />
        </div>
      </div>
    </section>
  );
}
