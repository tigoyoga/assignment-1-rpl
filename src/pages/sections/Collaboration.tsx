import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

export default function Collaboration() {
  return (
    <section className='py-20 pb-24'>
      <div className='layout flex flex-col-reverse lg:flex-row gap-16 lg:gap-32'>
        <div className='w-full lg:w-[45%] space-y-4 flex flex-col flex-start items-center lg:items-start justify-center'>
          <h1 className='font-bold text-2xl md:text-4xl xl:text-5xl leading-loose text-center lg:text-left'>
            Interesting <br className='hidden lg:block' />
            Collaboration
            <br />
            With Us?
          </h1>
          <p className='md:text-xl text-base xl:text-xl text-[#464646]'>
            Help you to reach your business goal
          </p>
          <Button variant='primary'>Get Started</Button>
        </div>
        <div className='w-full lg:w-[55%]'>
          <Image
            className='w-[70%] lg:w-full mx-auto hidden md:block'
            width={909}
            height={569}
            alt='collaboration'
            src={"/collaboration.png"}
          />
          <Image
            className='block md:hidden'
            width={511}
            height={411}
            alt='collaboration'
            src={"/collaboration-img-mobile.png"}
          />
        </div>
      </div>
    </section>
  );
}
