import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { Books, Contact, Home, News } from '../Pages'
import Login from '../Pages/login'
import AboutUs from '../Pages/aboutUs'
import CreateBook from '../Pages/CreateBook'
import CreateNews from '../Pages/CreateNews'

const AllRouters = () => {
  return (
    <>
    
        <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/books'} element={<Books />} />
        <Route path={'/news'} element={<News />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/about'} element={<AboutUs />} />
        <Route path={'/create'} element={<CreateBook />} />
        <Route path={'/create-news'} element={<CreateNews />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </>
  )
}

export default AllRouters;