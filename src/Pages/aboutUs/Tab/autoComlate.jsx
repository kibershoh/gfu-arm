import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 import one from '../../../assets/education/1.jpg';
  import two from '../../../assets/education/2.jpg';
  import prezident from '../../../assets/education/geologiyakutubxona.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.scss';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import TestZoom from '../imageZoom';

export default function AutoComplate() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        // pagination={}
        autoplay={{
          delay: 3000, // 2 seconds
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[  Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='2xl:w-80  2xl:h-96 w-64 h-64 rounded-xl' src={prezident} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='2xl:w-80  2xl:h-96 w-64 h-64 rounded-xl' src={two} alt="" />


        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
