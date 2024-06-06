import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CardLoader from '../../Components/cardLoader';
import SliderImages from './sliderImages';
import ImageSlider from './sliderImages';
// import Modal from './Modal';


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
   
  return (
    <div className='mt-20'>
      {
        ( !window.navigator.onLine) ? <CardLoader />
          :
          <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 w-full gap-3'>
            {

              news?.map((item, index) => (
                <div key={index} className='p-4 shadow rounded relative pb-16'>
                   <div className="">
                    <ImageSlider fotos={item.fotos}/>
                  </div>
                  <p className='text-slate-500 mt-3'>{item.title}</p>
                  {/* <p className='pt-3'>{item.info}

                  </p> */}
                  {/* <span></span> */}
                  {/* <Modal info={item.info}/> */}
                </div>
              ))


            }

          </div>
      }
                          {/* <ImageSlider/> */}

    </div>
  )
}

export default News