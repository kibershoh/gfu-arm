import React, { useEffect, useState } from 'react'
import Navbar from './Components/navbar'
import AllRouters from './Routers'
import Footer from './Components/footer'
import { getBooks } from './Pages/news'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [result, setResult] = useState('');
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    const fetchBooks = async () => {
      try {
        const response = await fetch("https://librarygfu.pythonanywhere.com/en-us/news/news/", requestOptions);
        const textResult = await response.json();
        setBooks(textResult);
        console.log(books);
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