import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { Books, Contact, Home, News } from '../Pages'
import Login from '../Pages/login'
 import CreateBook from '../Admin/Pages/CreateBook'
import CreateNews from '../Pages/CreateNews'
import Dashboard from '../Admin/Components/Dashboard'
import PrivateRoute from './privateRoute'
import BookListAdmin from '../Admin/Components/BookListAdmin'
import AboutUs from '../Pages/aboutUs'
import NewsDetails from '../Pages/newsDetails'

const AllRouters = () => {
  return (
    <>
    
        <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/books'} element={<Books />} />
        <Route path={'/news'} element={<News />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/about'} element={<AboutUs />} />
        <Route path={'/create-news'} element={<CreateNews />} />
        <Route path='/newsdetails/:id' element={<NewsDetails/>}/>
        {/* Admin */}
        <Route path={'/login'} element={<Login />} />
         <Route path='/*' element={<PrivateRoute/>}>
          <Route path='admin' element={<Dashboard/>}/>
          <Route path='admin/create' element={<CreateBook/>}/>
          <Route path='admin/all-books' element={<BookListAdmin/>}/>
          <Route path='admin/news' element={<News/>}/>
          <Route path='admin/create-news' element={<CreateNews/>}/>
        {/* <Route path='dashboard/all-products' element={<AllProducts/>}/>
        <Route path='dashboard/add-products' element={<AddProduct/>}/>
        <Route path='dashboard/users' element={<Users/>}/>
        <Route path='dashboard/order-lists' element={<OrderLists/>}/>
        <Route path='dashboard/order_details/:id' element={<OrderDetails/>}/>
        <Route path='dashboard/edit/:id' element={<Edit/>}/>
        <Route path='dashboard/categories' element={<Categories/>}/> */}
        </Route>
      </Routes>
    </>
  )
}

export default AllRouters;