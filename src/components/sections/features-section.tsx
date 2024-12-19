import { Mail, Users, Grid, Shield, LayoutDashboard, Key } from "lucide-react";
import FeatureCard from "../cards/feature-card";

export default function Features() {
  return (
    <section
      className="w-full py-70 pb-30 px-10 lg:px-0 min-h-screen flex-center bg-bg-2"
      id="features"
    >
      <div className="w-full flex-center flex-col text-center gap-12 sm:gap-16 lg:gap-20 2xl:gap-80 px-4 sm:px-6 lg:px-8">
        <div className="flex-center flex-col text-center gap-6 sm:gap-8 lg:gap-10 2xl:gap-18">
          <h2 className="font-bold text-24 sm:text-30 lg:text-40 2xl:text-70 leading-tight">
            <span className="text-gradient">Powerful Features</span> for Modern
            Authentication
          </h2>
          <p className="text-white/60 font-normal text-14 sm:text-16 lg:text-18 2xl:text-24 leading-normal max-w-xl sm:max-w-2xl lg:max-w-3xl 2xl:max-w-4xl mx-auto">
            Everything you need to implement secure, scalable authentication in
            your applications
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 2xl:gap-35 px-4 sm:px-6 lg:px-8 2xl:px-50">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} className="w-full h-full" />
          ))}
        </div>
      </div>
    </section>
  );
}

export const features = [
  {
    icon: <Mail className="w-full h-full text-p-accent" />,
    title: "Multiple Authentication Methods",
    description:
      "Flexible login options including email/password, Magic URL, and OTP via email.",
    bullets: [
      "Email/Password Login",
      "Passwordless Authentication",
      "OTP via Email",
    ],
  },
  {
    icon: <Users className="w-full h-full text-p-accent" />,
    title: "Advanced User Management",
    description:
      "Comprehensive tools for user registration, verification, and account security.",
    bullets: [
      "Easy Registration Flow",
      "Email Verification",
      "Account Protection",
    ],
  },
  {
    icon: <Grid className="w-full h-full text-p-accent" />,
    title: "Multi-Project Support",
    description:
      "Manage multiple applications with project-specific settings and configurations.",
    bullets: [
      "Custom Email Templates",
      "Project-Level Limits",
      "Individual Configurations",
    ],
  },
  {
    icon: <Shield className="w-full h-full text-p-accent" />,
    title: "Security Logging & Analysis",
    description:
      "Comprehensive tracking and analysis of all security-related activities.",
    bullets: [
      "Real-time Activity Tracking",
      "Failed Attempt Monitoring",
      "Security Event Logging",
    ],
  },
  {
    icon: <LayoutDashboard className="w-full h-full text-p-accent" />,
    title: "Powerful Admin Dashboard",
    description:
      "Centralized control panel for project management and monitoring.",
    bullets: [
      "Project Management",
      "User Activity Monitoring",
      "Security Log Analysis",
    ],
  },
  {
    icon: <Key className="w-full h-full text-p-accent" />,
    title: "API Security",
    description: "Robust API security measures for safe and controlled access.",
    bullets: ["Unique Project Keys", "Key Regeneration", "Access Control"],
  },
];
