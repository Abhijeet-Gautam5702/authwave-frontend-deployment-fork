import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pt-[120px] 2xl:pt-[160px] pb-50 2xl:pb-80 px-30 2xl:px-40">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-32 2xl:text-40 font-bold mb-16 2xl:mb-24">
          <span className="text-gradient">Simplify</span> Secure Authentication
        </h1>
        <p className="text-white/60 text-16 2xl:text-20 mb-30 2xl:mb-40">
          Enterprise-grade authentication and user management platform
        </p>
        <div className="flex justify-center">
          <Link
            href="/docs"
            className="bg-gradient text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            View Documentation
          </Link>
        </div>
      </div>
    </section>
  );
} 