import React from 'react'
import News from '../news'
import otkan from '../../assets/bg_images/bg.png'
import SliderDesign2 from '../../UI/animation2'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

import './styles.scss'
import { Tilt } from 'react-tilt'
import BookListHome from '../../UI/BookListHome'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* <SwiperSlider/> */}
       <div className=' custom_gradient w-full  h-screen max-md:h-auto max-md:pb-10  flex justify-between max-lg:flex-col max-md:justify-center items-center   px-64 max-lg:mx-2 max-md:gap-8 max-md:mt-20 max-md:px-3 mb-10 relative'>
           
            <div className='flex flex-col items-start w-full'>
          <h1 className='text-5xl text-white  font-semibold mb-4 w-full max-md:text-3xl'>Elektron kutubxona </h1>
          <h1 className='text-3xl  font-inter mt-10 border-l-4 border-blue-700 pl-10  text-white max-md:text-xl'>
Geologiya fanlari universiteti <br /> axborot-resurs markazining web sahifasi            </h1>
           
              <div className='grid grid-cols-2  max-md:grid max-md:grid-cols-2 gap-5 mt-10 w-1/2'>
                <a href='https://catalog.uzgeouniver.uz/cgi-bin/irbis64r_plus/cgiirbis_64_ft.exe?C21COM=F&I21DBN=IBIS_FULLTEXT&P21DBN=IBIS&Z21ID=Guest&lng=uz&S21CNR=5'  className='bg-blue-600  px-2 py-4 w-100 max-md:p-2 max-md:text-md  text-center  text-xl font-inter tracking-wide max-md:w-36 p-2 mt-3 rounded text-white max-md:mt-4   hover:bg-blue-700' onClick={()=>navigate('https://catalog.uzgeouniver.uz/cgi-bin/irbis64r_plus/cgiirbis_64_ft.exe?C21COM=F&I21DBN=IBIS_FULLTEXT&P21DBN=IBIS&Z21ID=Guest&lng=uz&S21CNR=5')}>Kitoblar </a>
    
              <a className='bg-white text-center px-2 py-4 max-md:p-2 max-md:text-md   text-xl font-inter tracking-wide  max-md:w-auto p-2  mt-3 rounded text-blue-600 border-blue-600 w-100 hover:text-white border max-md:mt-4   hover:bg-blue-700' onClick={()=>navigate('')}>Elektron Katalog </a>
              </div>
                      </div>
            {/* <motion.div className='w-3/4 max-md:w-full  '
             initial={{y:-100}}
                animate = {{y:0}}
                transition={{delay:0.1}}
            >
 

             <img src={otkan}  className='  absolute right-0 top-44 rounded-xl shadow-lg w-full 2xl:w-[500px] 2xl:h-80    h-44 max-md:w-auto max-md:h-auto   p-1 mx-auto ' alt="" />
           </motion.div> */}
          </div>
        
      
      <SliderDesign2/>

      {/* <h1 className='text-3xl font-semibold pl-20'>Yangiliklar</h1> */}
     
      <News/>

      <br />
      <br />
      <br />
        <BookListHome/>
    </div>
  )
}

export default Home