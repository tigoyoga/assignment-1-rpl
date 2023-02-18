import React from "react";
import Image from "next/image";

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
          <div className='flex flex-col md:w-80 lg:w-72 xl:w-80 md:h-72 lg:h-64 xl:h-72 gap-4 p-8 rounded-2xl shadow-[2px_8px_24px_2px_rgba(0,0,0,0.05)]'>
            <div className='flex gap-3'>
              <div className='p-2'>
                <Image
                  className='w-16 h-16 rounded-full'
                  height={80}
                  width={80}
                  alt='portfolio'
                  src={"/customer-1.png"}
                />
              </div>
              <div className='flex flex-col gap-1 justify-center'>
                <p className='text-xl text-primary font-semibold'>Angel Rose</p>
                <p className='text-xs text-[#464646] opacity-50'>
                  Creative Manager
                </p>
              </div>
            </div>
            <p className='text-lg text-[#464646] opacity-80'>
              There are many variations passages of Lorem Ipsum majority some by
              words which dont look .
            </p>
          </div>
          <div className='flex flex-col md:w-80 lg:w-72 xl:w-80 md:h-72 lg:h-64 xl:h-72 gap-4 p-8 rounded-2xl shadow-[2px_8px_24px_2px_rgba(0,0,0,0.05)]'>
            <div className='flex gap-3'>
              <div className='p-2'>
                <Image
                  className='w-16 h-16 rounded-full'
                  height={80}
                  width={80}
                  alt='portfolio'
                  src={"/customer-1.png"}
                />
              </div>
              <div className='flex flex-col gap-1 justify-center'>
                <p className='text-xl text-primary font-semibold'>Angel Rose</p>
                <p className='text-xs text-[#464646] opacity-50'>
                  Creative Manager
                </p>
              </div>
            </div>
            <p className='text-lg text-[#464646] opacity-80'>
              There are many variations passages of Lorem Ipsum majority some by
              words which dont look .
            </p>
          </div>
          <div className='flex flex-col md:w-80 lg:w-72 xl:w-80 md:h-72 lg:h-64 xl:h-72 gap-4 p-8 rounded-2xl shadow-[2px_8px_24px_2px_rgba(0,0,0,0.05)]'>
            <div className='flex gap-3'>
              <div className='p-2'>
                <Image
                  className='w-16 h-16 rounded-full'
                  height={80}
                  width={80}
                  alt='portfolio'
                  src={"/customer-1.png"}
                />
              </div>
              <div className='flex flex-col gap-1 justify-center'>
                <p className='text-xl text-primary font-semibold'>Angel Rose</p>
                <p className='text-xs text-[#464646] opacity-50'>
                  Creative Manager
                </p>
              </div>
            </div>
            <p className='text-lg text-[#464646] opacity-80'>
              There are many variations passages of Lorem Ipsum majority some by
              words which dont look .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
