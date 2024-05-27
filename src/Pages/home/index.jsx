import React from 'react'
import SwiperSlider from '../../Components/swiper'
import News from '../news'
import ElektronLibrary from '../../Components/elektronLibrary'

const Home = () => {
  return (
    <div>
      <SwiperSlider/>
      <ElektronLibrary/>
      <News/>
    </div>
  )
}

export default Home