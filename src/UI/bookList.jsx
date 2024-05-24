import React, { useEffect, useState } from 'react'
import { booksData } from '../Constants/booksData'
import BookCard from './book'

const BookList = () => {
    const [result, setResult] = useState('');
  const [error, setError] = useState(null);
  const [data,setData] = useState([])
  
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    const fetchBooks = async () => {
      try {
        const response = await fetch("https://librarygfu.pythonanywhere.com/en-us/books/book/", requestOptions);
        const textResult = await response.json();
        setResult(textResult);
        setData(textResult.results);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    };

    fetchBooks();
  });
  return (
    <div className='grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1  gap-6 px-16'>
    {
        data.map((book)=>(
            <BookCard book = {book}/>
        ))
    }
    </div>
  )
}

export default BookList