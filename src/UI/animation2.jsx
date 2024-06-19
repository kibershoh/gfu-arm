import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFigma, FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaDiscord, FaSketch,   } from 'react-icons/fa';
import img1 from '../assets/bgBooks3.jpg'
const slides = [
    { icon: <img src={img1} alt="" className='w-full m-2 rounded-lg h-full'/>, link: "https://www.figma.com/" },
    { icon: <img src={img1} alt="" className='w-full m-2 rounded-lg h-full'/>, link: "https://twitter.com/" },
    { icon: <img src={img1} alt="" className='w-full m-2 rounded-lg h-full'/>, link: "https://github.com/" },
    { icon: <img src={img1} alt="" className='w-full m-2 rounded-lg h-full'/>,  link: "https://www.instagram.com/" },
    { icon: <img src={img1} alt="" className='w-full m-2 rounded-lg h-full'/>, link: "https://www.linkedin.com/" },
    { icon:<img src={img1} alt="" className='w-full m-2 rounded-lg h-full'/>, link: "https://discord.com/" },
    { icon: <img src={img1} alt="" className='w-full m-2 rounded-lg h-full'/>, link: "https://www.sketch.com/" },
];

const SliderDesign2 = () => {
    const [isHovered, setIsHovered] = useState(false);
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div 
            className="relative h-96 overflow-hidden flex justify-center items-center py-2 bg-white mx-auto" 
            style={{ width: "85%" }}
           
        >
            <div className="absolute w-full   inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-3/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

            <motion.div
                className="flex absolute z-50 w-full h-1/2 "
                animate={{
                    x: isHovered ? '0%' : ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: isHovered ? 0 : Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 py-20 " style={{ width:'200px',height:'200px' }}>
                        <div
                         onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
                        className="flex    gap-3 items-center justify-center  h-3/4">
                             <a className=' rounded hover:shadow-xl shadow-gray-900  my-10 w-64 h-44 m-2' href={slide.link} target="_blank" rel="noopener noreferrer">
                                {slide.icon}
                                <h1 className='m-2'>Book Name</h1>
                            </a>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SliderDesign2;
