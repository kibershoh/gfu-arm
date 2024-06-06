import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UseAuth from '../Constants/functions/useAuth'

const ProtectedRoute = () => {
    const {currentUser} = UseAuth()
    return currentUser ? <Outlet/> : <Navigate to={'/login'}/>
  
}

export default ProtectedRoute