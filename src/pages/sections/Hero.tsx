import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section
      data-testid='hero-section'
      id='hero'
      className='py-32 md:py-20 pb-10 xl:pb-20'
    >
      <div className='min-h-[70vh] md:min-h-[50vh] xl:min-h-screen layout justify-center'>
        <div className='w-full md:w-[70%] xl:w-3/5 mx-auto flex flex-col space-y-10'>
          <div className='text-center flex flex-col items-center leading-tight space-y-6'>
            <h1 className='text-3xl md:text-5xl xl:text-6xl font-extrabold text-center'>
              Make your dream
              {/* <br />
              business goal come true */}
            </h1>
            <p className='text-[#777] text-base md:text-lg xl:text-xl'>
              when you need us for improve your business, then come with us to
              help your business have reach it, you just sit and feel that goal
            </p>
            <Button variant='primary'>Start Project</Button>
          </div>
          <div>
            <Image
              className='w-full scale-125 xl:scale-110 mx-auto hidden md:block'
              width={1109}
              height={752}
              alt='hero image'
              src={"/hero-img.png"}
            />
            <Image
              className='w-full block md:hidden'
              width={574}
              height={438}
              alt='hero image mobile'
              src={"/hero-img-mobile.png"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
