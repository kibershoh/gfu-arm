import React, { useEffect, useState } from 'react'
import Navbar from './Components/navbar'
import AllRouters from './Routers'
import Footer from './Components/footer'
import NavbarAdmin from './Admin/Components/NavbarAdmin'

const App = () => {
 

   
  return (
    <>

      {
      location.pathname.startsWith("/admin")  ? <NavbarAdmin/> 
      :
       <>
      <Navbar/>
      </>
     }
      <AllRouters />
      <Footer />
        
    </>
  )
}

export default App