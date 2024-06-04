import React, { useCallback, useState } from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { FaDownload } from "react-icons/fa6";
import { TbMessage } from "react-icons/tb";
import { RiSendPlaneFill } from "react-icons/ri";
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import TruncateText from './showMoreText';
import ShowMoreText2 from './showMoreText2';
import { motion } from 'framer-motion';
const BookCard = ({ book }) => {
  const [likes, setLikes] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const Likes = () => {
    setLikes(!likes);
    setLikeCount(likeCount + 0.5);
  };

  const [input, setInput] = useState(false);
  const activeInput = () => {
    setInput(!input);
  };
const [show,setShow] = useState(false)
   const executeOnClick = ()=>{
    setShow(!show)
   }
   const sliceHundread =(text)=>{
    return text.slice(0,100)
   }
   const ReadMore = ()=>{
    setReadMore(!readMore)
   }
  return (
    <>



        <motion.div
        
          initial={{
        opacity: 0,
        
        y:150,
        
        
         
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y:0, // Slide in to its original position
        transition: {
          duration: 0.9 // Animation duration
        }
      }}
        className="shadow rounded mx-2   pb-10">
          <div className='flex flex-col max-lg:flex-cols relative'>
    <div className='w-9/12 bg-violet-50 p-2'>
            <img src={book.image} className='grid rotate-2 rounded-lg grid-cols-1 h-52 mx-auto max-md:w-32 max-md:h-32 hover:rotate-0 duration-500 hover:-translate-y-12   object-cover hover:scale-150 transform origin-bottom' />

    </div>
            <div className='p-5 pb-2 max-md:pl-2 max-md:pr-0 pt-0 w-full relative'>
              <h1 className='text-lg text-start  font-bold max-md:text-xs'>{book.title}</h1>
              <p className='text-slate-400 text-start w-full text-sm '>{book.author}</p>
                
             <ShowMoreText2 text={book.caption}/>
              
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
          
        </motion.div>

    </>
  )
}

export default BookCard