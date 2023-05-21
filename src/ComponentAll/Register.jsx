import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import groovyWalkAnimation from '../SharedAllFile/groovyWalkAnimation.json'
import { AuthContext } from '../AuthProviderFile/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useState } from 'react';
import swal from 'sweetalert';
import Lottie from "lottie-react";
import useTitle from '../hooks/useTitles';



const Register = () => {
    useTitle('Pheaven | Register')
const {RegisterItem,LogoutItem} = useContext(AuthContext)
const [passwordMatch,setmatchPassoword]= useState('')
const navigationFile = useNavigate()


    const registerSubmitNow = (e) => {
        setmatchPassoword('')
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const displayName = e.target.text.value;
        const confirm = e.target.confirm.value;
        const photoURL = e.target.url.value;
      

        if(password === confirm){
        RegisterItem(email,password,displayName,photoURL)
        .then((credentialUser)=>{
             updateProfile(credentialUser.user, {
                displayName: displayName, photoURL: String(photoURL)
            }).then(() => {
                console.log("Profile updated successfully.");
            }).catch((error) => {
                console.log("Error updating profile: ", error);
            });


            swal({
                text: "successfully completed Registration",
                icon: "success",
            });

            LogoutItem()
            navigationFile('/login')

        }).catch((error)=>{
          const errorNotice = error.message;
                    if (errorNotice) {
                        swal("Oops!", "You are use same email!", "Try Another gmail");

                    }
        })

    }else{
        setmatchPassoword("password is not same")
    }







    }









    return (
        <div className=' sm:flex sm:justify-center'>

            <div className=' sm:w-5/12 p-5'>
                <Lottie animationData={groovyWalkAnimation} loop={true} />;
            </div>





            <div className='px-10 sm:px-0 sm:w-5/12 mx-auto '>

                <form onSubmit={registerSubmitNow} className=' my-5 py-5  sm:text-center '>
                    <h1 className='text-purple-600 border-b-4 pb-5 border-purple-900 text-3xl font-bold my-5'>Registration Now</h1>
                    <input className='border border-purple-300 w-full sm:w-64 my-2 p-2 rounded-2xl' type='text' placeholder='Type your Name' name='text' required>
                    </input>  <br />
                    <input className=' border border-purple-300 w-full sm:w-64 my-2 p-2 rounded-2xl' type='email' placeholder='Type your Email' name='email' required>
                    </input>  <br />

                    <input className='border border-purple-300 w-full sm:w-64 my-2 p-2 rounded-2xl' type="url" placeholder='Type your Profile URL' name='url' required>
                    </input>  <br />

                    <input className='rounded-2xl border-purple-300 w-full sm:w-64 border  my-2 p-2 ' type='password' placeholder='Type your password' name='password' required></input>  <br />
                    <p className='text-red-700 font-bold'></p>
                    <input className='rounded-2xl border-purple-300 w-full sm:w-64 border  my-2 p-2 ' type='password' placeholder='Confirm your password' name='confirm' required></input> <br />



                    <input value="Register" className='  w-52 rounded-2xl my-2 p-2 rounded-2xl-md bg-purple-600 text-white' type='submit' ></input>


                    <p className='text-red-600 font-bold'>{passwordMatch}</p>


                    <p className='my-5 px-5'>Login if you have registered before, click

                        <Link to={'/login'} className='font-bold text-xl mx-1 text-blue-700'>Login</Link></p>



                </form>
            </div>


        </div>
    );
};

export default Register;