import React from "react";
import { FaVideo } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

function UserInfo() {
  return (
    <div className='flex items-center justify-between '>
      <div className='flex items-center gap-3'>
      <img src='/avatar.png' alt='' className='rounded-full w-15 h-15' />
        <div>
          <p className='font-semibold text-xl'>Maks Saiitbek</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <BsThreeDots className='cursor-pointer' />
        <FaVideo className='cursor-pointer' />
        <FaRegPenToSquare className='cursor-pointer' />
      </div>
    </div>
  );
}

export default UserInfo;
