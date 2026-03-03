import Sidebar from "@/components/layouts/Sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[url('/vector-home-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}