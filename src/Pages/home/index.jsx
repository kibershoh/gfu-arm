import React from 'react'
import News from '../news'
import otkan from '../../assets/bg_images/bg.png'
import SliderDesign2 from '../../UI/animation2'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

import './styles.scss'
import { Tilt } from 'react-tilt'
import BookListHome from '../../UI/BookListHome'
import ForHome from '../news/ForHome/forHome'
// import ForHome from '../../UI/ForHome'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
       <div className=' custom_gradient w-full pt-20 z-1  h-screen  max-md:pb-10  flex justify-between max-lg:flex-col max-md:justify-center items-center   px-64   max-md:gap-8   max-md:px-[10%] mb-10 relative'>
           
            <div className='flex flex-col items-start w-full'>
          <h1 className='text-5xl text-white  font-semibold mb-4 w-full max-md:text-3xl max-md:mb-1'>Elektron kutubxona </h1>
          <h1 className='text-3xl  font-inter mt-10 border-l-4 border-blue-700 pl-5  text-white max-md:text-xl max-md:mt-4'>
           Geologiya fanlari universiteti <br className="max-md:hidden"/> axborot-resurs markazining web sahifasi            </h1>
           
              <div className='grid grid-cols-2  max-md:grid max-md:grid-cols-2 gap-5 mt-10 w-1/2 max-md:w-full max-md:gap-7'>
                <a href='https://catalog.uzgeouniver.uz/cgi-bin/irbis64r_plus/cgiirbis_64_ft.exe?C21COM=F&I21DBN=IBIS_FULLTEXT&P21DBN=IBIS&Z21ID=Guest&lng=uz&S21CNR=5'  className='bg-blue-600  px-2 max-md:px-1  py-4 w-100 max-md:p-2 max-md:text-md  text-center  text-xl font-inter tracking-wide max-md:w-36 p-2 mt-3 rounded text-white max-md:mt-4   hover:bg-blue-700 max-md:text-sm' onClick={()=>navigate('https://catalog.uzgeouniver.uz/cgi-bin/irbis64r_plus/cgiirbis_64_ft.exe?C21COM=F&I21DBN=IBIS_FULLTEXT&P21DBN=IBIS&Z21ID=Guest&lng=uz&S21CNR=5')}>Kitoblar </a>
    
              <a className='bg-white text-center px-2 py-4 max-md:p-2 max-md:text-md   text-xl font-inter tracking-wide  max-md:w-auto p-2  mt-3 rounded text-blue-600 border-blue-600 w-100 max-md:px-1  hover:text-white border max-md:mt-4   hover:bg-blue-700 max-md:text-sm' onClick={()=>navigate('')}>Elektron Katalog </a>
              </div>
                      </div>
        
          </div>
        
      
      <SliderDesign2/>

     

      <br />
      <br />
      <br />
      <h1 className="text-center text-4xl font-be-vietnam my-10 max-md:text-xl max-md:my-4">Eng qiziqarli 5 ta kitoblar </h1>
        <BookListHome/>
                  
           <h1 className="text-center text-4xl font-be-vietnam my-5 max-md:text-xl max-md:my-4">Yangiliklar </h1>
        
        <ForHome/>
    </div>
  )
}

export default Home