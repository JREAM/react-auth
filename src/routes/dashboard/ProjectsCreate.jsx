import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { db } from '../../firebase-config'

function ProjectsCreate() {
  document.title = 'Project: Create'
  const [wasCreated, setWasCreated] = useState(false)
  const [message, setMessage] = useState('')
  const { register, handleSubmit, formState: {errors}} = useForm({
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
      setWasCreated(true)
      setMessage("Project has been saved")
      // @TODO Navigate to project list or something
    } catch (err) {
      console.error(err)
      setMessage(err)
      setWasCreated(false)
    }
  }

  const onError = (data) => {
    console.log('[Form Error]: ', data)
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

                <div className="form-control">
                  <label htmlFor="title">Project Title</label>
                  <input
                    type="text"
                    id="title"
                    {...register("title",
                    {required: "Project Title is Required"})}
                    className={errors?.title && 'error'}
                  />
                  {errors?.title && <div className="error">{errors.title.message}</div>}
                </div>

                <div className="form-control">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    {...register("description",
                    {required: "Description is required"})}
                    className={errors?.description && 'error'}
                  ></textarea>
                  {errors?.description && <div className="error">{errors.description.message}</div>}
                </div>

                {!wasCreated ?
                <button type="submit">
                Create
                </button>
                :
                <div className="info txt-center">
                  Creating your Project
                </div>
              }

              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsCreate
