// src/CarouselBooks.js
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from '../book';
import clsx from 'clsx';
import { LanguageContext } from '../../context/LanguageContext';

const CarouselBooks = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();
   const { t, language, setLanguage } = useContext(LanguageContext);

  const cardsPerPage = 6;

  useEffect(() => {
    // Fetch categories from API
    const fetchCategories = async () => {
      try {
        const response = await fetch('API_ENDPOINT_FOR_CATEGORIES'); // Replace with actual API endpoint
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const filteredCards = selectedCategory === 'All' ? cards : cards.filter(card => card.category === selectedCategory);
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

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
    return filteredCards.slice(start, end);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentIndex(0); // Reset to the first page when category changes
  };

  return (
    <>
      <div className="w-full my-10">
        <div id="booksId" className="my-10 2xl:w-7/12 2xl:mx-auto flex justify-between gap-10 max-md:gap-2 mx-20 max-lg:mx-5 max-lg:my-4">
          <h1 className="text-3xl font-semibold max-lg:text-2xl max-md:text-xl">{t('allBooks')}</h1>
          <select 
            id="large" 
            className="block px-4 outline-none py-3 max-md:py-1 max-md:px-2 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
           {
            getCurrentCards().map((category)=>(
              <option value={category.category}>{category.category}</option>
            ))
           }
            
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:px-2 px-20 gap-1 gap-y-4 max-xl:px-100 max-xl:grid-cols-4 2xl:w-3/4">
          {getCurrentCards().map((card, index) => (
            <BookCard key={index} book={card} />
          ))}
        </div>
        <div className="flex items-center space-x-4 mt-4">
          {totalPages > 1 && (
            <>
              <button onClick={prevPage} className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Prev</button>
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={clsx(
                      'p-2 rounded',
                      index === currentIndex ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-black'
                    )}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button onClick={nextPage} className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Next</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CarouselBooks;
