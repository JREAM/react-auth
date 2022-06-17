import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import "../styles/Dashboard.css"

function Dashboard() {

  return (
    <>
      <div className="dashboard">
        <div className="dashboard__container">
          <ul>
            <li>
              <Link to="/dashboard/projects/create">
                Create Project
              </Link>
            </li>
            <li>
              <Link to="/dashboard/projects">
                All Projects
              </Link>
            </li>
            <li>
              <Link to="/dashboard/tasks">
                Tasks
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Dashboard
