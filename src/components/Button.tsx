import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "transparent";
};

export default function Button({ children, variant }: ButtonProps) {
  return (
    <button
      className={`${
        variant === "primary" &&
        "bg-primary text-white shadow-primary hover:bg-[#2c72cc]"
      } 
      ${
        variant === "transparent" &&
        "bg-transparent text-primary border-primary border-[1px] shadow-lg hover:bg-primary hover:text-white"
      }
      w-fit rounded-full px-10 xl:px-12 py-2  xl:py-3 font-medium transition-all duration-200 ease-in-out`}
    >
      {children}
    </button>
  );
}
