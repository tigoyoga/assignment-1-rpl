/* eslint-disable react/display-name */
import React from "react";
import { ButtonProps } from "@/lib/types";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isLoading, children, variant, className, ...rest }, ref) => {
    return (
      <button
        {...rest}
        ref={ref}
        className={`${
          variant === "primary" &&
          "bg-primary text-white shadow-primary hover:bg-[#2c72cc]"
        } 
      ${
        variant === "transparent" &&
        "bg-transparent text-primary border-primary border-[1px] shadow-lg hover:bg-primary hover:text-white"
      }

      ${isLoading && "cursor-wait opacity-60"}
      w-fit rounded-full px-10 xl:px-12 py-2 xl:py-3 font-medium transition-all duration-200 ease-in-out ${className}`}
      >
        {children}
      </button>
    );
  }
);

export default Button;
