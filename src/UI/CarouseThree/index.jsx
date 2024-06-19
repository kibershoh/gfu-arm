import React, { useState } from 'react';
import { IMAGES } from '../../Constants/CarouselImage';
import { LiaArrowRightSolid, LiaArrowLeftSolid } from "react-icons/lia";
import clsx from 'clsx';

const Carousel3d = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? IMAGES.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === IMAGES.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full px-2   pb-20">
      <div className="flex justify-between items-center">
        <button
          onClick={goToPrevious}
          className="text-2xl p-2 hover:scale-110 transition-all duration-1000 ease-in-out relative group"
        >
          <LiaArrowLeftSolid />
          <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-current transition-all duration-400 ease-in-out"></span>
        </button>
        <div className="flex items-center overflow-hidden w-full">
          <div className="flex justify-center items-center  h-screen transition-transform duration-500 ease-in-out transform"
            style={{ transform: `translateX(-${(currentIndex - 2) * 20}%)` }}>
            {IMAGES.map((image, index) => {
              const isActive = index === currentIndex;
              const isPrev1 = index === (currentIndex - 1 + IMAGES.length) % IMAGES.length;
              const isPrev2 = index === (currentIndex - 2 + IMAGES.length) % IMAGES.length;
              const isNext1 = index === (currentIndex + 1) % IMAGES.length;
              const isNext2 = index === (currentIndex + 2) % IMAGES.length;

              let className = 'w-1/5 flex max-md:grid max-md:grid-cols-2 transition-transform duration-500 ease-in-out transform ';
              if (isActive) {
                className += ' scale-150 z-10 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10';  // active image
              } else if (isPrev1 || isNext1) {
                className += ' scale-75 z-5 mx-2';  // near active image
              } else if (isPrev2 || isNext2) {
                className += ' scale-50 z-0 mx-2';  // far from active image
              } else {
                className += ' scale-50 z-0 mx-2';  // out of view
              }

              return (
                <div key={index} className={clsx(className)} onClick={() => handleImageClick(index)}>
                  <img src={image} alt={`Slide ${index + 1}`} className="h-40 sm:h-36 md:h-44 lg:h-48 object-cover w-full rounded-md cursor-pointer" />
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={goToNext}
          className="text-2xl p-2 hover:scale-110 transition-all duration-1000 ease-in-out relative group"
        >
          <LiaArrowRightSolid />
          <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-current transition-all duration-400 ease-in-out"></span>
        </button>
      </div>
    </div>
  );
};

export default Carousel3d;
