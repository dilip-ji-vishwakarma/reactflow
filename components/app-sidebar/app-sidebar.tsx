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

import { BookText } from "lucide-react";
import { useState } from "react";
import { MenuMaker } from "./MenuMaker";
import { DropDownMenuItem } from "./DropDownMenuItem";

type SubmenuItem = {
  title: string;
  url: string;
};

type SidebarItem = {
  title: string;
  active: boolean;
  submenu: SubmenuItem[];
};

const items: SidebarItem[] = [
  {
    title: "React.JS",
    active: true,
    submenu: [
      { title: "Components", url: "#components" },
      { title: "Hooks", url: "#hooks" },
    ],
    
  },
  {
    title: "Calendar",
    active: false,
    submenu: [
      { title: "Events", url: "#events" },
      { title: "Reminders", url: "#reminders" },
    ],
  },
  {
    title: "Search",
    active: false,
    submenu: [],
  },
  {
    title: "Settings",
    active: false,
    submenu: [
      { title: "Profile", url: "#profile" },
      { title: "Security", url: "#security" },
    ],
  },
];

export function AppSidebar() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string>("React.JS"); // Set default active item

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const handleMenuClick = (title: string) => {
    setActiveItem(title); // Update active item state
    toggleSubmenu(title);
  };

  return (
    <Sidebar className="border-[#F9FBFD]">
      <SidebarContent className="bg-[#F9FBFD]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#444746] text-sm leading-5 flex justify-between p-0.5 py-8 items-center">
            <span>Document tabs</span>
            <MenuMaker />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isOpen = openSubmenu === item.title;

                return (
                  <SidebarMenuItem key={item.title} >
                    <SidebarMenuButton
                      asChild
                      className={`bg-transparent border-transparent cursor-pointer py-5 rounded-[20px] font-semibold hover:bg-[#EBEDEE] ${activeItem === item.title ? 'bg-[#D3E3FD] hover:bg-[#D3E3FD]' : ''}`} // Highlight active item
                      onClick={() => handleMenuClick(item.title)}
                    >
                      <span className={`flex items-center gap-2.5 overflow-hidden text-ellipsis whitespace-nowrap m-0 border text-sm font-medium rounded-sm border-none justify-between`}>
                        <span className="flex gap-3 items-center focus-visible:outline-none"><BookText width={18} hanging={18} /> {item.title}</span> 
                        <span><DropDownMenuItem active={item.active}/></span>
                      </span>
                    </SidebarMenuButton>
                    {item.submenu.length > 0 && (
                      <div
                        className={`transition-all duration-300 ease-in-out ml-3  ${isOpen ? "my-3 " : "max-h-0 overflow-hidden"}`}
                      >
                        <SidebarMenu>
                          {item.submenu.map((subItem, index) => (
                            <SidebarMenuItem key={subItem.title}>
                              <SidebarMenuButton asChild>
                                <a href={subItem.url}>
                                  <span>{`${index + 1}. ${subItem.title}`}</span>
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
