import React from "react";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail, CiTwitter } from "react-icons/ci";

export default function Footer() {
  return (
    <section className='w-full bg-[#383638] py-10'>
      <div className='flex flex-col layout items-center'>
        <div className='bg-white rounded-xl p-4 block lg:hidden'>
          <Image
            className='w-28'
            width={204}
            height={76}
            alt='company logo'
            src={"/logo-company.png"}
          />
        </div>
        <div className='flex flex-wrap space-y-10 md:space-y-0 py-10 justify-between w-full text-white'>
          <div className='hidden lg:block'>
            <div className='bg-white rounded-xl p-4'>
              <Image
                className='w-28'
                width={204}
                height={76}
                alt='company logo'
                src={"/logo-company.png"}
              />
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <p className='font-bold'>Terms & policies</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='font-bold'>Company</p>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='font-bold'>Contact</p>
            <p>(+62) 89754170098</p>
            <p>agencycr@gmail.com</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='font-bold'>Location</p>
            <p>PT Osiris Real Estate Internasional</p>
            <p>Jl. KH. Wahid Hasyim Kel No.10D</p>
            <p>Jakarta, Indonesia</p>
            <p>team@OsirisRealEstate.com</p>
          </div>
        </div>
        <div className='w-full md:w-4/5 xl:w-1/2 flex flex-col items-center gap-4'>
          <div className='flex justify-center gap-6 md:gap-8'>
            <div className='w-10 md:w-12 h-10 md:h-12 rounded-full bg-white flex items-center justify-center'>
              <FiFacebook strokeWidth={1.4} className='text-xl' />
            </div>
            <div className='w-10 md:w-12 h-10 md:h-12 rounded-full bg-white flex items-center justify-center'>
              <AiOutlineInstagram strokeWidth={1} className='text-xl' />
            </div>
            <div className='w-10 md:w-12 h-10 md:h-12 rounded-full bg-white flex items-center justify-center'>
              <SlSocialLinkedin className='text-xl' />
            </div>
            <div className='w-10 md:w-12 h-10 md:h-12 rounded-full bg-white flex items-center justify-center'>
              <CiMail className='text-xl' />
            </div>
            <div className='w-10 md:w-12 h-10 md:h-12 rounded-full bg-white flex items-center justify-center'>
              <CiTwitter className='text-xl' />
            </div>
          </div>
          <hr className='bg-white text-white w-full' />
          <p className='text-white text-xs md:text-base'>
            Copyright @ 2022 Agency Creative. All Right Reserved
          </p>
        </div>
      </div>
    </section>
  );
}
