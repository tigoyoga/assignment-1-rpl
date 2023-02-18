import React from "react";
import Image from "next/image";
import { TestimonialProps } from "@/lib/types";

export default function TestimonialCard({
  name,
  position,
  image,
  description,
}: TestimonialProps) {
  return (
    <div className='flex flex-col md:w-80 lg:w-72 xl:w-80 md:h-72 lg:h-64 xl:h-72 gap-4 p-8 rounded-2xl shadow-[2px_8px_24px_2px_rgba(0,0,0,0.05)]'>
      <div className='flex gap-3'>
        <div className='p-2'>
          <Image
            className='w-16 h-16 rounded-full'
            height={80}
            width={80}
            alt='portfolio'
            src={image}
          />
        </div>
        <div className='flex flex-col gap-1 justify-center'>
          <p className='text-xl text-primary font-semibold'>{name}</p>
          <p className='text-xs text-[#464646] opacity-50'>{position}</p>
        </div>
      </div>
      <p className='text-lg text-[#464646] opacity-80'>{description}</p>
    </div>
  );
}
