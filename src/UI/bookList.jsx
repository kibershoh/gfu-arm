import React, { useEffect, useState } from 'react'
import { booksData } from '../Constants/booksData'
import BookCard from './book'
import { useNavigate } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';

const BookList = () => {
    const [result, setResult] = useState('');
    const [error, setError] = useState(null);
    const [data, setData] = useState([])
    const navigate = useNavigate()
    // useEffect(() => {
    //   const requestOptions = {
    //     method: "GET",
    //     redirect: "follow"
    //   };

    //   const fetchBooks = async () => {
    //     try {
    //       const response = await fetch("https://librarygfu.pythonanywhere.com/en-us/books/book/", requestOptions);
    //       const textResult = await response.json();
    //       setResult(textResult);
    //       setData(textResult.results);
    //     } catch (err) {
    //       setError(err);
    //       console.error(err);
    //     }
    //   };

    //   fetchBooks();
    // });

    const [nextUrl, setNextUrl] = useState("https://librarygfu.pythonanywhere.com/en-us/books/book/");
    const [previousUrl, setPreviousUrl] = useState(null);
    const [loading, setLoading] = useState(false)
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
                    <div id='bookList' className='grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1  gap-6 px-16 max-md:px-1'>
                        {
                            data.map((book) => (
                                <BookCard book={book} />
                            ))
                        }
                        <div>



                        </div>
                    </div>
                    :
                    <LoaderComponent />
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

export default BookList