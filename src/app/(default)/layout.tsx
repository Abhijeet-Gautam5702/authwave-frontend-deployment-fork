import Header from "@/components/headers/header";
import Footer from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="grow min-h-screen flex flex-col justify-center items-center text-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
