import React from "react";
import { FaPhone } from "react-icons/fa6";
import {
  FaVideo,
  FaExclamationCircle,
  FaCamera,
  FaPhotoVideo,
  FaMicrophone,
  FaSmile,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState();
  const handleEmoji = (e) => {
    {
      setText((prev) => prev + e.emoji);
    }
  };
  return (
    <div className='col-span-2 px-5 relative '>
      <div className='chat__header flex items-center justify-between border-b border-gray-500 py-2.5'>
        <div className='user flex items-center gap-5'>
          <img src='/avatar.png' alt='' className='w-15 h-15 rounded-full ' />
          <div>
            <span className='font-semibold text-xl'>Maks Saiitbek</span>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='icons col-span-2 flex items-center gap-5'>
          <FaPhone className='cursor-pointer  size-5' />
          <FaVideo className='cursor-pointer size-5' />
          <FaExclamationCircle className='cursor-pointer size-5' />
        </div>
      </div>
      <div className='chat__center border-b border-gray-500   '>
        <div className='h-[75vh]'>
          <div className='flex flex-col gap-5 overflow-auto scrollbar-hide max-h-full'>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div className='chat__bottom flex justify-between w-full items-center gap-5 absolute bottom-0 inset-x-0 px-3'>
        <div className='w-30 gap-5 flex items-center justify-between'>
          <FaPhotoVideo className='size-7 cursor-pointer' />
          <FaCamera className='size-5 cursor-pointer' />
          <FaMicrophone className='size-4 cursor-pointer' />
        </div>
        <input
          placeholder='Type a message...'
          className=' bg-gray-700 p-3 rounded-2xl w-full'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className='flex items-center gap-5 relative'>
          <FaSmile
            className='size-7 cursor-pointer z-10'
            onClick={() => setOpen(!open)}
          />
          <IoSend className='size-7 cursor-pointer' />
          <div className='fixed absolute bottom-20 z-10 '>
            <EmojiPicker
              className=' abz-10'
              open={open}
              onEmojiClick={handleEmoji}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
