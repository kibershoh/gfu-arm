import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoaderComponent from '../LoaderComponent';
import CarouselBooks from '../CarouselBook';

const BookListHome = () => {
    const [result, setResult] = useState('');
    const [error, setError] = useState(null);
    const [data, setData] = useState([])
    const navigate = useNavigate()
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

    // const [nextUrl, setNextUrl] = useState("https://librarygfu.pythonanywhere.com/en-us/books/book/");
    // const [previousUrl, setPreviousUrl] = useState(null);
    const [loading, setLoading] = useState(false)
    


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

     console.log(data);
 const firstFiveBooks = data.slice(0, 5);
    return (
        <div>
            {
                !loading ?
                    <div id='bookList' className=' max-xl:grid-cols-2 max-md:grid-cols-1  px-5 max-md:px-1'>
                        {
                                   <CarouselBooks cards={firstFiveBooks}/>

                        }
                        <div>



                        </div>
                    </div>
                    :
                    <LoaderComponent />
            }
            
        </div>
    )
}

export default BookListHome