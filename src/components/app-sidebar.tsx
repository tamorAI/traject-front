"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@tamor/ui/components/sidebar";
import { ScrollArea } from "@tamor/ui/components/scroll-area";
import Logo from "@/assets/logo.webp";
import { NavItem, NavMain } from "@/components/nav-main";
import {
  AlignStartVertical,
  PieChart,
  CircleUserRound,
  ClipboardList,
  Notebook,
  NotepadText,
  Table,
  Languages,
  Ticket,
  LayoutGrid,
  Settings,
} from "lucide-react";
import { NavFooter } from "./nav-footer";

export const navData: NavItem[] = [
  // Dashboards Section
  { label: "Dashboards", isSection: true },
  { title: "Overview", icon: LayoutGrid, href: "#" },

  // Pages Section
  { label: "Pages", isSection: true },
  { title: "Tables", icon: Table, href: "#" },
  { title: "Forms", icon: ClipboardList, href: "#" },
  { title: "User Profile", icon: CircleUserRound, href: "#" },

  // Apps Section
  { label: "Apps", isSection: true },
  { title: "Notes", icon: Notebook, href: "#" },
  { title: "Tickets", icon: Ticket, href: "#" },
  {
    title: "Blogs",
    icon: Languages,
    children: [
      { title: "Blog Post", href: "#" },
      { title: "Blog Detail", href: "#" },
      { title: "Blog Edit", href: "#" },
      { title: "Blog Create", href: "#" },
      { title: "Manage Blogs", href: "#" },
    ],
  },
  // Form Elements Section
  { label: "Form Elements", isSection: true },
  {
    title: "Shadcn Forms",
    icon: NotepadText,
    children: [
      { title: "Button", href: "#" },
      { title: "Input", href: "#" },
      { title: "Select", href: "#" },
      { title: "Checkbox", href: "#" },
      { title: "Radio", href: "#" },
    ],
  },
  {
    title: "Form layouts",
    icon: AlignStartVertical,
    children: [
      { title: "Forms Horizontal", href: "#" },
      { title: "Forms Vertical", href: "#" },
      { title: "Forms Validation", href: "#" },
      { title: "Forms Examples", href: "#" },
      { title: "Forms Wizard", href: "#" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings/profile",
  },
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
