import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviderFile/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
   
 const {userID,loader} = useContext(AuthContext)
   const location = useLocation()

   if(userID){
    return children
   }

if (loader) {
    return <progress className="progress w-56"></progress>
}



 return <Navigate to={"/login"} state={{from:location}} replace ></Navigate>
};

export default Private;




