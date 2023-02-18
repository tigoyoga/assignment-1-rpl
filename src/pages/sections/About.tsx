import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function About() {
  return (
    <section id='about' className='py-16 md:py-20'>
      <div className='layout text-center flex flex-col space-y-4 xl:space-y-6'>
        <h6 className='text-primary font-semibold'>About Us</h6>
        <h1 className='font-bold text-2xl md:text-4xl xl:text-5xl'>
          Our Teammate
        </h1>
        <div className='flex flex-col-reverse lg:flex-row gap-8'>
          <div className='w-full lg:w-[45%] xl:w-1/2'>
            <Image
              className='hidden md:block'
              width={949}
              height={644}
              alt='about us image'
              src={"/about-img.png"}
            />
            <Image
              className='block md:hidden'
              width={949}
              height={644}
              alt='about us image'
              src={"/about-img-mobile.png"}
            />
          </div>
          <div className='w-full lg:w-[55%] xl:w-1/2 flex flex-col items-center lg:items-start text-left py-4 xl:py-8 text-sm md:text-xl lg:text-base xl:text-xl text-[#464646] justify-between lg:justify-around min-h-[18rem]'>
            <p>
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <p>
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>

            <div className='space-x-4 md:space-x-8'>
              <Button variant='primary'>About Us</Button>
              <Button variant='transparent'>Our Story</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
