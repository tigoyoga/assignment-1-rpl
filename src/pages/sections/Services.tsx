import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import ServiceCard from "@/components/card/ServiceCard";
import { services } from "@/lib/const";

export default function Services() {
  return (
    <section id='services' className='py-16 md:py-20'>
      <div className='layout flex flex-col lg:flex-row justify-between'>
        <div className='w-full lg:w-[40%] space-y-4 md:space-y-6 py-16 text-center lg:text-left'>
          <h6 className='text-primary font-semibold'>Our Services</h6>
          <h1 className='font-bold text-2xl md:text-4xl xl:text-5xl'>
            Perfect and Fast <br className='hidden lg:block' />
            Movement
          </h1>
          <p className='text-base md:text-xl lg:text-base xl:text-xl text-[#464646]'>
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>
          <p className='text-primary font-semibold text-left lg:text-right'>
            Read more <BiRightArrowAlt className='inline' />
          </p>
        </div>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 place-content-center gap-10 lg:gap-6 xl:gap-10 w-fit mx-auto'>
            {services.map((item) => (
              <ServiceCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
