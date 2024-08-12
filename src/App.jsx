import React, { useEffect, useState } from 'react'
import Navbar from './Components/navbar'
import AllRouters from './Routers'
import Footer from './Components/footer'
import NavbarAdmin from './Admin/Components/NavbarAdmin'
import { useNavigate } from 'react-router-dom'

const App = () => {


  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    const fetchBooks = async () => {
      try {
        const response = await fetch("https://librarygfu.pythonanywhere.com/en-us/library/employee/", requestOptions);
        const textResult = await response.json();
        // setResult(textResult);
        console.log(textResult);
        setData(textResult.results);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    };

    fetchBooks();
  }, []);
  return (
    <>

      {
        location.pathname.startsWith("/admin") ? <NavbarAdmin />
          :
          <>
            {
              !location.pathname.startsWith("/newsdetails") ?
                <Navbar />
                : ''
            }
          </>
      }
      <AllRouters />
      <Footer />

    </>
  )
}

export default App