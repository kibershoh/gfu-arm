import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { Books, Contact, Home, News } from '../Pages'
import Login from '../Pages/login'

const AllRouters = () => {
  return (
    <>
    
        <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/books'} element={<Books />} />
        <Route path={'/news'} element={<News />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </>
  )
}

export default AllRouters;