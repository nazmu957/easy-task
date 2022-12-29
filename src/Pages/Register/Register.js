import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError ] = useState('');
     const [accepted, setAccepted] = useState(false);
    const {createUser,updateUserProfile} = useContext(AuthContext);
   
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
       
         createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name );
        })
        .catch(e => {
            console.error(e);
            setError(e.message);
        });
    }
    const handleUpdateUserProfile = (name) =>{
        const profile ={
            displayName: name,
            
        }
        updateUserProfile(profile)
        .then(() =>{})
        .catch(error => console.error(error));
    }
    return (
       <div>
      
      <form onSubmit={handleSubmit} className='text-center my-5 py-5 bg-red-100 mx-60'>
          <h2 className='py-7' >Please Register Now</h2>
        <input className='p-5 my-5' type="text" name="name" id="" placeholder="Your Name" />
        <br/>
        <input className='p-5 my-5' type="email" name="email" id="" placeholder="Your Email" />
        <br />
        <input className='p-5 my-5' type="password" name="password" id="" placeholder="Your Password" />
        <br />
        <Link to='/login'>Already have ana account?</Link>
        <button
          className="font-bold bg-red-300 px-4 py-2 rounded"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
    );
};

export default Register;