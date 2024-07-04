// src/CarouselBooks.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from '../book';
import clsx from 'clsx';

const CarouselBooks = ({cards}) => {
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
  
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:px-2 px-20 gap-1 gap-y-4 max-xl:px-100 max-xl:grid-cols-4 2xl:w-3/4">
        {getCurrentCards()?.map((card,index) => (
          <BookCard book={card}/>
        ))}
      </div>
      <div className="flex items-center space-x-4 mt-4">
        {
          Array.from({ length: totalPages }).length > 1 &&
        <button onClick={prevPage} className="p-2 bg-violet-600 hover:bg-violet-700 text-white rounded">Prev</button>
        }
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={clsx(
                `p-2 rounded  ${index === currentIndex ? 'bg-violet-600 hover:bg-violet-700 text-white' : 'bg-gray-200 text-black'}`,
                (Array.from({ length: totalPages }).length) < 2 && 'hidden'
                
              )}
            >
              {index+1}
            </button>
          ))}
        </div>
        {
          Array.from({ length: totalPages }).length > 1 &&
        <button onClick={nextPage} className="p-2 bg-violet-600 hover:bg-violet-700 text-white rounded">Next</button>
          }
      </div>
    </div>
  );
};

export default CarouselBooks;
