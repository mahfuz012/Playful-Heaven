import React, { useContext } from 'react';
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = useContext([])
const AuthProvider = ({children}) => {




















    return (
        <div>
        <AuthContext.Provider value={data} >
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;