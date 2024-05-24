import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ImageSlider = ({fotos}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
 

  const previous = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < fotos.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <main className="w-full h-full">
      <div className="relative  overflow-hidden rounded-md">
        <div className="absolute right-1 top-1 z-10 rounded-full bg-white px-2 text-center text-sm text-black">
          <span>{currentIndex}</span>/<span>{fotos.length}</span>
        </div>

        <button
          onClick={previous}
          className="absolute left-5 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
        >
          <i className="fas fa-chevron-left text-lg font-bold text-gray-500"></i>
        </button>

        <button
          onClick={forward}
          className="absolute right-5 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
        >
          <i className="fas fa-chevron-right text-lg font-bold text-gray-500"></i>
        </button>

        <div className="relative w-80 h-64">
          {fotos?.map((image, index) => (
            <div
              key={index}
              className={`top-0 absolute transition-opacity duration-300 ${currentIndex === index + 1 ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={`https://librarygfu.pythonanywhere.com/${image.fotos}`} alt={`Slide ${index + 1}`} className="rounded-sm  w-80 h-80" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ImageSlider;
