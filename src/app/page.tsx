import LandingPageHeader from "@/components/headers/landing-page-header";
import LandingPageFooter from "@/components/footers/landing-page-footer";
import Hero from "@/components/sections/hero-section";
import Features from "@/components/sections/features-section";
import AuthMethods from "@/components/sections/auth-methods-section";
import Security from "@/components/sections/security-section";
import UserAndSessionManagement from "@/components/sections/user-and-session-management-section";

// Main landing page component
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-1 text-white scroll-smooth">
      {/* Header/Navigation */}
      <LandingPageHeader />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Security Section */}
      <Security />

      {/* Authentication Methods Section */}
      <AuthMethods />

      {/* User and Session Management Section */}
      <UserAndSessionManagement />


      {/* API Integration Section */}
      <section className="py-20 px-4 bg-[#1A1A1A]" id="api-integration">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Simple API Integration
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Integrate secure authentication into your applications with just a
            few lines of code
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {apiSteps.map((step, index) => (
              <div
                key={index}
                className="bg-[#0D0D0D] rounded-xl overflow-hidden"
              >
                <div className="p-4 bg-[#1A1A1A] border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="text-[#00B6F0]">{index + 1}</span>
                    {step.title}
                  </h3>
                  <pre className="text-sm overflow-x-auto bg-[#1A1A1A] p-4 rounded-lg">
                    <code className="text-gray-300">{step.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <LandingPageFooter />
    </div>
  );
}


const apiSteps = [
  {
    title: "Install AuthWave",
    code: `npm install @authwave/sdk\n# or\nyarn add @authwave/sdk`,
  },
  {
    title: "Initialize SDK",
    code: `import { AuthWave } from '@authwave/sdk';\n\nconst auth = new AuthWave({\n  projectId: 'your-project-id',\n  apiKey: 'your-api-key'\n});`,
  },
  {
    title: "Implement Authentication",
    code: `// Email/Password Login\nawait auth.signIn({\n  email,\n  password\n});\n\n// Magic Link\nawait auth.sendMagicLink({\n  email\n});\n\n// OTP Verification\nawait auth.verifyOTP({\n  email,\n  code\n});`,
  },
];
