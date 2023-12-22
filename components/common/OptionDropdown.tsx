"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuSettings2 } from "react-icons/lu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import useStore from "@/store/store";


export default function OptionDropdown() {
  const { currOrder, currGroup, setCurrOrder, setCurrGroup } = useStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center border rounded-md py-2 px-4">
        <LuSettings2 className="text-lg mr-3" />
        <span className="text-sm">Display</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-between items-center">
          <span className="mr-3 md:mr-5">Grouping</span>
          <Select value={currGroup} onValueChange={setCurrGroup}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="status">Status</SelectItem>
              <SelectItem value="user">User</SelectItem>
              <SelectItem
                value="priority"
                onClick={() => setCurrGroup("priority")}
              >
                Priority
              </SelectItem>
            </SelectContent>
          </Select>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="mr-3 md:mr-5">Ordering</span>
          <Select value={currOrder} onValueChange={setCurrOrder}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="priority">Priority</SelectItem>
            </SelectContent>
          </Select>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
