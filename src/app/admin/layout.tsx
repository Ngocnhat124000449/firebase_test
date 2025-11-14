import { AdminNav } from "@/frontend/components/admin-nav";
import { SidebarProvider } from "@/frontend/components/ui/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
        <div className="flex min-h-screen">
          <AdminNav />
          <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-secondary/50">
            {children}
          </main>
        </div>
    </SidebarProvider>
  );
}
