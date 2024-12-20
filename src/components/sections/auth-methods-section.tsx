import { Key, Mail, WandSparkles } from "lucide-react";
import AuthMethodCard from "../cards/auth-method-card";

const AuthMethods = () => {
  return (
    <section
      className="w-full py-70 pb-30 px-10 lg:px-0 min-h-screen flex-center bg-bg-2"
      id="authentication-methods"
    >
      <div className="w-full flex-center flex-col text-center gap-50 sm:gap-16 lg:gap-20 2xl:gap-80 px-4 sm:px-6 lg:px-8">
        <div className="flex-center flex-col text-center gap-12 sm:gap-8 lg:gap-14 2xl:gap-18">
          <h2 className="font-bold text-24 sm:text-30 lg:text-40 2xl:text-70 leading-tight">
            Multiple Authentication Methods
          </h2>
          <p className="text-white/60 font-normal text-14 sm:text-16 lg:text-18 2xl:text-24 leading-normal max-w-xl sm:max-w-2xl lg:max-w-3xl 2xl:max-w-4xl mx-auto">
            Choose from a variety of secure authentication options to match your
            application's needs
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 2xl:gap-35 px-4 sm:px-6 lg:px-8 2xl:px-50">
          {authMethods.map((method, index) => (
            <AuthMethodCard key={index} {...method} className="w-full h-full" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthMethods;

const authMethods = [
  {
    icon: <Mail className="w-full h-full" />,
    title: "Email/Password Login",
    bullets: [
      "Secure password hashing with Bcrypt",
      "Password strength enforcement",
      "Brute force protection",
    ],
  },
  {
    icon: <WandSparkles className="w-full h-full" />,
    title: "Magic URL",
    bullets: [
      "Passwordless authentication",
      "Time-limited secure links",
      "Single-use token system",
    ],
  },
  {
    icon: <Key className="w-full h-full" />,
    title: "OTP via Email",
    bullets: [
      "Time-based one-time passwords",
      "Secure code delivery",
      "Expiration handling",
    ],
  },
];
