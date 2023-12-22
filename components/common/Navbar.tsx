import React from "react";
import OptionDropdown from "./OptionDropdown";
import ThemeToggler from "./ThemeToggler";

export default function Navbar({ data }: any) {
  return (
    <div className="w-full flex justify-between items-center py-5 px-5 md:px-10 border-b">
      <OptionDropdown/>
      <ThemeToggler />
    </div>
  );
}
