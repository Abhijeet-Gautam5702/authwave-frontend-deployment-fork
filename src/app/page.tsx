import LandingPageHeader from "@/components/headers/landing-page-header";
import LandingPageFooter from "@/components/footers/landing-page-footer";
import Hero from "@/components/sections/hero-section";
import Features from "@/components/sections/features-section";
import AuthMethods from "@/components/sections/auth-methods-section";
import Security from "@/components/sections/security-section";
import UserAndSessionManagement from "@/components/sections/user-and-session-management-section";
import UsageSection from "@/components/sections/usage-section";

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
      <UsageSection />

      {/* Footer */}
      <LandingPageFooter />
    </div>
  );
}

