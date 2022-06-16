import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { query, collection, getDocs, where } from "firebase/firestore"
import { auth, db, logout } from "../lib/firebase-config"

import "../styles/Dashboard.css"

function Dashboard() {
  const [user, loading, error] = useAuthState(auth)
  const [name, setName] = useState("")
  const navigate = useNavigate()

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid))
      const doc = await getDocs(q)
      const data = doc.docs[0].data()

      setName(data.name)
    } catch (err) {
      console.error(err)
      alert("An error occured while fetching user data")
    }
  }

  useEffect(() => {
    if (loading) return
    if (!user) return navigate("/")

    fetchUserName()
  }, [user, loading])

  return (
    <>
      { loading &&
        <div id="loader-container">
          <div id="loader"></div>
        </div>
      }
      <div className="dashboard">
        <div className="dashboard__container">
          Logged in as
          <div>{name}</div>
          <div>{user?.email}</div>
          <hr />
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
