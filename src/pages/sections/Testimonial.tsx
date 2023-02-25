import React from "react";
import TestimonialCard from "@/components/card/TestimonialCard";
import { testimonial } from "@/lib/const";

export default function Testimonial() {
  return (
    <section className='py-16 md:py-20'>
      <div className='layout flex flex-col gap-16 items-center'>
        <div className='flex flex-col gap-4 md:gap-6 items-center w-4/5 xl:w-1/2 text-center'>
          <h6 className='text-primary font-semibold'>Testimonial</h6>
          <h1 className='font-bold text-2xl md:text-4xl xl:text-5xl'>
            People Talk about us
          </h1>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center w-full'>
          {testimonial.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              position={item.position}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
