import React from "react";
import { ServiceProps } from "@/lib/types";

const ServiceCard = ({ icon: Icon, title, color }: ServiceProps) => {
  return (
    <div className='p-2 w-[200px] h-[220px] rounded-3xl border-service shadow-none hover:shadow-[4px_4px_30px_0_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-8'>
      <div
        className={`${color} w-20 h-20 rounded-full flex items-center justify-center`}
      >
        <Icon className='text-white text-4xl' />
      </div>
      <p className='font-bold lg:text-xl xl:text-[22px] leading-[30px] text-center'>
        {title}
      </p>
    </div>
  );
};

export default ServiceCard;
