import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BookCardAdmin from '../BookCardAdmin';
import LoaderComponent from '../../../UI/LoaderComponent';

const BookListAdmin = () => {
    const [result, setResult] = useState('');
  const [error, setError] = useState(null);
  const [data,setData] = useState([])
  const navigate = useNavigate()
   

   const [nextUrl, setNextUrl] = useState("https://librarygfu.pythonanywhere.com/en-us/books/book/");
    const [previousUrl, setPreviousUrl] = useState(null);
const [loading,setLoading] = useState(false)
    useEffect(() => {
        fetchBooks(nextUrl);
    }, []);

    
    const fetchBooks = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data.results);
            setNextUrl(data.next);
            setPreviousUrl(data.previous);
        } catch (error) {
            setError(error);
            console.error('Error fetching books:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleNext = () => {
        if (nextUrl) {
          fetchBooks(nextUrl)
          navigate('#books')
          
          
        }
       
    };

    const handlePrevious = () => {
        if (previousUrl) fetchBooks(previousUrl);
    };

  return (
 <div>
  {
    !loading ?
     <div id='bookListAdmin' className='grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 pt-20  gap-6 px-16 max-md:px-1'>
    {
        data.map((book)=>(
            <BookCardAdmin key={book.id} book = {book}/>
        ))
    }
    <div>
      


    </div>
    </div>
    :
     <LoaderComponent/>
  }
    <div className='w-full text-right'>

         {
          previousUrl && 
          <a className='bg-violet-600 mx-2 w-44 hover:scale-110 hover:bg-violet-700 p-2 rounded text-lg  text-white' onClick={handlePrevious} href={loading && '#booksId'} >{loading ? 'loading...' : 'Previous'}</a>

         }
         {
          nextUrl &&
            <a className='bg-violet-600 mx-2 w-44 hover:scale-110 hover:bg-violet-700 p-2 rounded text-lg  text-white' onClick={handleNext} href={loading && '#booksId'}>{loading ? 'loading...' : 'Next'}</a>
         }

    </div>
 </div>
  )
}

export default BookListAdmin