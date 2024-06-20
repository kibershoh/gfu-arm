import React from 'react'
import News from '../news'
import otkan from '../../assets/bghome3.jpg'
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
       <div className=' custom_gradient w-full h-screen max-md:h-auto max-md:pb-10  flex justify-between max-lg:flex-col max-md:justify-center items-center   px-10 max-lg:mx-2 max-md:gap-8 max-md:mt-20 max-md:px-3 mb-10'>
           
            <div className='flex flex-col items-start w-full'>
          <h1 className='text-5xl  font-semibold mb-4 w-full max-md:text-3xl'>Geologiya fanlar universiteti </h1>
          <h1 className='text-3xl font-semibold text-violet-600 max-md:text-xl'>Elektron kutubxonasi </h1>
          <h2>

          </h2>
              <div className='flex max-md:grid max-md:grid-cols-2 gap-10 mt-10'>
                <a href='https://catalog.uzgeouniver.uz/cgi-bin/irbis64r_plus/cgiirbis_64_ft.exe?C21COM=F&I21DBN=IBIS_FULLTEXT&P21DBN=IBIS&Z21ID=Guest&lng=uz&S21CNR=5'  className='bg-violet-600 text-center w-44 text-2xl font-semibold tracking-wide max-md:w-36 p-2 mt-3 rounded text-white max-md:mt-4   hover:bg-violet-700' onClick={()=>navigate('https://catalog.uzgeouniver.uz/cgi-bin/irbis64r_plus/cgiirbis_64_ft.exe?C21COM=F&I21DBN=IBIS_FULLTEXT&P21DBN=IBIS&Z21ID=Guest&lng=uz&S21CNR=5')}>Kitoblar </a>
              <a  className='bg-white text-center w-44 text-2xl font-semibold tracking-wide max-md:w-36 p-2 mt-3 rounded text-violet-600 border-violet-600 hover:text-white border max-md:mt-4   hover:bg-violet-700'  onClick={()=>navigate('https://unilibrary.uz/')}>Unilibrary </a>
    
              </div>
              <a className='bg-white text-center w-64 text-2xl font-semibold tracking-wide  max-md:w-auto p-2 mt-3 rounded text-violet-600 border-violet-600 hover:text-white border max-md:mt-4   hover:bg-violet-700' onClick={()=>navigate('')}>Elektron Katalog </a>
                      </div>
            <motion.div className='w-3/4 max-md:w-full '
             initial={{y:-100}}
                animate = {{y:0}}
                transition={{delay:0.1}}
            >
<Tilt
 options={{
              max: 10,
              transition: 1.6,
              scale: 1.09,
              speed: 15,
            }}
>

             <img src={otkan}  className='    rounded-full shadow-lg w-96 2xl:w-[500px] 2xl:h-[500px]    h-96 max-md:w-auto max-md:h-auto   p-1 mx-auto ' alt="" />
</Tilt>
           </motion.div>
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