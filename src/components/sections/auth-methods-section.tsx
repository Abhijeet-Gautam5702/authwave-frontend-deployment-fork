import { Key, Mail, Pen, WandSparkles } from "lucide-react";
import AuthMethodCard from "../cards/auth-method-card";

const AuthMethods = () => {
  return (
    <section
      className="w-full pt-100 pb-50 2xl:pt-60 min-h-screen flex-center bg-bg-2"
      id="authentication-methods"
    >
      <div className="w-full flex-center flex-col text-center gap-50 2xl:gap-80">
        <div className="flex-center flex-col text-center gap-12 2xl:gap-18">
          <h2 className="font-bold text-40 2xl:text-70 leading-tight">
            Multiple Authentication Methods
          </h2>
          <p className="text-white/60 font-normal text-18 2xl:text-24 leading-normal mx-auto">
            Choose from a variety of secure authentication options to match your
            application's needs
          </p>
        </div>
        <div className="w-full grid grid-cols-3 grid-rows-1 gap-24 2xl:gap-35 px-24 2xl:px-50">
          {authMethods.map((method, index) => (
            <AuthMethodCard key={index} {...method} className="w-full h-full" />
          ))}
        </div>
        <div className="w-full grid grid-cols-3 grid-rows-1 gap-24 2xl:gap-35 px-24 2xl:px-50"></div>
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
