import React from "react";
import { AiOutlineDesktop } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FiPenTool } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { BiRightArrowAlt } from "react-icons/bi";
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
          <p className='text-base md:text-xl lg:text-base xl:text-xl text-[#464646] '>
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
            <div className='p-2 w-[200px] h-[220px] rounded-3xl border-service shadow-none hover:shadow-[4px_4px_30px_0_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-8'>
              <div className='w-20 h-20 rounded-full bg-primary flex items-center justify-center'>
                <AiOutlineDesktop className='text-4xl text-white' />
              </div>
              <p className='font-bold lg:text-xl xl:text-[22px] leading-[30px] text-center'>
                Social Media Management
              </p>
            </div>
            <div className='p-2 w-[200px] h-[220px] rounded-3xl border-service shadow-none hover:shadow-[4px_4px_30px_0_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-8'>
              <div className='w-20 h-20 rounded-full bg-[#FF2D2D] flex items-center justify-center'>
                <IoSettingsOutline className='text-4xl text-white' />
              </div>
              <p className='font-bold lg:text-xl xl:text-[22px] leading-[30px] text-center'>
                Search Engine Optimization
              </p>
            </div>
            <div className='p-2 w-[200px] h-[220px] rounded-3xl border-service shadow-none hover:shadow-[4px_4px_30px_0_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-8'>
              <div className='w-20 h-20 rounded-full bg-[#7CE761] flex items-center justify-center'>
                <FiPenTool className='text-4xl text-white' />
              </div>
              <p className='font-bold lg:text-xl xl:text-[22px] leading-[30px] text-center'>
                Design
              </p>
            </div>
            <div className='p-2 w-[200px] h-[220px] rounded-3xl border-service shadow-none hover:shadow-[4px_4px_30px_0_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-8'>
              <div className='w-20 h-20 rounded-full bg-[#FFA800] flex items-center justify-center'>
                <MdAttachMoney className='text-4xl text-white' />
              </div>
              <p className='font-bold lg:text-xl xl:text-[22px] leading-[30px] text-center'>
                Ads
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
