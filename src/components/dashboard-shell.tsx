"use client";

import { SidebarInset, SidebarProvider } from "@tamor/ui/components/sidebar";
import { AppSidebar } from "./app-sidebar";

export function DashboardShell({
  user,
  children,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar user={user} />

      <SidebarInset>
        <main className="flex-1 p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
