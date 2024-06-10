import React from 'react'
import SwiperSlider from '../../Components/swiper'
import News from '../news'
import ElektronLibrary from '../../Components/elektronLibrary'
import otkan from '../../assets/homeImage.jpg'
import LogoCarousel from '../../UI/animation'
import SliderDesign2 from '../../UI/animation2'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import CarouselSlide from '../../UI/Carousel'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* <SwiperSlider/> */}
       <div className='w-full h-screen  flex justify-between max-lg:flex-col max-md:justify-center items-center   px-10 max-lg:mx-2 max-md:gap-8 max-md:mt-20 max-md:px-3 '>
           
            <div className='flex flex-col items-start w-full'>
          <h1 className='text-5xl  font-semibold mb-4 w-full max-md:text-3xl'>Geologiya fanlar universiteti </h1>
          <h1 className='text-3xl font-semibold text-violet-600 max-md:text-xl'>Elektron kutubxonasi </h1>
          <h2>

          </h2>
              <div className='flex max-md:grid max-md:grid-cols-2 gap-4 mt-10'>
                <button  className='bg-violet-600 w-44 max-md:w-36 p-2 mt-3 rounded text-white max-md:mt-4   hover:bg-violet-700' onClick={()=>navigate('https://catalog.uzgeouniver.uz/cgi-bin/irbis64r_plus/cgiirbis_64_ft.exe?C21COM=F&I21DBN=IBIS_FULLTEXT&P21DBN=IBIS&Z21ID=Guest&lng=uz&S21CNR=5')}>Kitoblar </button>
              <button  className='bg-white w-44 max-md:w-36 p-2 mt-3 rounded text-violet-600 border-violet-600 hover:text-white border max-md:mt-4   hover:bg-violet-700'  onClick={()=>navigate('https://unilibrary.uz/')}>Unilibrary </button>
    
              </div>
              <button className='bg-white w-64  max-md:w-auto p-2 mt-3 rounded text-violet-600 border-violet-600 hover:text-white border max-md:mt-4   hover:bg-violet-700' onClick={()=>navigate('')}>Elektron Katalog </button>
                      </div>
            <motion.div className='w-3/4 max-md:w-full '
             initial={{y:-100}}
                animate = {{y:0}}
                transition={{delay:0.1}}
            >

             <img src={otkan}  className='w-full h-full mx-auto ' alt="" />
           </motion.div>
          </div>
        
      
      <SliderDesign2/>
      <News/>
    </div>
  )
}

export default Home