



import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';




const PrivateRout = ({children}) => {

const location = useLocation()
    const {user , loading } = useContext(AuthContext) ;
//console.log(location)

    if(loading){
        <span className="loading loading-spinner text-error"></span>
    }


    if(user){
        return children ;
    }
else{
   return <Navigate to="/signIn" state={location?.pathname}></Navigate>
}


   
};

export default PrivateRout;