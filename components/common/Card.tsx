"use client";

import { TicketType } from "@/types/PropTypes";
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import useStore from "@/store/store";

interface PropTypes {
  ticket: TicketType;
  userMap: Map<string, string>;
}

export default function Card({ ticket, userMap }: PropTypes) {
  const { currGroup } = useStore();

  return (
    <div className="p-5 rounded-md border dark:border-[#4a4a4a] bg-white dark:bg-[#161B22] shadow-sm flex flex-col items-start">
      <div className="flex justify-between items-center w-full">
        <p className="font-light text-gray-700 dark:text-gray-400">
          {ticket.id}
        </p>
        {currGroup !== "user" && (
          <Avatar className="w-5 h-5">
            <AvatarImage
              src={`https://api.dicebear.com/6.x/initials/svg/seed=${userMap.get(
                ticket.userId
              )}`}
              alt="avatar"
            />
          </Avatar>
        )}
      </div>
      <p className="font-medium my-3 text-sm lg:text-base">{ticket.title}</p>
      <div className="border rounded-sm flex items-center">
        <div className="w-3 h-3 mx-2 bg-gray-700 rounded-full" />
        <p className="font-light text-sm text-gray-700 pr-2 dark:text-gray-400">
          {ticket.tag[0]}
        </p>
      </div>
    </div>
  );
}
