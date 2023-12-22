"use client";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

export default function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      {resolvedTheme === "dark" ? (
        <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
          <MdOutlineWbSunny className="text-xl text-white" />
        </Button>
      ) : (
        <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
          <FaRegMoon className="text-xl text-black" />
        </Button>
      )}
    </>
  );
}
