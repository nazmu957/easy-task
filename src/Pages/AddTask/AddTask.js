import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const AddTask = () => {
  const handleAddTask = (event) => {
    event.preventDefault()
    const form = event.target
    const taskList = form.description.value
    const img = form.img.file
    console.log(taskList,img)
    const newList = {
      taskList,
      status: 'uncompleted',
    }

    fetch('https://easy-task-server-inky.vercel.app/addTask', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert('Task added successfully')
          event.target.reset()
        }
      })

    //console.log(newList);
  }
  return (
    <div className='h-screen'>
      
      <div className="grid  grid-cols-1 bg-red-100 p-20 lg:m-32 rounded " >
        <h1 className="text-center font-bold py-5 text-2xl">Welcome To Easy Task To Make Your Life Easy</h1>
        <form className='pt-10 ' onSubmit={handleAddTask}>
          {/* <input type="text" name="text" id="" placeholder="Give your task" /> */}
          <textarea
            name="description"
            className="textarea w-full text-center py-2 rounded"
            placeholder="Add Your Task"
            required
          ></textarea>
          
          <div className='flex justify-center pt-5'> 
            <button
            className="font-bold bg-red-300 px-4 py-2  rounded"
            type="submit"
          >
            Submit
          </button>
          <Link to='/details'>
          
          <button
            className="font-bold bg-red-300 px-4 py-2 ml-5 rounded"
            type="submit"
          >
            Details
          </button>
          
          </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask
