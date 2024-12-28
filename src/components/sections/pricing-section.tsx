const PricingSection = () => {
  return (
    <section
      className="w-full py-70 pb-30 px-10 lg:px-0 min-h-screen flex-center bg-bg-1"
      id="pricing"
    >
      <div className="w-full flex-center flex-col text-center gap-20 sm:gap-16 lg:gap-20 px-4 sm:px-6 lg:px-8">
        {/* NEW FEATURES COMING SOON LABEL */}
        <div className="flex-center flex-row gap-12 px-20  lg:px-30 py-8 sm:py-10  rounded-full bg-s-accent/15 ring-1 ring-s-accent/50">
          <p className="text-center text-14 md:text-14 lg:text-16  text-s-accent font-medium">
            New features coming soon
          </p>
        </div>
        {/* TITLE AND DESCRIPTION */}
        <div className="flex-center flex-col text-center gap-12 sm:gap-8 lg:gap-14 2xl:gap-18">
          <h2 className="font-bold text-30 lg:text-40 2xl:text-70 leading-tight">
            This MVP is{" "}
            <span className="text-gradient italic px-10">free to use</span> for
            everyone
          </h2>
          <p className="text-white/60 font-normal text-18 sm:text-16 lg:text-18 2xl:text-24 leading-normal max-w-xl sm:max-w-2xl lg:max-w-3xl 2xl:max-w-4xl mx-auto">
            We are working on more advanced features and will launch a paid plan
            of Auth Wave based on the demand.
          </p>
        </div>

        {/* ADD PLANS HERE */}
        <div className="w-full flex flex-col justify-start items-center gap-24 sm:gap-16 lg:gap-20 2xl:gap-35 px-4 sm:px-6 lg:px-8 2xl:px-50"></div>
      </div>
    </section>
  );
};

export default PricingSection;
