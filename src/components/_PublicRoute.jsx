import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from '../context/AuthProvider'

const PublicRoute = ({ children }) => {
  const { user } = useAuth()

  console.info('[PublicRoute] User: ', user)

  if (!user) {
    return children
  }
  return <Navigate to="/dashboard" />
};

export default PublicRoute;
