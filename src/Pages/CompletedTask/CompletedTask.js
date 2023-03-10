import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function CompletedTask() {
  const data = useLoaderData()
  const filteredTask = data.filter((d) => d.status === 'complete')
  const [displayTasks, setDisplayTasks] = useState(filteredTask)
  console.log(filteredTask)
  //   setDisplayTasks(filteredTask)

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
    <div className='h-screen'>
      <Navbar></Navbar>
      <div className="bg-red-100 p-10 text-center lg:mx-36 mx-3 mt-20">
        <div className="text-center font-bold py-5 ">All Completed Tasks</div>
        {displayTasks.map((task, index) => (
          <p className="py-5 font-bold" key={index}>
            {task.taskList}

            <button
              className="bg-red-400 mx-2 px-2 rounded"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </button>
            <input className='text-center' type="text" name="" id="" placeholder="Completed"/>
          </p>
        ))}
      </div>
    </div>
  )
}

export default CompletedTask
