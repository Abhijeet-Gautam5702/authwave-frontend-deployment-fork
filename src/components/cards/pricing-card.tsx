import { Check } from "lucide-react";

const PricingCard = ({
  title,
  price,
  features,
  className,
}: {
  title: string;
  price: string;
  features: string[];
  className?: string;
}) => {
  return (
    <div
      className={`bg-bg-1 rounded-10 2xl:rounded-14 transition-colors duration-150 flex flex-col justify-start items-start gap-24 2xl:gap-28 p-20 2xl:p-30 ring-inset ring-1 ring-white/10 hover:ring-p-accent 2xl:ring-2 ${className}`}
    >
      <h3 className="text-center w-full text-18 2xl:text-24 font-semibold">
        {title}
      </h3>
      <p className="text-center w-full text-24 2xl:text-30 font-bold text-p-accent">
        {price}
      </p>
      <ul className="flex flex-col justify-start items-start gap-10 2xl:gap-14">
        {features.map((feature, index) => (
          <li
            key={index}
            className="text-white/60 text-16 2xl:text-18 flex items-center gap-6"
          >
            <Check className="text-p-accent w-5 h-5 2xl:w-6 2xl:h-6" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
