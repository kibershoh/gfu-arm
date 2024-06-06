import React, { useEffect, useState } from 'react'

const UseAuth = () => {
    const [currentUser,setCurrentUser] = useState({})
      const isLoggedIn = localStorage.getItem('access_token');

    useEffect(()=>{
          if(isLoggedIn){
                setCurrentUser(isLoggedIn)
            }
            else{
                setCurrentUser(null)

            }
    })
  return {
    currentUser,
  }
}

export default UseAuth