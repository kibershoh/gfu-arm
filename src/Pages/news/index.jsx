import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CardLoader from '../../Components/cardLoader';
import SliderImages from './sliderImages';
import ImageSlider from './sliderImages';
import Carousel from './NewsCarousel';
// import Modal from './Modal';
import   './styles.scss'
import { LanguageContext } from '../../context/LanguageContext';

const API_URL = 'https://librarygfu.pythonanywhere.com/en-us/books/book/';

export const getBooks = async () => {
  try {
    const response =await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log('Error fetching books:', error);
  }
};
const News = () => {
  const navigate = useNavigate()
   const { t, language, setLanguage } = useContext(LanguageContext);

 
  const [news, setNews] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    const fetchBooks = async () => {
      try {
        const response = await fetch("https://librarygfu.pythonanywhere.com/en-us/news/new", requestOptions);
        const textResult = await response.json();
        setNews(textResult);
        console.log("News:", textResult);
      } catch (err) {
        // setError(err);
        console.error(err);
      }
    };

    fetchBooks();
  }, []);
   

  // Modal
  const toDetails = (id) => {
    navigate('/newsdetails/' + id)
  }
  return (
    <div className='relative'>
      <div className='top-0'>
      <div className='news '>
    <h1 className='text-4xl font-semibold  text-white'>{t('news')}</h1>
      </div>
     
                           <Carousel cards={news}/>
    </div>
    </div>
  )
}

export default News