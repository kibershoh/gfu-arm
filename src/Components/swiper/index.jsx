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
   <>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='w-full grid grid-cols-2 gap-10 mx-20 items-center'>
           <div className='h-1/2'>

             <img src={book1}  className='w-80' alt="" />
           </div>
            <div className='flex flex-col items-start'>
              <h1>Lorem ipsum dolor sit.</h1>
              <h1>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut vitae repellendus mollitia fugit possimus modi adipisci minima excepturi repellat.</h1>
              <button  className='bg-blue-600 p-2 rounded text-white'>Read More</button>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full grid grid-cols-2 gap-10 mx-20 items-center'>
           <div className='h-1/2'>

             <img src={book2}  className='w-80' alt="" />
           </div>
            <div className='flex flex-col place-items-start'>
              <h1>Lorem ipsum dolor sit.</h1>
              <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing Debitis aut vitae repellendus mollitia fugit possimus modi adipisci minima excepturi repellat.</p>
              <button className='bg-blue-600 p-2 rounded text-white'>Read More</button>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full grid grid-cols-2 gap-10 mx-20 items-center'>
           <div className='h-1/2'>

             <img src={book3}  className='w-80' alt="" />
           </div>
            <div className='flex flex-col place-items-start'>
              <h1>Lorem ipsum dolor sit.</h1>
              <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing Debitis aut vitae repellendus mollitia fugit possimus modi adipisci minima excepturi repellat.</p>
              <button className='bg-blue-600 p-2 rounded text-white'>Read More</button>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full grid grid-cols-2 gap-10 mx-20 items-center'>
           <div className='h-1/2'>

             <img src={book4}  className='w-80' alt="" />
           </div>
            <div className='flex flex-col place-items-start'>
              <h1>Lorem ipsum dolor sit.</h1>
              <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing Debitis aut vitae repellendus mollitia fugit possimus modi adipisci minima excepturi repellat.</p>
              <button className='bg-blue-600 p-2 rounded text-white'>Read More</button>
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

   </>
  )
}

export default SwiperSlider