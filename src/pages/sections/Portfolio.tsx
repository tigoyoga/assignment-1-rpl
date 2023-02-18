import React from "react";
import Button from "@/components/Button";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolio } from "@/lib/const";

export default function Portfolio() {
  return (
    <section id='projects' className='py-16 d:py-20'>
      <div className='layout flex flex-col gap-16 items-center'>
        <div className='flex flex-col gap-4 md:gap-6 items-center w-4/5 xl:w-1/2 text-center'>
          <h6 className='text-primary font-semibold'>Our Portfolio</h6>
          <h1 className='font-bold text-2xl md:text-4xl xl:text-5xl'>
            What do we do
          </h1>
          <p className='text-base md:text-xl text-[#464646]'>
            all projects that we have already done , proven can help to use more
            comfortable, then can used by client from our business
          </p>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center w-full gap-8'>
          {portfolio.map((item) => (
            <PortfolioCard key={item.id} image={item.image} />
          ))}
        </div>
        <Button variant='transparent'>See All Portfolio</Button>
      </div>
    </section>
  );
}
