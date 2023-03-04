import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-blue-400'>
      <AiOutlineLoading3Quarters className='animate-spin text-2xl' />
      <p id='loading'>Loading.</p>
    </div>
  );
};

export default Loading;
