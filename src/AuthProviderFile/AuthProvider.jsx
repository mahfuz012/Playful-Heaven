import app from '../FirebaseInitFile/FirebaseFile'
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext([])

const AuthProvider = ({children}) => {

const [userID, setuserID] = useState(null)
const [loader,setLoader] = useState(true)

const auth = getAuth(app)
console.log(auth);

const RegisterItem = (email,password) =>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
const LoginItem = (email,password) =>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
}
const LogoutItem = () =>{
    return signOut(auth)
}

const googleProvider = new GoogleAuthProvider();
const googleuser = () =>{
    setLoader(true)
return signInWithPopup(auth, googleProvider)
}








useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, currentUser => {
        setuserID(currentUser)
        setLoader(false)
    })


    return () => {
        return unsubcribe()
    }


}, [])













const dataValuePass = {googleuser,RegisterItem,LoginItem,LogoutItem,userID,loader}


    return (
        <div>
        <AuthContext.Provider value={dataValuePass} >
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;