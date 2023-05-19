import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import groovyWalkAnimation from '../SharedAllFile/groovyWalkAnimation.json'

const Register = () => {


const registerSubmitNow = (e) =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.text.value;
    const confirm = e.target.confirm.value;
    const photoURL = e.target.url.value;
console.log(email,password);
}









    return (
        <div className=' sm:flex sm:justify-center'>

           <div className=' sm:w-5/12 p-5'>
           <Lottie  animationData={groovyWalkAnimation} loop={true} />;
           </div>



           

<div className='px-10 sm:px-0 sm:w-5/12 mx-auto '>

<form  onSubmit={registerSubmitNow} className=' my-5 py-5  sm:text-center '>
<h1 className='text-purple-600 border-b-4 pb-5 border-purple-900 text-3xl font-bold my-5'>Registration Now</h1>
<input className='border border-purple-300 w-full sm:w-64 my-2 p-2 rounded' type='text' placeholder='Type your Name' name='text' required>
 </input>  <br />


                <input className='border border-purple-300 w-full sm:w-64 my-2 p-2 rounded' type='email' placeholder='type your Email' name='email' required>
                </input>  <br />

 <input className='border border-purple-300 w-full sm:w-64 my-2 p-2 rounded' type="url" placeholder='Type your Profile URL' name='url' required>
                </input>  <br />

                <input  className='border-purple-300 w-full sm:w-64 border  my-2 p-2 ' type='password' placeholder='type your password' name='password' required></input>  <br />
                <p className='text-red-700 font-bold'></p>
                <input className='border-purple-300 w-full sm:w-64 border  my-2 p-2 ' type='password' placeholder='Confirm your password' name='confirm' required></input> <br />



                <input value="Register" className='  w-52 rounded-2 my-2 p-2 rounded-md bg-purple-600 text-white' type='submit' ></input>

             


                <p className='my-5 px-5'>Login if you have registered before, click

                    <Link to={'/login'} className='font-bold text-xl mx-1 text-blue-700'>Login</Link></p>




            </form>
</div>
     
            
        </div>
    );
};

export default Register;