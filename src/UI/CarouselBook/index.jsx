// src/CarouselBooks.js
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from '../book';
import clsx from 'clsx';
import { LanguageContext } from '../../context/LanguageContext';
import './styles.scss';

const CarouselBooks = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tarixiyCards, settarixiyCards] = useState([]);
  const [adabiyCards, setadabiyCards] = useState([]);
  const [Kasb_talimi_boyichaCards, setKasb_talimi_boyichaCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedCards, setDisplayedCards] = useState([]);

  const navigate = useNavigate();
  const { t, language, setLanguage } = useContext(LanguageContext);

  const cardsPerPage = 6;

  useEffect(() => {
    const categorizedCards = () => {
      const tarixiy = [];
      const adabiy = [];
      const Kasb_talimi_boyicha = [];
      
      cards.forEach(card => {
        switch (card.category) {
          case 1:
            tarixiy.push(card);
            break;
          case 2:
            adabiy.push(card);
            break;
          case 3:
            Kasb_talimi_boyicha.push(card);
            break;
          default:
            break;
        }
      });
      
      settarixiyCards(tarixiy);
      setadabiyCards(adabiy);
      setKasb_talimi_boyichaCards(Kasb_talimi_boyicha);
    };

    categorizedCards();
  }, [cards]);

  const getFilteredCards = () => {
    let filteredCards = [];
    switch (selectedCategory) {
      case 'Tarixiy':
        filteredCards = tarixiyCards;
        break;
      case 'Adabiy':
        filteredCards = adabiyCards;
        break;
      case "Kasb talimi boyicha":
        filteredCards = Kasb_talimi_boyichaCards;
        break;
      default:
        filteredCards = cards;
        break;
    }
    if (searchTerm) {
      filteredCards = filteredCards.filter(card => 
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filteredCards;
  };

  const filteredCards = getFilteredCards();
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  useEffect(() => {
    const start = currentIndex * cardsPerPage;
    const end = start + cardsPerPage;
    setDisplayedCards(filteredCards.slice(start, end));
  }, [currentIndex, filteredCards]);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex) => {
    setCurrentIndex(pageIndex);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentIndex(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentIndex(0);
  };

  return (
    <>
    <>
     <div id='books' className='books   rounded-md  px-10 max-md:px-3'>

        <form className='w-1/2 max-md:w-full'>

          <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
             value={searchTerm}
            onChange={handleSearchChange}
            type="search" id="default-search" className="block outline-none w-full p-4  ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500 " placeholder="Search Mockups, Logos..." required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">Search</button>
          </div>
        </form>
      </div>
    </>
      <div className="w-full my-10">
        <div id="booksId" className="my-10 2xl:w-7/12 2xl:mx-auto flex justify-between gap-10 max-md:gap-2 mx-20 max-lg:mx-5 max-lg:my-4">
          <h1 className="text-3xl font-semibold max-lg:text-2xl max-md:text-xl">{t('allBooks')}</h1>
          <select 
            id="large" 
            className="block px-4 outline-none py-3 max-md:py-1 max-md:px-2 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">{t('chooseCategory')}</option>
            <option value="Tarixiy">Tarixiy</option>
            <option value="Adabiy">Adabiy</option>
            <option value="Kasb talimi boyicha">Kasb ta'limi boyicha</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center">
        {
          displayedCards.length !==0 ?
        <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:px-2 px-20 gap-1 gap-y-4 max-xl:px-100 max-xl:grid-cols-4 2xl:w-3/4">
          {
          displayedCards.map((card, index) => (
            <BookCard key={index} book={card} />
          ))
        
        }
          
        </div>:
        <h1 className='text-3xl  text-center w-full'>{t('tur')}</h1>
        }
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
