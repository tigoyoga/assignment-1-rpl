import React from "react";
import Image from "next/image";
import { PortoProps } from "@/lib/types";

export default function PortfolioCard({ key, image }: PortoProps) {
  return (
    <>
      <Image
        key={key}
        className='w-72 lg:w-64 xl:w-80 hover:scale-105 transition-all duration-300 ease-in-out'
        height={525}
        width={525}
        alt='portfolio'
        src={image}
      />
    </>
  );
}
