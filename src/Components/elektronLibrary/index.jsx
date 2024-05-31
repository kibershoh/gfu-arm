import React from 'react'
import './styles.scss'
import { GiBookshelf } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { FaComputer } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";

const ElektronLibrary = () => {
  return (
    <div className='elektron mt-20'>
        <h1 className='text-white text-3xl pt-10'>Geologiya fanlar universiteti</h1>
       <div className='grid grid-cols-3 px-20 mt-20  gap-4 max-sm:px-2'>
         <div className='text-center bg-transparent rounded-lg w-60 max-md:w-auto px-3   mx-auto'>
            <Link to={'/'}>
            <GiBookshelf className='mx-auto w-32 h-32 max-md:w-10 max-md:h-10 font-thin p-2 hover:scale-110 duration-1000 text-white'/>
            <h1 className='text-2xl font-semibold max-md:text-sm text-white'>Books</h1>
            </Link>
        </div>
         <div className='text-center bg-white rounded-lg w-60 max-md:w-auto px-3  hover:bg-blue-50 mx-auto'>
            <Link target='_blank' to={'/https://catalog.uzgeouniver.uz/cgi-bin/irbis64r_plus/cgiirbis_64_ft.exe?C21COM=F&I21DBN=IBIS_FULLTEXT&P21DBN=IBIS&Z21ID=Guest&lng=uz&S21CNR=5'}>
            <FaComputer className='mx-auto w-32 h-32 max-md:w-10 max-md:h-10 p-2 hover:scale-110 duration-1000'/>
            <h1 className='text-2xl font-semibold max-md:text-sm'>Elektron katalog</h1>
            </Link>
        </div>
         <div className='text-center bg-white rounded-lg w-60 max-md:w-auto px-3  hover:bg-blue-50 mx-auto'>
           <Link target='_blank' to={'https://unilibrary.uz/'}>
            <BsBank className='mx-auto w-32 h-32 max-md:w-10 max-md:h-10 p-2 hover:scale-110 duration-1000'/>
            <h1 className='text-2xl font-semibold max-md:text-sm'>Unilibrary</h1>
      
           </Link>
             </div>
       </div>
    </div>
  )
}

export default ElektronLibrary