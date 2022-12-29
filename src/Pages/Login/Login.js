import React, { useContext,useState  } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            //console.log(user);
            form.reset();
            //setError('');
            Navigate('/');
        })
        .catch(error =>{
             console.error(error)
             //setError(error.message);
            })
    }
  return (
    <div className=''>
      
      <form onSubmit={handleLogin} className='text-center  my-5 py-5 bg-red-100 mx-60'>
          <h2 className='py-7' >Please login</h2>
        <input className='p-5 my-5' type="email" name="email" required id="" placeholder="Your Email" />
        <br />
        <input className='p-5 my-5' type="password" required name="password" id="" placeholder="Yor Password" />
        
        <br />
        <Link to='/register'>Register Now</Link>
        
        <button
          className="font-bold bg-red-300 px-4 py-2 rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
