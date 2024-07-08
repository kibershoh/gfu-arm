//~~~~~~~~~React Hooks~~~~~~~
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

//~~~~~~~~~~Icons~~~~~~~~~~~~~
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

//~~~~~~~~~~~~Styles~~~~~~~~~~~~
import { IMAGES } from '../../Constants/CarouselImage'


const ImageSlider = ({images}) => {

  const slideLength = images?.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  //~~~~~~~~~~~~~~AutoScroll~~~~~~~~~~~~~~
  const autoScroll = true
  let slideInterval;
  let intervalTime = 2000;

  // ~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  //~~~~~~~~~~~~~~useEffects()~~~~~~~~~~~~~~
  useEffect(() => {
if(images){
      setCurrentSlide(0)

}
  },[])
  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      }
      auto()
    }
    return () => clearInterval(slideInterval)
  }, )
  
  
  return (
    <div className="slider">
    
      {
        IMAGES?.map((image, inx) => {
          return (
            <div className={clsx("slide",
              inx === currentSlide ? 'current' : ''
            )}
              key={inx}
            >
              {
                inx === currentSlide && (
                  <>
                    <img className='rounded h-80' src={image} alt="" />
                    
                                      </>
                )
              }

            </div>
          )
        })
      }
       {/* <div className="next_prev_icons">
        <AiOutlineArrowLeft  className={clsx(
        'arrow',
        'prev'
      )} onClick={prevSlide} />
      <AiOutlineArrowRight className={clsx(
        'arrow',
        'next'
      )} onClick={nextSlide} />
       </div> */}
    </div>
  )
}

export default ImageSlider