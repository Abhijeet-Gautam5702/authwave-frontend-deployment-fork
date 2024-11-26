import CreateProjectPageHeader from "@/components/headers/create-project-page-header";

export default function CreatePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CreateProjectPageHeader />
      <main className="grow flex flex-col justify-center items-center text-white">
        {children}
      </main>
    </>
  );
}
