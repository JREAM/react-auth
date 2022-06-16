import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { query, collection, addDoc, getDocs, where } from "firebase/firestore"
import { auth, db } from "../../lib/firebase"
import { useForm } from 'react-hook-form'

import "../../styles/dashboard/ProjectsCreate.css"

function ProjectsCreate() {
  const [user, loading, error] = useAuthState(auth)
  const [message, setMessage ] = useState()
  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: {errors}} = useForm({
    mode: "onBlur"
  })

  const onSubmit = async(data) => {
    console.log('Submit:', data)
    try {
      const docs = await getDocs(query(
        collection(db, "projects"),
        where("uid", "==", user.uid)
      ))
      // If No User Exists, Create a record for GitHub
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "projects"), {
          uid: user.uid,
          title: data.title,
          description: data.description,
        })
      }
      setMessage(`Project "${data.title}" saved!`)
    } catch (err) {
      console.log(err)
      alert(err.message)
    }
  }

  const onError = (data) => {
    console.log('Error:', data)
  }

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
      <div className="projects_create">
        <div className="projects_create__container">
          <h2>Project: Create</h2>
          {message && <p>{message}</p>}
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
