import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
   const {user,loading} = useContext(AuthContext);
   
   if(loading) {
       return <div>Loading...</div>
   }

   if (user && user.uid){
       return children;
   }
   return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;