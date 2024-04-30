import React from 'react'
import { booksData } from '../Constants/booksData'
import BookCard from './book'

const BookList = () => {
  return (
    <div className='grid grid-cols-5 gap-10'>
    {
        booksData.map((book)=>(
            <BookCard book = {book}/>
        ))
    }
    </div>
  )
}

export default BookList