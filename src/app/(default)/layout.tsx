"use client";

import Header from "@/components/headers/header";
import Footer from "@/components/footers/footer";
import { UniversalLoader } from "@/components/loaders/universal-loader";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="grow flex flex-col justify-center items-center text-white">
        <UniversalLoader />
        {children}
      </main>
      <Footer />
    </>
  );
}
