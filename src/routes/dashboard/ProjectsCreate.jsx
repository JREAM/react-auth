import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { db } from '../../firebase-config'

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
      <div className="container">

      <div className='breadcrumbs'>
          <span><Link to="/">Home</Link> / <Link to="/dashboard">Dashboard</Link> / Project Create</span>
        </div>

        <div className="row">
          <div className="column">
            <h2>Project: Create</h2>
            {message && <div className="info">message</div>}

            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <fieldset>

                <label htmlFor="title">Project Title</label>
                <input
                  type="text"
                  id="title"
                  {...register("title",
                  {required: "Project Title is Required"})}
                />
                {errors?.title && <div className="error">{errors.title.message}</div>}

                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  {...register("description",
                  {required: "Description is required"})}
                ></textarea>
                {errors?.description && <div className="error">{errors.description.message}</div>}

                <input type="submit" />

              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsCreate
