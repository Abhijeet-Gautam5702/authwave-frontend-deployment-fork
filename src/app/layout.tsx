import { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "@/components/footers/footer";
import Header from "@/components/headers/header";
import { Inter } from "next/font/google";
import StoreProvider from "@/providers/store-provider";

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
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
