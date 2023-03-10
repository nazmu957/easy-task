import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const MyTask = () => {
  const tasks = useLoaderData()
  console.log(tasks)
  const [displayTasks, setDisplayTasks] = useState(tasks)

  const handleUpdateTask = (id) => {
    fetch(`https://easy-task-server-inky.vercel.app/complete/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert('Task Completed')
        }
      })
  }

  const handleDelete = (task) => {
    const agree = window.confirm('Are you sure you want to delete?')

    if (agree) {
      fetch(`https://easy-task-server-inky.vercel.app/addTask/${task}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          //    console.log(data)
          if (data.deletedCount > 0) {
            alert('Task deleted successfully')
            const remainingTasks = displayTasks.filter(
              (tsk) => tsk._id !== task,
            )
            setDisplayTasks(remainingTasks)
          }
        })
    }
  }

  return (
    <div className='h-screen ' >
      <Navbar></Navbar>
      <h2 className="text-center font-bold py-5">
       My Total Tasks : {displayTasks.length}{' '}
      </h2>

      <div className="grid  grid-cols-1  bg-red-100 p-20 text-center lg:mx-28 mx-3 lg:mt-32  ">
        {displayTasks.map((task) => (
          <p className="font-bold my-5" key={task._id}>
            {task.taskList}
            <Link to={`/update/${task._id}`}>
              <button className="bg-cyan-200 mx-2 px-2  rounded">update</button>
            </Link>
            <Link to={`/complete/${task._id}`}>
              <button
                onClick={() => handleUpdateTask(task._id)}
                className="bg-green-300 mx-2 px-2 rounded"
              >
                Completed
              </button>
            </Link>

            <button
              className="bg-red-400 mx-2 px-2 rounded"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </button>
          </p>
        ))}
      </div>
    </div>
  )
}

export default MyTask
