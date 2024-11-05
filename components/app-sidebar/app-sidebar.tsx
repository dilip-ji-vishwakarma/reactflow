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
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { BookText } from "lucide-react";
import { useRef, useState } from "react";
import { MenuMaker } from "./MenuMaker";
import { DropDownMenuItem } from "./DropDownMenuItem";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

type SubmenuItem = {
  title: string;
  url: string;
};

type SidebarItem = {
  title: string;
  active: boolean;
  submenu: SubmenuItem[];
};

const initialItems: SidebarItem[] = [
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
  const [items, setItems] = useState<SidebarItem[]>(initialItems);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string>("React.JS");

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const handleMenuClick = (title: string) => {
    setActiveItem(title);
    toggleSubmenu(title);
  };

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, draggedItem);
    setItems(updatedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Sidebar className="border-[#F9FBFD] pl-5 ">
        <SidebarContent className="bg-[#F9FBFD]">
          <SidebarGroup>
            <div className="fixed left-[26px]">
              <SidebarTrigger className=" text-black rounded-none" />
            </div>
            <SidebarGroupLabel className="text-[#444746] text-sm leading-5 flex justify-between p-0.5 py-8 items-center mt-10">
              <span>Document tabs</span>
              <MenuMaker />
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item, index) => (
                  <DraggableMenuItem
                    key={item.title}
                    index={index}
                    item={item}
                    moveItem={moveItem}
                    isActive={activeItem === item.title}
                    handleMenuClick={handleMenuClick}
                    isOpen={openSubmenu === item.title}
                  />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </DndProvider>
  );
}

function DraggableMenuItem({
  item,
  index,
  moveItem,
  isActive,
  handleMenuClick,
  isOpen,
}: {
  item: SidebarItem;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  isActive: boolean;
  handleMenuClick: (title: string) => void;
  isOpen: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "menu-item",
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "menu-item",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="draggable-menu-item"
    >
      <SidebarMenuItem className="space-y-2">
        <SidebarMenuButton
          asChild
          className={`bg-transparent border-transparent cursor-pointer py-5 rounded-[20px] font-semibold hover:bg-[#EBEDEE] ${isActive ? 'bg-[#D3E3FD] hover:bg-[#D3E3FD]' : ''}`}
          onClick={() => handleMenuClick(item.title)}
        >
          <span className="flex items-center gap-2.5 overflow-hidden text-ellipsis whitespace-nowrap m-0 border text-sm  rounded-[80px] border-none justify-between px-3">
            <span className="flex gap-3 items-center focus-visible:outline-none"><BookText width={18} hanging={18} /> {item.title}</span> 
            <span><DropDownMenuItem active={item.active}/></span>
          </span>
        </SidebarMenuButton>
        {item.submenu.length > 0 && (
          <div className={`transition-all duration-300 ease-in-out ml-3 ${isOpen ? "my-3" : "max-h-0 overflow-hidden"}`}>
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
    </div>
  );
}
