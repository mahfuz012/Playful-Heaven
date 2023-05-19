import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProviderFile/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import lf20_mjlh3hcy from "../SharedAllFile/lf20_mjlh3hcy.json";
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';



const Login = () => {

    const {LoginItem,googleuser} = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')
    const location = useLocation()
    const navigation = useNavigate()
  const locationBack = location?.state?.from?.pathname || "/"


    const notify = () => toast.success('Successfully Login', {
        position: "top-center",
autoClose: 2500,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
        });


const googleSubmit = () =>{
    googleuser()
}






const loginSubmituser =(e)=>{
    setErrorMessage('')
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    LoginItem(email,password)
    .then((userCredit)=>{
        e.target.reset()
          notify()
        
          navigation(locationBack, { replace: true })


    }).catch( (error) =>{
               const errorCodes = error.code;
                if (errorCodes === "auth/wrong-password") {
                    setErrorMessage("password not match, please again")
                } else if (errorCodes === "auth/user-not-found") {
                    setErrorMessage("You have no account, register Now ")
                }

    })
}









    return (
        <div className='sm:flex sm:justify-center'>

            <div className='px-10 sm:px-0 sm:w-5/12 mx-auto'>
              <form onSubmit={loginSubmituser} className='my-5 py-5  sm:text-center '>
                <h1 className='text-purple-600 text-3xl font-bold my-5'>Login User</h1>


                <input className='border rounded-2xl border-purple-300  w-full sm:w-64 my-2 p-2 ' type='email' placeholder='type your email' name='email' required>
                </input>  <br />

                <input className='w-full sm:w-64 rounded-2xl border-purple-300 border  my-2 p-2 ' type='password' placeholder='type your password' name='password' required></input>  <br />



                <input className=' border w-ful  sm:w-52 rounded-2 my-2 p-2 rounded-md  text-white bg-purple-800' type='submit' ></input>



                <p className='text-red-700 font-bold my-3'>{errorMessage}</p>
                <p className='my-5 px-5'>If Registration has not yet, then

                    <Link to={'/register'} className='font-bold text-xl mx-1 text-blue-700'> Registration</Link></p>


<div className=''>

    <button onClick={googleSubmit} className='btn bg-white text-black border border-purple-600'>
    <FcGoogle className='me-2 text-2xl ' />
        Google</button>


</div>
            </form>





            </div>

            <div className=' sm:w-5/12 p-10'>
                <Lottie className='w-3/4' animationData={lf20_mjlh3hcy} loop={true} />;
            </div>


        </div>
    );
};

export default Login;