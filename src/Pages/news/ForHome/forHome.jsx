import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';

import NewsHome from './newsHome';

const API_URL = 'https://librarygfu.pythonanywhere.com/en-us/books/book/';

export const getBooks = async () => {
  try {
    const response =await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log('Error fetching books:', error);
  }
};
const ForHome = () => {
  const navigate = useNavigate()
 
 
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
         const limitedNews = textResult.slice(0, 5); // Get only the first 5 news items

        setNews(limitedNews);
        console.log("News:", limitedNews);
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
    <div className=''>
      <div className=' '>
    <h1 className='text-4xl font-semibold  text-white'>Yangiliklar</h1>
      </div>
     
                           <NewsHome cards={news}/>
    </div>
  )
}

export default ForHome