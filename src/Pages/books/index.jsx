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
      <div id='books' className='books   rounded-md  px-10 max-md:px-3'>

        <form className='w-1/2 max-md:w-full'>

          <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block outline-none w-full p-4  ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500 " placeholder="Search Mockups, Logos..." required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">Search</button>
          </div>
        </form>
      </div>
      <div classname="w-full my-10">

        <div id='booksId' className="my-10 2xl:w-7/12 2xl:mx-auto flex justify-between gap-10 max-md:gap-2 mx-20 max-lg:mx-5 max-lg:my-4">
          <h1 className='text-3xl font-semibold max-lg:text-2xl max-md:text-xl '>All Books</h1>
          <select id="large" className="block px-4 outline-none py-3 max-md:py-1 max-md:px-2 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500 ">
            <option selected>Choose a category</option>
            <option value="US">Fantasy</option>
            <option value="CA">Literature</option>
            <option value="FR">Psychology</option>
            <option value="DE">Thriller</option>
          </select>
        </div>


      </div>



      {/* Books */}

      <BookList />


    </div>
  )
}

export default Books