import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext,useState  } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Navbar from '../Navbar/Navbar';

const Login = () => {
    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();


     const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => console.error(error))
    }
  
    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

   const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate('/');
        })
        .catch(error =>{
             console.error(error)
             setError(error.message);
            })
    }

    
  return (
    <div className=''>
      <Navbar></Navbar>
      <form onSubmit={handleSubmit} className='text-center  my-5 py-5 bg-red-100 lg:mx-96 rounded mt-20 mx-3'>
          <h2 className='py-7 font-bold' >Please login</h2>
        <input className='p-3 my-5 rounded' type="email" name="email" required id="" placeholder="Your Email" />
        <br />
        <input className='p-3 my-5 rounded' type="password" required name="password" id="" placeholder="Yor Password" />
        
        <br />
        <Link to='/register'><button className='py-3'>Are You New?Please Register</button></Link>
        
        <div className="">
          <button
          className="font-bold bg-red-300 px-4 py-2 rounded"
          type="submit"
        >
          Login
        </button>
        <br/>
        <button
        onClick={handleGoogleSignIn}
          className="font-bold bg-cyan-300 px-10 py-3 mt-5 rounded"
          type="submit"
        >
          Log in with Google
        </button>
        </div>
       
      </form>
    </div>
  )
}

export default Login
