import { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import StoreProvider from "@/providers/store-provider";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth Wave",
  description: "Open source authentication service provider",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-bg-1 flex flex-col justify-start items-stretch min-h-screen">
        <Toaster
          toastOptions={{
            duration: 1500,
          }}
        />
        <Analytics />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
