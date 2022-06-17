import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { db } from '../../firebase-config'

import "../../styles/dashboard/ProjectsCreate.css"

function ProjectsCreate() {
  const [message, setMessage] = useState('')
  const { register, handleSubmit, watch, formState: {errors}} = useForm({
    mode: "onBlur"
  })
  const navigate = useNavigate()

  const onSubmit = async(data) => {
    console.log('Submit:', data)

    try {
      await addDoc(collection(db, "projects"), {
        uid: user.uid,
        name: data.name,
        description: data.description
      })
      setMessage("Project has been saved")
    } catch (err) {
      console.error(err)
      setMessage(err)
    }
  }

  const onError = (data) => {
    console.log('Error:', data)
  }

  return (
    <>
      <div className="projects_create">
        <div className="projects_create__container">
          <h2>Project: Create</h2>
          {message && <p>message</p>}

          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <fieldset>

              <label htmlFor="title">Project Title</label>
              <input
                type="text"
                id="title"
                {...register("title",
                {required: "Project Title is Required"})}
              />
              {errors?.title && <p>{errors.title.message}</p>}

              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                {...register("description",
                {required: "Description is required"})}
              ></textarea>
              {errors?.description && <p>{errors.description.message}</p>}

              <input type="submit" />

            </fieldset>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProjectsCreate
