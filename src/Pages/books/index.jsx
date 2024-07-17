import React, { useEffect, useState } from 'react'
import './style.scss'
import BookList from '../../UI/bookList'


// Base URL of the API
// Base URL of the API

// Function to fetch data from the /books/book endpoint using fetch



const Books = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
   
   
  return (
    <div>
     
       


      {/* Books */}

      <BookList />


    </div>
  )
}

export default Books