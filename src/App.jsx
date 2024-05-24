import React, { useEffect, useState } from 'react'
import Navbar from './Components/navbar'
import AllRouters from './Routers'
import Footer from './Components/footer'
import { getBooks } from './Pages/news'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

   const [result, setResult] = useState('');
  const [error, setError] = useState(null);

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
        console.log(textResult.results);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    };

    fetchBooks();
  }, []);
  return (
    <>
      <Navbar />
      <AllRouters />
      <Footer />
    </>
  )
}

export default App