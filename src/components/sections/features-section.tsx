import { features } from "@/constants/landing-page.constants";

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4" id="features">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Powerful Features for Modern Authentication
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Everything you need to implement secure, scalable authentication in
          your applications
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-xl p-6 hover:bg-[#242424] transition-colors"
            >
              <div className="text-[#00B6F0] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              <ul className="mt-4 space-y-2">
                {feature.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#00B6F0]">✓</span>
                    <span className="text-gray-300">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 