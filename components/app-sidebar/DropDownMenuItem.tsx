import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from 'lucide-react';

type DropDownMenuItemProps = {
    active: boolean;
}


export const DropDownMenuItem = ({active}:DropDownMenuItemProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><span className={`w-[30px] h-[30px] flex justify-center items-center text-center  rounded-[50%] ${active ? "hover:bg-[#B4C9EC]" : "hover:bg-[#DDDFE1]"}`}><EllipsisVertical width={16} height={16}/></span> </DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuLabel>Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Add SubTab</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Rename</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
