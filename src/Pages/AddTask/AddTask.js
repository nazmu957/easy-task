import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';


const AddTask = () => {
  const handleAddTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const taskList = form.description.value;
    console.log(taskList);
    const newList ={
        taskList,
        status: 'uncompleted'
    }

    fetch('http://localhost:5000/addTask', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newList)
    })
    .then(res => res.json())
    .then(data =>  {
      if(data.acknowledged){
        alert('Task added successfully');
        event.target.reset();
      }
    })

    //console.log(newList);


   
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className='grid  grid-cols-1 bg-red-100 p-20'>
      <h1 className='text-center font-bold py-5'>Add Your Task</h1>
      <form onSubmit={handleAddTask}>
        {/* <input type="text" name="text" id="" placeholder="Give your task" /> */}
        <textarea
          name="description"
          className="textarea w-full "
          placeholder="Add Your Task"
          required
        ></textarea>
        <button className='font-bold bg-red-300 px-4 py-2 rounded' type="submit">Enter</button>
      </form>
    </div>
    </div>
  )
}

export default AddTask
