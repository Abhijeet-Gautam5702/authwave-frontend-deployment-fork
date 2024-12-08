import PricingCard from "@/components/cards/pricing-card";

const PricingSection = () => {
  return (
    <section
      className="w-full 2xl:pt-60 min-h-screen flex-center bg-bg-1"
      id="pricing"
    >
      <div className="w-full flex-center flex-col text-center gap-20 2xl:gap-35">
        {/* NEW FEATURES COMING SOON LABEL */}
        <div className="flex-center flex-row gap-12 px-20 2xl:px-30 py-8 2xl:py-12 rounded-full bg-s-accent/15 ring-1 ring-s-accent/50">
          <p className="text-center text-14 2xl:text-18 text-s-accent font-medium">
            New features coming soon
          </p>
        </div>
        {/* TITLE AND DESCRIPTION */}
        <div className="flex-center flex-col text-center gap-12 2xl:gap-24">
          <h2 className="font-bold text-40 2xl:text-70 leading-tight">
            This MVP is{" "}
            <span className="text-gradient italic px-10">free to use</span> for
            everyone
          </h2>
          <p className="text-white/60 font-normal text-20 2xl:text-28 max-w-4xl 2xl:max-w-5xl leading-normal mx-auto">
            We are working on more advanced features and will launch a paid plan
            of Auth Wave based on the demand.
          </p>
        </div>

        {/* ADD PLANS HERE */}
        <div className="w-full flex flex-col justify-start items-center gap-24 2xl:gap-35 px-24 2xl:px-50"></div>
      </div>
    </section>
  );
};

export default PricingSection;

// PRICING TO BE ADDED LATER
const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    features: ["Basic feature set", "Community support", "Limited API calls"],
  },
  {
    title: "Pro",
    price: "$49/month",
    features: [
      "Advanced feature set",
      "Priority support",
      "Unlimited API calls",
    ],
  },
  {
    title: "Enterprise",
    price: "Contact us",
    features: ["All features", "Dedicated support", "Custom API limits"],
  },
];
