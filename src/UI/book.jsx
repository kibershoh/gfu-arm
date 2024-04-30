import React from 'react'
import { FaDownload } from "react-icons/fa6";

const BookCard = ({book}) => {
  return (
    <>
        
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
  <a href="#" className='h-44 w-full m-10'>
    <img className="rounded-t-lg h-60 w-1/2 mx-auto" src={book.img} alt />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight ">{book.name}</h5>
    </a>
    <p className="mb-3 font-normal ">{book.title}</p>
    <button className="inline-flex gap-5 items-center px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
      Download <FaDownload/>
      
    </button>
  </div>
</div>


    </>
  )
}

export default BookCard