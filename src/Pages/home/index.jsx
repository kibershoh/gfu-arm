import React from 'react'
import SwiperSlider from '../../Components/swiper'
import News from '../news'
import ElektronLibrary from '../../Components/elektronLibrary'
import otkan from '../../assets/carousel/otkan.jpg'

const Home = () => {
  return (
    <div>
      {/* <SwiperSlider/> */}
       <div className='w-full h-screen  flex justify-between max-lg:flex-col max-md:justify-center items-center   px-10 max-lg:mx-2 max-md:gap-8 '>
           
            <div className='flex flex-col items-start w-full'>
          <h1 className='text-5xl  font-semibold mb-4 w-full'>Geologiya fanlar universiteti </h1>
          <h1 className='text-3xl font-semibold text-violet-600'>Elektron kutubxonasi </h1>
          <h2>

          </h2>
              <div className='flex gap-4 mt-10'>
                <button   className='bg-violet-600 w-64  max-md:w-auto p-2 mt-3 rounded text-white max-md:mt-4   hover:bg-violet-700'>Kitoblar </button>
              <button   className='bg-white w-64  max-md:w-auto p-2 mt-3 rounded text-violet-600 border-violet-600 hover:text-white border max-md:mt-4   hover:bg-violet-700'>Unilibrary </button>
    
              </div>
              <button   className='bg-white w-64  max-md:w-auto p-2 mt-3 rounded text-violet-600 border-violet-600 hover:text-white border max-md:mt-4   hover:bg-violet-700'>Elektron Katalog </button>
                      </div>
            <div className='w-1/2 '>

             <img src={otkan}  className='w-64 h-64 mx-auto max-md:w-40 max-md:h-40' alt="" />
           </div>
          </div>
      <ElektronLibrary/>
      <News/>
    </div>
  )
}

export default Home