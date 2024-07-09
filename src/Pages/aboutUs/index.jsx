import React from 'react'
import { TabsCustomAnimation } from './Tab'
import Carousel3d from '../../UI/CarouseThree'
import AboutLibrary from './aboutLibrary'
  import one from '../../assets/education/1.jpg';
  import two from '../../assets/education/2.jpg';
import three from '../../assets/education/4.jpg';
import { GoArrowUpRight } from "react-icons/go";
import { MdPeople } from "react-icons/md";

import  './styles.scss'
import ImageSlider from './imageSlider';
import { IMAGES } from '../../Constants/CarouselImage';
import TestZoom from './imageZoom';
import AutoComplate from './Tab/autoComlate';

const AboutUs = () => {
  return (
    <div className=''>
      <div className='aboutUs'>

      </div>
      <div className='my-10 px-10 grid grid-cols-2 items-center'>
        <div className='flex gap-5 px-4'>

         <div className='2xl:w-80  2xl:h-96 w-64 h-64 rounded-xl'>
       <AutoComplate/>

         </div>
         <div className='2xl:w-80  2xl:h-96 w-64 h-64 rounded-xl mt-10'>
       <AutoComplate/>

         </div>
          {/* <div className='h-96 w-9/12'>
                     <TestZoom img={one}/>

          </div>
          <div className='h-96 w-9/12 pt-10'>
                     <TestZoom img={one}/>

          </div> */}
          {/* <img className='2xl:w-80  2xl:h-96 w-64 h-64 rounded-xl' src={one} alt="" /> */}
          {/* <img className='2xl:w-80  2xl:h-96 w-64 h-64 mt-16 rounded-xl' src={two} alt="" /> */}
        </div>
        <div>
      <h1 className='text-6xl font-be-vietnam'>O'quv zallarimiz</h1>
      <p className='font-be-vietnam text-xl my-10'>
        Har bir yirik kompaniya faqatgina oʻziga emas, balki yonida yelkadosh boʻlgan hamda ishonganlarga minnatdorchilik bildirishi lozim. Axir, bizning ishda eng muhim prinsip - bu ishonch.
Ishonch nafaqat mijoz va hamkorlar sadoqatini ta’minlaydi, qolversa, o’zimizga bo’lgan talabchanligimizni oshiradi. Biz uzoq yillik insoniylik an’analari ustiga qurilgan munosabatlar asosida hamkorlik qilamiz.
      </p>
   <div className='flex gap-10'>
      <button className='bg-blue-600 p-2 rounded  text-xl text-white flex items-center gap-5'>Gfu Arm <GoArrowUpRight  className='hover:rotate-45 w-8 h-8 duration-700 bg-blue-700 rounded-full p-1 '/></button>
      <button className='bg-white p-2 rounded  text-xl text-slate-950 border-2 border-slate-900  flex items-center gap-5'>Team <MdPeople  className='hover:rotate-45 text-white w-8 h-8 duration-700 bg-blue-700 rounded-full p-1 '/></button>

   </div>
        </div>
      </div>
{/* <Carousel3d/> */}
<AboutLibrary/>
{/* <OurTeamList/> */}

    </div>
  )
}

export default AboutUs