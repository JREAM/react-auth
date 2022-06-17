import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import "../../styles/dashboard/Tasks.css"

function Tasks() {
  const navigate = useNavigate()

  return (
    <>
      <div className="tasks">
        <div className="tasks__container">
          Tasks List
        </div>
      </div>
    </>
  )
}

export default Tasks
