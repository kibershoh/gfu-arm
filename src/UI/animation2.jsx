import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFigma, FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaDiscord, FaSketch,   } from 'react-icons/fa';
import img1 from '../assets/bgBooks3.jpg'
import logo1 from '../assets/logotip/logo1.svg'
import logo2 from '../assets/logotip/logo2.svg'
import logo3 from '../assets/logotip/logo3.png'
import logo4 from '../assets/logotip/logo4.png'
import logo5 from '../assets/logotip/logo5.png'
import logo6 from '../assets/logotip/logo6.png'
import { LanguageContext } from '../context/LanguageContext';
const slides = [
    { icon: <img src={logo1} alt="" className='w-64 h-32 max-md:w-44 max-md:h-24  p-5 rounded-lg'/>, link: "https://unilibrary.uz/" },
    { icon: <img src={logo2} alt="" className='w-64 h-32 max-md:w-44 max-md:h-24  p-5 rounded-lg'/>, link: "https://search.ebscohost.com/" },
    { icon: <img src={logo3} alt="" className='w-64 h-32 max-md:w-44 max-md:h-24  p-5 rounded-lg'/>,  link: "https://nbmgu.ru/" },
    { icon: <img src={logo4} alt="" className='w-64 h-32 max-md:w-44 max-md:h-24  p-5 rounded-lg'/>, link: "https://link.springer.com/" },
    { icon:<img src={logo5} alt="" className='w-64 h-32 max-md:w-44 max-md:h-24  p-5 rounded-lg'/>, link: "http://natlib.uz/" },
    { icon: <img src={logo6} alt="" className='w-64 h-32 max-md:w-44 max-md:h-24  p-5 rounded-lg'/>, link: "https://www.proquest.com/" },
];

const SliderDesign2 = () => {
    const [isHovered, setIsHovered] = useState(false);
    const duplicatedSlides = [...slides, ...slides];
  const { t, language, setLanguage } = useContext(LanguageContext);

    return (
        <div 
            className="relative h-44   overflow-hidden flex justify-center items-center py-2 mx-auto" 
            style={{ width: "85%" }}
           
        >
                <h1 className='absolute top-0 z-30  text-4xl max-md:text-xl font-be-vietnam text-slate-950'>{t('linksName')}</h1>

            <div className="absolute  w-full   inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-3/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

            <motion.div
                className="flex absolute  z-50 w-full h-1/4 "
                animate={{
                    x: isHovered ? '0%' : ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 25,
                        repeat: isHovered ? 0 : Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 py-20 w-100" style={{  }}>
                        <div
                         onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
                        className="flex    gap-3 items-center justify-center  h-3/4">
                             <a className=' rounded hover:shadow-xl shadow-gray-900  my-10 w-64 h-44 m-2 max-md:w-44 max-md:h-32 max-md:my-3' href={slide.link} target="_blank" rel="noopener noreferrer">
                                {slide.icon}
                                {/* <h1 className='m-2'>Book Name</h1> */}
                            </a>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SliderDesign2;
