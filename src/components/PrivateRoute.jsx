import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from '../context/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user } = useAuth()
  const location = useLocation()

  console.info('[PrivateRoute] User: ', Math.round(Math.random() * 2000), user)
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
};

export default PrivateRoute;
