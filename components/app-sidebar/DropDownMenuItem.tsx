"use client"
import React, { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from 'lucide-react';

type DropDownMenuItemProps = {
    active: boolean;
};

export const DropDownMenuItem = ({ active }: DropDownMenuItemProps) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleAddSubTabClick = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <span className={`w-[30px] h-[30px] flex justify-center items-center text-center rounded-[50%] ${active ? "hover:bg-[#B4C9EC]" : "hover:bg-[#DDDFE1]"}`}>
                        <EllipsisVertical width={16} height={16} />
                    </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleAddSubTabClick}>Add SubTab</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add a New SubTab</DialogTitle>
                        <DialogDescription>Enter details for the new subtab below.</DialogDescription>
                    </DialogHeader>
                    {/* Your input fields for subtab details go here */}
                    <DialogFooter>
                        <Button onClick={handleCloseDialog}>Cancel</Button>
                        <Button  onClick={handleCloseDialog}>Add SubTab</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};
