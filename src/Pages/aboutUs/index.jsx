import React, { useContext } from 'react'
import AboutLibrary from './aboutLibrary'
import one from '../../assets/education/9.jpg';
import two from '../../assets/education/8.jpg';
import prezident from '../../assets/education/5.jpg';
import prezident2 from '../../assets/education/6.jpg';
import { GoArrowUpRight } from "react-icons/go";
import { MdPeople } from "react-icons/md";

import './styles.scss'
import AutoComplate from './Tab/autoComlate';
import { LanguageContext } from '../../context/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';

export const Images1 = [
  {
    id: 1,
    img: prezident,
  },
  {
    id: 2,
    img: one,
  },

]
export const Images2 = [
  {
    id: 1,
    img: prezident2,
  },
  {
    id: 2,
    img: two,
  },

]

const AboutUs = () => {
      const { t, language, setLanguage } = useContext(LanguageContext);
const navigate = useNavigate()
  return (
    <div className=''>
      <div className='aboutUs'>

      </div>
      <div className='my-10 px-20 mb-10 max-md:px-3 grid grid-cols-2 gap-4 items-center 2xl:w-11/12 2xl:mx-auto 2xl:p max-md:grid-cols-1'>
        <div className='flex gap-5 px-4'>

          <div className='2xl:w-80  2xl:h-96 w-64 h-80 rounded-xl'>
            <AutoComplate images={Images1} />

          </div>
          <div className='2xl:w-80 max-md:hidden  2xl:h-96 w-64 h-80 rounded-xl mt-10'>
            <AutoComplate images={Images2} />

          </div>

        </div>
        <div>
          <h1 className='text-2xl text-center font-be-vietnam'>{t('oquv_zallari')}</h1>
          <p className='font-be-vietnam text-lg  my-10'>
           {t('information2')}
          </p>
          <div className='flex gap-10 max-md:gap-2 max-md:justify-around'>
            <Link to={'https://uzgeouniver.uz/uz'}  className='bg-blue-600 p-2 rounded  text-xl text-white flex items-center gap-5 max-md:gap-2 max-md:p-text-md w-64'>{t('ourUniversity')} <GoArrowUpRight className='hover:rotate-45 w-8 h-8 duration-700 bg-blue-700 rounded-full p-1 ' /></Link>
            <button  className='bg-white p-2 rounded  text-xl text-slate-950 border-2 border-slate-500  flex items-center justify-center gap-5 max-md:gap-2 max-md:p-text-md w-64'><a className='flex items-center' href="#ourTeam">{t('team')} <MdPeople className='hover:rotate-45 text-white w-6 h-6 duration-700 bg-blue-700 rounded-full p-1 ' /></a></button>

          </div>
        </div>
      </div>
      {/* <Carousel3d/> */}
      <AboutLibrary />
      {/* <OurTeamList/> */}

    </div>
  )
}

export default AboutUs