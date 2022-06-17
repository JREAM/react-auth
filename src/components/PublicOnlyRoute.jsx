import React from "react"
import { Navigate } from "react-router-dom"
import { useUserAuth } from '../context/UserAuthContext'

const PublicOnlyRoute = ({ children }) => {
  const { user } = useUserAuth()

  console.log(user)

  if (!user) {
    return children
  }
  return <Navigate to="/dashboard" />
};

export default PublicOnlyRoute;
