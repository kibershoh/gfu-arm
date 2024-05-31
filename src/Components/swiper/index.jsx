import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import book1 from '../../assets/books/arrival_9.jpg'
import book2 from '../../assets/books/arrival_2.jpg'
import book3 from '../../assets/books/arrival_4.jpg'
import book4 from '../../assets/books/arrival_10.jpg'

import xamsa from '../../assets/carousel/xamsa.jpg'
import otkan from '../../assets/carousel/otkan.jpg'
import mehrob from '../../assets/carousel/mehrob.jpeg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.scss'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


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
          <h1 className='text-3xl font-semibold mb-10'>O'tkan Kunlar </h1>
              <p className='mb-3 text-xl'> Modomiki, biz yangi davrga oyoq qo‘ydik, bas, biz har bir yo‘sunda ham shu yangi davrning yangiliklari ketidan ergashamiz va shunga o‘xshash dostonchiliq, ro‘monchiliq va hikoyachiliqlarda ham yangarishg‘a, xalqimizni shu zamonning «Tohir-Zuhra»lari, «Chor darvesh»lari, «Farhod-Shirin» va «Bahromgo‘r»lari bilan tanishdirishka o‘zimizda majburiyat his etamiz.</p>
              <button   className='bg-blue-600 p-2 mt-20 rounded text-white max-md:mt-4  hover:bg-blue-700'>Read More </button>
            </div>
            <div className='w-full '>

             <img src={otkan}  className='w-80 h-80 mx-auto max-md:w-40 max-md:h-40' alt="" />
           </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full  flex justify-between max-lg:flex-col max-md:justify-center items-center  gap-20 mx-20 max-lg:mx-2 max-md:gap-8 '>
           
            <div className='flex flex-col items-start'>
          <h1 className='text-3xl font-semibold mb-10'>Xamsa</h1>
              <p className='mb-3 text-xl'>  XV asrning atoqli fors shoiri, yozuvchisi va davlat arbobi Alisher Navoiy turkiy tillar adabiyotiga qo‘shgan hissasi, chag‘atoy tilini rivojlantirishdagi roli bilan mashhur. “Xamsa” atamasi uning beshta dostondan iborat mashhur to‘plamiga ishora qiladi va bu uning eng katta adabiy yutuqlaridan biri hisoblanadi.</p>
              <Link to={'/https://uz.wikipedia.org/wiki/Xamsa_(Navoiy)'}  className='bg-blue-600 p-2 mt-20 rounded text-white max-md:mt-4 hover:bg-blue-700 '>Read More</Link>
            </div>
            <div className='w-full'>

             <img src={xamsa}  className='w-80 h-80 mx-auto max-md:w-40 max-md:h-40' alt="" />
           </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full  flex justify-between max-lg:flex-col max-md:justify-center items-center  gap-20 mx-20 max-lg:mx-2 max-md:gap-8 '>
           
            <div className='flex flex-col items-start'>
          <h1 className='text-3xl font-semibold mb-10'>Mehrobdan chayon</h1>
              <p className='mb-3 text-xl'>   Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut vitae repellendus mollitia fugit possimus modi adipisci minima excepturi repellat.</p>
              <Link to={'https://library.navoiy-uni.uz/files/abdulla%20qodiriy_%20mehrobdan%20chayon.pdf'}  className='bg-blue-600 p-2 mt-20 rounded text-white max-md:mt-4 hover:bg-blue-700 '>Read More</Link>
            </div>
            <div className='w-full'>

             <img src={mehrob}  className='w-80 h-80 mx-center max-md:w-40 max-md:h-40' alt="" />
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