import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const UpdateTask = () => {
  const storedTask = useLoaderData()

  const [task, setTask] = useState(storedTask)

  const handleUpdateTask = (event) => {
    event.preventDefault()

    fetch(
      `https://easy-task-server-inky.vercel.app/addTask/${storedTask._id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(task),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert('Task updated')
        }
      })
  }

  const handleInputChange = (event) => {
    const field = event.target.description
    const value = event.target.value
    const newList = { ...task }
    newList['taskList'] = value
    setTask(newList)
  }
  return (
    <div>
      <Navbar></Navbar>
      <h3 className="text-center font-bold py-5">Update Your Task </h3>
      <div className="grid  grid-cols-1 bg-red-100 p-20">
        <form onSubmit={handleUpdateTask}>
          <textarea
            onChange={handleInputChange}
            name="description"
            defaultValue={storedTask.taskList}
            className="textarea textarea-info w-full text-center py-3 rounded"
            placeholder="Update Your Task"
            required
          ></textarea>
          <button
            className="font-bold bg-cyan-300 px-4 py-2 rounded"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateTask
