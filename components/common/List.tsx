"use client";
import useStore from "@/store/store";
import React, { useEffect } from "react";

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

  if (loading) {
    return <div className="min-h-[800px] w-full flex justify-center items-center">Loading...</div>;
  } else {
    return <div></div>;
  }
}
