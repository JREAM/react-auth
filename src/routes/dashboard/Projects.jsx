import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { query, collection, getDocs, where } from "firebase/firestore"
import { auth, db } from "../../lib/firebase"

import "../../styles/dashboard/Projects.css"

function Projects() {
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) return
    if (!user) return navigate("/")
  }, [user, loading])

  return (
    <>
      { loading &&
        <div id="loader-container">
          <div id="loader"></div>
        </div>
      }
      <div className="projects">
        <div className="projects__container">
          Project List
        </div>
      </div>
    </>
  )
}

export default Projects
