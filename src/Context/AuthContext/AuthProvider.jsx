import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../../Firebases/FirebaseInit'
import {  signOut } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";



const AuthProvider = ({children}) => {

const [user , setUser ] = useState(null) ;
const [loading , setLoading ] = useState(true) ;
const provider = new GoogleAuthProvider();


const createUser = (email, password ) => {
    setLoading(true) ;
   return createUserWithEmailAndPassword(auth ,email, password)

}



const signIn = (email , password) => {
    setLoading(true) 
   return  signInWithEmailAndPassword(auth , email , password)
 
}


const signOutUser = () => {
    setLoading(true) ;
    return signOut(auth)
}

const signWithGoogle = () => {
    setLoading(true) 
    signInWithPopup(auth , provider)
   
}

useEffect(() => {
    const unsubsribe =  onAuthStateChanged(auth , currentUser => {
       setUser(currentUser) ;
       console.log('user: ' , currentUser)
       setLoading(false) ;
   })
   return () => {
       unsubsribe() ;
   }
    } , [])


const authInfo = {
    user , 
    loading ,
    createUser , 
    signIn ,
    signOutUser ,
    signWithGoogle ,   
}





    return (
<AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
    );
};

export default AuthProvider;























