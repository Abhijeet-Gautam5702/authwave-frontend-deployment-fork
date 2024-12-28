import { Code, Database, Lock, Monitor, RefreshCw, Shield } from "lucide-react";
import SecurityFeatureCard from "@/components/cards/security-feature-card";

const Security = () => {
  return (
    <section
      className="w-full py-70 pb-30 px-10 lg:px-0 min-h-screen flex-center bg-bg-1"
      id="security"
    >
      <div className="w-full flex-center flex-col text-center gap-12 sm:gap-16 lg:gap-20 2xl:gap-80 px-4 sm:px-6 lg:px-8">
        <div className="flex-center flex-col text-center gap-6 sm:gap-8 lg:gap-14 2xl:gap-18">
          <h2 className="font-bold text-24 sm:text-30 lg:text-40 2xl:text-70 leading-tight">
            <span className="text-gradient px-4">Uncompromised Security</span> at
            Every Layer
          </h2>
          <p className="text-white/60 font-normal text-14 sm:text-16 lg:text-18 2xl:text-24 leading-normal max-w-xl sm:max-w-2xl lg:max-w-3xl 2xl:max-w-4xl mx-auto">
            Enterprise-grade security measures to protect your applications and
            users
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 2xl:gap-35 px-4 sm:px-6 lg:px-8 2xl:px-50">
          {securityFeatures.map((feature, index) => (
            <SecurityFeatureCard
              key={index}
              {...feature}
              className="w-full h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;

const securityFeatures = [
  {
    icon: <Shield className="w-full h-full text-[#00B6F0]" />,
    title: "Token Security",
    bullets: [
      "JWT-based access/refresh tokens",
    ],
  },
  {
    icon: <Lock className="w-full h-full text-[#00B6F0]" />,
    title: "Password Protection",
    bullets: ["Bcrypt hashing", "Secure password reset flow"],
  },
  {
    icon: <RefreshCw className="w-full h-full text-[#00B6F0]" />,
    title: "Rate Limiting",
    bullets: [
      "IP and user-agent based request tracking",
      "Customizable rate limits per endpoint",
    ],
  },
  {
    icon: <Monitor className="w-full h-full text-[#00B6F0]" />,
    title: "Session Control",
    bullets: [
      "Device-based session management",
      "One-click session revocation",
    ],
  },
  {
    icon: <Database className="w-full h-full text-[#00B6F0]" />,
    title: "Data Protection",
    bullets: [
      "MongoDB security best practices",
      "Input sanitization and encryption",
    ],
  },
  {
    icon: <Code className="w-full h-full text-[#00B6F0]" />,
    title: "API Security",
    bullets: ["Unique project keys and IDs", "Secure Project Key regeneration"],
  },
];
