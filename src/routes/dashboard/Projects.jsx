import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from '../../firebase-config'

function Projects() {
  const [projects, setProjects] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column">
            <h2>Projects</h2>
            {projects && <span>Iterate Them Here</span>}
            <p>
              Anim nostrud ut velit aliqua nisi ullamco elit nostrud laboris fugiat in sunt. Esse pariatur eu pariatur Lorem fugiat nisi eiusmod. Fugiat sint quis et ea dolor. Veniam non ipsum magna sint nostrud eiusmod Lorem ex velit. Excepteur deserunt tempor qui cillum pariatur duis laboris nulla.
            </p>

            <p>
              Nisi dolore mollit do velit culpa tempor adipisicing ea nisi magna aliquip excepteur nulla. Qui exercitation enim adipisicing ullamco ea aliqua et fugiat. Consectetur quis consequat cillum aliqua elit esse ullamco Lorem et fugiat aute. Veniam incididunt tempor aliqua consequat sint exercitation aute dolore reprehenderit nisi pariatur.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
