import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import "../../styles/dashboard/Projects.css"

function Projects() {
  const navigate = useNavigate()

  return (
    <>
      <div className="projects">
        <div className="projects__container">
          Project List
        </div>
      </div>
    </>
  )
}

export default Projects
