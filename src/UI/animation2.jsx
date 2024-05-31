import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFigma, FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaDiscord, FaSketch,   } from 'react-icons/fa';

const slides = [
    { icon: <FaFigma size={64} />, link: "https://www.figma.com/" },
    { icon: <FaTwitter size={64} />, link: "https://twitter.com/" },
    { icon: <FaGithub size={64} />, link: "https://github.com/" },
    { icon: <FaInstagram size={64} />, link: "https://www.instagram.com/" },
    { icon: <FaLinkedin size={64} />, link: "https://www.linkedin.com/" },
    { icon: <FaDiscord size={64} />, link: "https://discord.com/" },
    { icon: <FaSketch size={64} />, link: "https://www.sketch.com/" },
];

const SliderDesign2 = () => {
    const [isHovered, setIsHovered] = useState(false);
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div 
            className="relative h-full overflow-hidden py-12 bg-white mx-auto" 
            style={{ width: "80%" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute w-full   inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-3/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

            <motion.div
                className="flex absolute z-50 w-full h-80 "
                animate={{
                    x: isHovered ? '0%' : ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 20,
                        repeat: isHovered ? 0 : Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 mt-10" style={{ width: '100px', height:'100px' }}>
                        <div className="flex items-center justify-center h-full">
                            <a className='w-64 h-64' href={slide.link} target="_blank" rel="noopener noreferrer">
                                {slide.icon}
                            </a>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SliderDesign2;
