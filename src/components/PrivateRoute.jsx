import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from '../context/AuthUserContext'

const PrivateRoute = ({ children }) => {
  const { user } = useAuth()
  const location = useLocation()

  const stat = (user ? 'Logged in' : 'Not logged in')
  console.info('[PrivateRoute] User: ', Math.round(Math.random() * 2000), stat)
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
};

export default PrivateRoute;
