import Button from "@/components/Button";
import React from "react";

export default function AccountCreated({ setPage }: { setPage: Function }) {
  return (
    <div className='text-center h-screen flex flex-col items-center justify-center'>
      <div>
        <h1 className='text-xl text-center font-semibold'>
          Account has been created
        </h1>

        <p className='text-gray-500 mt-4'>
          We&rsquo;re excited to inform you that your account has been
          successfully created. However, to access all the features and benefits
          of our platform, we kindly ask that you complete your profile
          information. This will help us understand your preferences and needs
          better, and tailor our services to meet them. Thank You!
        </p>
      </div>
      <Button onClick={() => setPage(3)} className='mt-4' variant='primary'>
        Continue
      </Button>
    </div>
  );
}
