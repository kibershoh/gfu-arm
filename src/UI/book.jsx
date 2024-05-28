import React, { useState } from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { FaDownload } from "react-icons/fa6";
import { TbMessage } from "react-icons/tb";
import { RiSendPlaneFill } from "react-icons/ri";
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const [likes, setLikes] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const Likes = () => {
    setLikes(!likes);
    setLikeCount(likeCount + 0.5);
  };

  const [input, setInput] = useState(false);
  const activeInput = () => {
    setInput(!input);
  };
  return (
    <>



        <div className="shadow rounded   pb-10">
          <div className='flex flex-col max-lg:flex-cols relative'>
    <div className='w-full bg-orange-50 p-2'>
            <img src={book.image} className='grid rotate-2 rounded-lg grid-cols-1 h-60 mx-auto max-md:w-32 max-md:h-32 rounded-lg' />

    </div>
            <div className='p-5 pb-2 max-md:pl-2 max-md:pr-0 pt-0 w-full relative'>
              <h1 className='text-lg text-start  font-bold max-md:text-xs'>{book.title}</h1>
              <p className='text-slate-400 text-start w-full text-sm '>{book.author}</p>
              <p className='w-full pt-1 mt-3   h-44 max-md:h-14 max-md:text-sm leading-4 font-sans size-1'>
                {book.caption}
              </p>
             <div className='w-full text-right px-2 pt-8 absolute right-0 -bottom-8'>
              <Link to={book.file} download target='_blank'>
               <button className=" inline-flex gap-5 items-center px-3 py-2 max-md:py-1 text-md max-md:text-sm font-medium text-center  border border-violet-600 rounded-md hover:bg-[#CAF4FF] focus:ring-4 focus:outline-none focus:ring-blue-300">
                 <FaDownload className='text-violet-600' />

              </button>
              </Link>
             </div>
            </div>
                {/* <button className="hover:scale-115 mt-3 absolute right-0" onClick={Likes}>
                  {likes ? (
                    <BsSuitHeart size={20} className="hover:scale-110 duration-300" />
                  ) : (
                    <BsSuitHeartFill
                      size={20}
                      className="hover:scale-110 text-red-600 duration-300"
                    />
                  )}
                </button> */}

          </div>
          
        </div>

    </>
  )
}

export default BookCard