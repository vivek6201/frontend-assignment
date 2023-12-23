import { TicketType } from "@/types/PropTypes";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sortFilteredArray = (arr: TicketType[], orderType: string) => {
  if (orderType === "title") {
    arr = arr?.sort((a: any, b: any) => a.title.localeCompare(b.title));
  }

  if (orderType === "priority") {
    arr = arr?.sort((a: any, b: any) => b.priority - a.priority);
  }

  return arr;
};
