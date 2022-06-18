import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"

function Dashboard() {
  const { user } = useAuth()

  return (
    <>
      <div className="container">

        <div className='breadcrumbs'>
          <span><Link to="/">Home</Link> / Dashboard</span>
        </div>

        <h2>Dashboard</h2>

        <div className="row">
          <div className="column">
            <div className="success">
            You are logged in with: <b>{user?.email}</b>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <Link to="/dashboard/projects/create">
              <button className="big">Create Project</button>
            </Link>
          </div>
          <div className="column">
            <Link to="/dashboard/projects">
              <button className="big">All Projects</button>
            </Link>
          </div>
          <div className="column">
            <Link to="/dashboard/tasks">
              <button className="big">Tasks</button>
            </Link>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p>
              Duis anim ex labore reprehenderit laborum tempor id. Laboris cupidatat proident veniam aute mollit veniam incididunt laboris occaecat proident incididunt qui labore incididunt. Dolor id nulla do laboris cupidatat sit enim reprehenderit veniam id dolor pariatur eiusmod dolor. Id ad sit excepteur mollit consequat. Do aute deserunt ad reprehenderit nulla quis laborum reprehenderit eu mollit. Nulla ex ea eu exercitation veniam deserunt culpa dolore mollit deserunt officia sit officia. Eu mollit labore ipsum tempor culpa aliquip.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
