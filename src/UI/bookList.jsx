import React from 'react'
import { booksData } from '../Constants/booksData'
import BookCard from './book'

const BookList = () => {
  return (
    <div className='grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1  gap-10 px-5'>
    {
        booksData.map((book)=>(
            <BookCard book = {book}/>
        ))
    }
    </div>
  )
}

export default BookList