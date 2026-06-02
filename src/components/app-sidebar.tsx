"use client";

import { Sidebar, SidebarContent } from "@tamor/ui/components/sidebar";
import { ScrollArea } from "@tamor/ui/components/scroll-area";
import { NavItem, NavMain } from "@/components/nav-main";
import {
  LayoutGrid,
  Activity,
  Radio,
  Shield,
  AlertTriangle,
  ScrollText,
  Bot,
  Settings,
} from "lucide-react";
import { NavFooter } from "./nav-footer";

export const navData: NavItem[] = [
  { label: "Observe", isSection: true },
  { title: "Dashboard", icon: LayoutGrid, href: "/" },
  { title: "Trajectories", icon: Activity, href: "#" },
  { title: "Live feed", icon: Radio, href: "#" },

  { label: "Govern", isSection: true },
  { title: "Policies", icon: Shield, href: "#" },
  { title: "Incidents", icon: AlertTriangle, href: "#" },
  { title: "Audit log", icon: ScrollText, href: "#" },

  { label: "Configure", isSection: true },
  { title: "Agents", icon: Bot, href: "#" },
  { title: "Settings", icon: Settings, href: "/settings/profile" },
];

export function AppSidebar({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  return (
    <Sidebar
      variant="inset"
      className="h-full [&_[data-slot=sidebar-inner]]:h-full"
    >
      <div className="flex flex-col gap-6 overflow-hidden">
        <SidebarContent className="mt-5 overflow-hidden">
          <ScrollArea className="h-[calc(100vh-100px)]">
            <div className="px-4">
              <NavMain items={navData} />
            </div>
          </ScrollArea>
        </SidebarContent>
        <NavFooter user={user} />
      </div>
    </Sidebar>
  );
}
