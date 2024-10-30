"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { BookText, Plus } from "lucide-react";
import { useState } from "react";

type SubmenuItem = {
  title: string;
  url: string;
};

// Define the type for sidebar items
type SidebarItem = {
  title: string;
  submenu: SubmenuItem[];
};

const items: SidebarItem[] = [
  {
    title: "React.JS",
    submenu: [
      { title: "Components", url: "#components" },
      { title: "Hooks", url: "#hooks" },
    ],
  },
  {
    title: "Calendar",
    submenu: [
      { title: "Events", url: "#events" },
      { title: "Reminders", url: "#reminders" },
    ],
  },
  {
    title: "Search",
    submenu: [],
  },
  {
    title: "Settings",
    submenu: [
      { title: "Profile", url: "#profile" },
      { title: "Security", url: "#security" },
    ],
  },
];

export function AppSidebar() {
  // State to track open submenus
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    // Toggle the submenu for the clicked item
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <Sidebar className="border-[#F9FBFD]">
      <SidebarContent className="bg-[#F9FBFD]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#444746] text-sm leading-5 flex justify-between pr-0 py-8 items-center">
            <span>Document tabs</span>
            <AlertDialog>
              <AlertDialogTrigger><span className="cursor-pointer"><Plus width={18} height={18} /></span></AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isOpen = openSubmenu === item.title;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="bg-transparent border-transparent cursor-pointer" // No URL, so remove link styling
                      onClick={() => toggleSubmenu(item.title)} // Toggle submenu on click
                    >
                      <span className={`flex items-center gap-2.5 overflow-hidden text-ellipsis whitespace-nowrap m-0 border text-sm font-medium p-0.5 rounded-sm border-none`}>
                        <BookText width={18} hanging={18} /> {item.title}
                      </span>
                    </SidebarMenuButton>
                    {/* Render submenu with animation */}
                    {item.submenu.length > 0 && (
                      <div
                        className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-40" : "max-h-0 overflow-hidden"}`} // Animate max height
                      >
                        <SidebarMenu>
                          {item.submenu.map((subItem, index) => (
                            <SidebarMenuItem key={subItem.title}>
                              <SidebarMenuButton asChild>
                                <a href={subItem.url}>
                                  <span>{`${index + 1}. ${subItem.title}`}</span> {/* Display number before title */}
                                </a>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </div>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
