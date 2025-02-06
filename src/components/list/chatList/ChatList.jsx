import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
function Chatlist() {
  const [addMode, setAddMode] = useState(false);
  return (
    <>
      <div className='flex items-center gap-2 mt-10'>
        <div className=' bg-gray-700 w-80 flex items-center gap-5 pl-2 rounded-xl'>
          <FaSearch />
          <input className=' p-2 rounded-xl w-full' placeholder='Search' />
        </div>
        <div
          onClick={() => setAddMode((prev) => !prev)}
          className='   bg-gray-700 p-3 rounded-md cursor-pointer'
        >
          {addMode ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      <div className='mt-5'>
        <div className='flex items-center gap-5 border-b border-gray-500 py-2.5'>
          <img
            src='/avatar.png'
            alt=''
            className='w-15 h-15 rounded-full bg-white'
          />
          <div >
            <span className='font-semibold'>Maks Saiitbek</span>
            <p className=''>Hello</p>
          </div>
        </div>
        <div className='flex items-center gap-5 border-b border-gray-500 py-2.5'>
          <img
            src='/avatar.png'
            alt=''
            className='w-15 h-15 rounded-full bg-white'
          />
          <div >
            <span className='font-semibold'>Maks Saiitbek</span>
            <p className=''>Hello</p>
          </div>
        </div>
        <div className='flex items-center gap-5 border-b border-gray-500 py-2.5'>
          <img
            src='/avatar.png'
            alt=''
            className='w-15 h-15 rounded-full bg-white'
          />
          <div >
            <span className='font-semibold'>Maks Saiitbek</span>
            <p className=''>Hello</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatlist;
