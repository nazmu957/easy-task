import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider/AuthProvider'


const Navbar = () => {
  const [state, setState] = useState(false)
  const toggle = () => {
    setState(!state)
  }

  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error))
  }
  return (
    <div className="flex justify-center w-full py-5 bg-teal-100">
        <h3 className='font-bold text-sm lg:mr-24 mr-3'><Link to='/addTask'>AddTask</Link></h3>
        <h3 className='font-bold text-sm lg:mr-24 mr-3'><Link to='/myTask'>MyTask</Link></h3>
        <h3 className='font-bold text-sm lg:mr-24 mr-3'><Link to='/completedTask'>CompletedTask</Link></h3>
        <h3 className='font-bold text-sm lg:mr-24 mr-3'><Link to='/login'>
          
          {user?.uid ? (
                <>
                  {/* <span>{user?.displayName}</span> */}
                  <button className="fs-5 fw-bold bg-primary bg-opacity-10 border-0 text-primary" onClick={handleLogOut}> Log out</button>
                </>
              ) : (
                <div className="d-flex">
                  <Link
                    className="text-decoration-none fs-5 fw-bold mt-1 ms-3"
                    to="/login"
                  >
                    LogIn
                  </Link>
                 
                </div>
              )}
          
          </Link></h3>
        
    </div>
  )
}

export default Navbar
