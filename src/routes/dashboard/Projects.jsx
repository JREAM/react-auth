import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from '../../firebase-config'

import "../../styles/dashboard/Projects.css"

function Projects() {
  const [projects, setProjects] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const docs = await getDocs(query(
        collection(db, "projects"),
        where("uid", "==", user.uid),
        limit()
      ))
      setProjects(docs)
    })()

  }, [])

  return (
    <>
      <div className="projects">
        <div className="projects__container">
          Project List
          {projects && <span>Iterate Them Here</span>}
        </div>
      </div>
    </>
  )
}

export default Projects
