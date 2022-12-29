import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
 
  return (
    <div className="flex justify-center w-full py-5 bg-teal-100">
        <h3 className='font-bold text-sm lg:mr-24 mr-3'><Link to='/addTask'>AddTask</Link></h3>
        <h3 className='font-bold text-sm lg:mr-24 mr-3'><Link to='/myTask'>MyTask</Link></h3>
        <h3 className='font-bold text-sm lg:mr-24 mr-3'><Link to='/completedTask'>CompletedTask</Link></h3>
        <h3 className='font-bold text-sm lg:mr-24 mr-3'><Link to='/login'>Login</Link></h3>
        
    </div>
  )
}

export default Navbar
