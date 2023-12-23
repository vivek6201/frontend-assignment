"use client";
import useStore from "@/store/store";
import React, { useEffect } from "react";
import Card from "./Card";
import { TicketType, UserType } from "@/types/PropTypes";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { sortFilteredArray } from "@/lib/utils";
import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";

export default function List() {
  const { currGroup, currOrder, data, setData, loading, setLoading } =
    useStore();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers`
      );
      const data = await res.json();
      setLoading(false);
      setData(data);
    };
    
    getData();
  }, []);

  const userMap = new Map();
  data?.users?.forEach((user: UserType) => {
    userMap.set(user.id, user.name);
  });

  const priorityMap = new Map([
    [0, "No Priority"],
    [1, "Low"],
    [2, "Medium"],
    [3, "High"],
    [4, "Urgent"],
  ]);

  const statusMap = new Map([
    [0, "Backlog"],
    [1, "Todo"],
    [2, "In progress"],
    [3, "Done"],
    [4, "Cancelled"],
  ]);

  if (loading) {
    return (
      <div className="min-h-[800px] w-full flex justify-center items-center">
        Loading...
      </div>
    );
  } else {
    return (
      <div className="px-5 py-5 md:p-10 grid gap-5 md:gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full bg-gray-100 dark:bg-black h-full">
        {currGroup === "priority"
          ? Array.from(priorityMap.values()).map(
              (priority: string, index: number) => {
                let filteredTickets: TicketType[] = data?.tickets?.filter(
                  (ticket: TicketType) => {
                    return ticket.priority === index;
                  }
                );
                filteredTickets = sortFilteredArray(filteredTickets, currOrder);

                return (
                  <div className="flex flex-col gap-5" key={index}>
                    <div className="flex justify-between items-center px-2">
                      <p key={index} className="text-sm xl:text-base">
                        {priority}{" "}
                        <span className="font-light font-sm mx-3 text-gray-600 dark:text-gray-400">
                          {filteredTickets?.length}
                        </span>
                      </p>
                      <div className="flex gap-2 items-center">
                        <GoPlus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <BsThreeDots className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-5">
                      {filteredTickets?.map((ticket: TicketType) => (
                        <Card
                          key={ticket.id}
                          ticket={ticket}
                          userMap={userMap}
                        />
                      ))}
                    </div>
                  </div>
                );
              }
            )
          : currGroup === "status"
          ? Array.from(statusMap.values()).map(
              (status: string, index: number) => {
                let filteredTickets: TicketType[] = data?.tickets?.filter(
                  (ticket: TicketType) => {
                    return ticket.status === status;
                  }
                );

                filteredTickets = sortFilteredArray(filteredTickets, currOrder);

                return (
                  <div className="flex flex-col gap-5" key={index}>
                    <div className="flex justify-between items-center px-2">
                      <p key={index} className="text-sm xl:text-base">
                        {status}{" "}
                        <span className="font-light font-sm mx-3 text-gray-600 dark:text-gray-400">
                          {filteredTickets?.length}
                        </span>
                      </p>
                      <div className="flex gap-2 items-center">
                        <GoPlus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <BsThreeDots className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-5">
                      {filteredTickets?.map((ticket: TicketType) => (
                        <Card
                          key={ticket.id}
                          ticket={ticket}
                          userMap={userMap}
                        />
                      ))}
                    </div>
                  </div>
                );
              }
            )
          : Array.from(userMap.keys()).map((userId: string, index: number) => {
              let filteredTickets: TicketType[] = data?.tickets?.filter(
                (ticket: TicketType) => {
                  return ticket.userId === userId;
                }
              );

              filteredTickets = sortFilteredArray(filteredTickets, currOrder);

              return (
                <div className="flex flex-col gap-5" key={index}>
                  <div className="flex justify-between items-center px-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-5 h-5">
                        <AvatarImage
                          src={`https://api.dicebear.com/6.x/initials/svg/seed=${userMap.get(
                            userId
                          )}`}
                          alt="avatar"
                        />
                      </Avatar>
                      <p
                        key={index}
                        className="font-medium text-sm xl:text-base"
                      >
                        {userMap.get(userId)}{" "}
                        <span className="font-light font-sm mx-2 text-gray-600 dark:text-gray-400">
                          {filteredTickets?.length}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <GoPlus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      <BsThreeDots className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    {filteredTickets?.map((ticket: TicketType) => (
                      <Card key={ticket.id} ticket={ticket} userMap={userMap} />
                    ))}
                  </div>
                </div>
              );
            })}
      </div>
    );
  }
}
