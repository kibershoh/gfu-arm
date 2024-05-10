import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import book1 from '../../assets/books/arrival_9.jpg'
import book2 from '../../assets/books/arrival_2.jpg'
import book3 from '../../assets/books/arrival_4.jpg'
import book4 from '../../assets/books/arrival_10.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.scss'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const SwiperSlider = () => {
     const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
   <div className='max-md:mt-20'>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='w-full  flex justify-between max-lg:flex-col max-md:justify-center items-center  gap-20 mx-20 max-lg:mx-2 max-md:gap-8 '>
           
            <div className='flex flex-col items-start'>
          <h1 className='text-3xl font-semibold mb-10'>Lorem ipsum dolor sit amet.</h1>
              <p className='mb-3 text-xl'> fnfedk Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut vitae repellendus mollitia fugit possimus modi adipisci minima excepturi repellat.</p>
              <button  className='bg-blue-600 p-2 mt-20 rounded text-white max-md:mt-4 hover:bg-blue-700  hover:bg-blue-700'>Read More</button>
            </div>
            <div className='w-full '>

             <img src={book1}  className='w-80 h-80 mx-auto max-md:w-40 max-md:h-40' alt="" />
           </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full  flex justify-between max-lg:flex-col max-md:justify-center items-center  gap-20 mx-20 max-lg:mx-2 max-md:gap-8 '>
           
            <div className='flex flex-col items-start'>
          <h1 className='text-3xl font-semibold mb-10'>Lorem ipsum dolor sit amet.</h1>
              <p className='mb-3 text-xl'> fnfedk Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut vitae repellendus mollitia fugit possimus modi adipisci minima excepturi repellat.</p>
              <button  className='bg-blue-600 p-2 mt-20 rounded text-white max-md:mt-4 hover:bg-blue-700 '>Read More</button>
            </div>
            <div className='w-full'>

             <img src={book1}  className='w-80 h-80 mx-center max-md:w-40 max-md:h-40' alt="" />
           </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full  flex justify-between max-lg:flex-col max-md:justify-center items-center  gap-20 mx-20 max-lg:mx-2 max-md:gap-8 '>
           
            <div className='flex flex-col items-start'>
          <h1 className='text-3xl font-semibold mb-10'>Lorem ipsum dolor sit amet.</h1>
              <p className='mb-3 text-xl'> fnfedk Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut vitae repellendus mollitia fugit possimus modi adipisci minima excepturi repellat.</p>
              <button  className='bg-blue-600 p-2 mt-20 rounded text-white max-md:mt-4 hover:bg-blue-700 '>Read More</button>
            </div>
            <div className='w-full'>

             <img src={book1}  className='w-80 h-80 mx-center max-md:w-40 max-md:h-40' alt="" />
           </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full  flex justify-between max-lg:flex-col max-md:justify-center items-center  gap-20 mx-20 max-lg:mx-2 max-md:gap-8 '>
           
            <div className='flex flex-col items-start'>
          <h1 className='text-3xl font-semibold mb-10'>Lorem ipsum dolor sit amet.</h1>
              <p className='mb-3 text-xl'> fnfedk Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut vitae repellendus mollitia fugit possimus modi adipisci minima excepturi repellat.</p>
              <button  className='bg-blue-600 p-2 mt-20 rounded text-white max-md:mt-4 hover:bg-blue-700 '>Read More</button>
            </div>
            <div className='w-full'>

             <img src={book1}  className='w-80 h-80 mx-center max-md:w-40 max-md:h-40' alt="" />
           </div>
          </div>
          
        </SwiperSlide>
       
        
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

   </div>
  )
}

export default SwiperSlider