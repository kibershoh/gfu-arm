import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import UseAuth from '../Constants/functions/useAuth'

const PrivateRoute = () => {
    const {currentUser} = UseAuth()
    return currentUser ? <Outlet/> : <Navigate to={'/admin'}/>
  
}

export default PrivateRoute