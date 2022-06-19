import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from '../context/AuthProvider'

const PublicRoute = ({ children }) => {
  const { user } = useAuth()
  const location = useLocation()

  console.info('[PublicRoute] User: ', Math.round(Math.random() * 2000), user)
  if (user) {
    return <Navigate to="/dashboard" state={{ from: location }} />
  }
  return children
};

export default PublicRoute;
