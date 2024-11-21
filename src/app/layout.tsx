import { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import AuthProvider from "@/providers/auth.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth Wave",
  description: "Open source authentication service provider",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-bg-1 flex flex-col justify-start items-stretch min-h-screen">
        <AuthProvider>
          <Header />
          <main className="grow flex flex-col justify-center items-center text-white">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
