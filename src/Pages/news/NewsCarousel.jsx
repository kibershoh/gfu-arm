// src/Carousel.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Carousel = ({cards}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
const navigate = useNavigate()
//   const cards = [
//     { id: 1, content: 'Card 1' },
//     { id: 2, content: 'Card 2' },
//     { id: 3, content: 'Card 3' },
//     { id: 4, content: 'Card 4' },
//     { id: 5, content: 'Card 5' },
//     { id: 6, content: 'Card 6' },
//     { id: 7, content: 'Card 7' },
//     { id: 8, content: 'Card 8' },
//     { id: 9, content: 'Card 9' },
//     { id: 10, content: 'Card 9' },
//     { id: 11, content: 'Card 9' },
//     { id: 12, content: 'Card 9' },
//     { id: 13, content: 'Card 9' },
//     { id: 14, content: 'Card 9' },
//   ];

  const cardsPerPage = 6;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex) => {
    setCurrentIndex(pageIndex);
  };

  const getCurrentCards = () => {
    const start = currentIndex * cardsPerPage;
    const end = start + cardsPerPage;
    return cards.slice(start, end);
  };
const toDetails = (id) => {
    navigate('/newsdetails/' + id)
  }
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 2xl:grid-cols-4 2xl:gap-20 2xl:px-36 max-md:grid-cols-1 max-md:px-2 px-20 gap-20">
        {getCurrentCards()?.map((card,index) => (
           <div key={card.id} className='p-4  shadow rounded relative pb-16'>
                  <div className="" onClick={() => toDetails(card.id)}>
              {card?.fotos && card.fotos.length > 0 && card.fotos[0]?.fotos ? (
                <img
                  src={`https://librarygfu.pythonanywhere.com/${card.fotos[0].fotos}`}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg w-full h-64 mx-auto object-cover"
                />
              ) : (
                <div className="w-full h-64 mx-auto flex items-center justify-center bg-gray-200 rounded-lg">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
            </div>
                  <p className='text-slate-500 mt-3'>{card.title}</p>
                  {/* <p className='pt-3'>{card.info}

                  </p> */}
                  <span className='text-slate-400 absolute bottom-3 left-2'>
                      {card.created}
                    </span>
                  <div className='absolute bottom-5 right-5    '>
                     
                     <a href='#newsDetails' onClick={()=> toDetails(card.id)} className='p-2 rounded-md bg-violet-600 hover:bg-violet-700 text-white '>
                      Read More
                    </a>
                   </div>
                </div>
        ))}
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <button onClick={prevPage} className="p-2 bg-violet-600 hover:bg-violet-700 text-white rounded">Prev</button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`p-2 rounded ${index === currentIndex ? 'bg-violet-600 hover:bg-violet-700 text-white' : 'bg-gray-200 text-black'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button onClick={nextPage} className="p-2 bg-violet-600 hover:bg-violet-700 text-white rounded">Next</button>
      </div>
    </div>
  );
};

export default Carousel;
