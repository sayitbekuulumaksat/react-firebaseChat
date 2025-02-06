import React from "react";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Detail() {
  const [arrow, setArrow] = useState(false);
  return (
    <div className='ditails p-5'>
      <div className='ditail__user text-center border-b border-gray-400 pb-7 '>
        <img src='avatar.png' className='w-25 h-25 rounded-full m-auto' />
        <h3 className='text-3xl font-bold py-5'>Maks maks</h3>
        <p className=''>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='ditail__info py-5 flex flex-col gap-5'>
        <div className='flex justify-between'>
          <span>Chat Settings</span>
          <div
            onClick={() => setArrow(!arrow)}
            className='   bg-gray-700 p-1 rounded-md cursor-pointer'
          >
            {arrow ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </div>
        <div className='flex justify-between'>
          <span>Chat Settings</span>
          <div
            onClick={() => setArrow(!arrow)}
            className='   bg-gray-700 p-1 rounded-md cursor-pointer'
          >
            {arrow ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </div>
        <div className='flex justify-between'>
          <span>Chat Settings</span>
          <div
            onClick={() => setArrow(!arrow)}
            className='   bg-gray-700 p-1 rounded-md cursor-pointer'
          >
            {arrow ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
