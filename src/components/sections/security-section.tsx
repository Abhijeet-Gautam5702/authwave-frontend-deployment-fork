import { Code, Database, Lock, Monitor, RefreshCw, Shield } from "lucide-react";
import SecurityFeatureCard from "@/components/cards/security-feature-card";

const Security = () => {
  return (
    <section
      className="w-full pt-100 pb-50 2xl:pt-60 min-h-screen flex-center bg-bg-1"
      id="security"
    >
      <div className="w-full flex-center flex-col text-center gap-50 2xl:gap-80">
        <div className="flex-center flex-col text-center gap-12 2xl:gap-18">
          <h2 className="font-bold text-40 2xl:text-70 leading-tight">
            <span className="text-gradient">Uncompromised Security</span> at
            Every Layer
          </h2>
          <p className="text-white/60 font-normal text-18 2xl:text-24 leading-normal mx-auto">
            Enterprise-grade security measures to protect your applications and
            users
          </p>
        </div>
        <div className="w-full grid grid-cols-3 grid-rows-2 gap-24 2xl:gap-35 px-24 2xl:px-50">
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
      "Automatic token rotation and revocation",
    ],
  },
  {
    icon: <Lock className="w-full h-full text-[#00B6F0]" />,
    title: "Password Protection",
    bullets: ["Bcrypt hashing", "Secure password reset flow with timeouts"],
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
    bullets: ["Unique project keys and IDs", "Key regeneration capabilities"],
  },
];
