import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import LottieErrorAnimation from "../ErrorHandleFile/lottie.json"
import { AiOutlineHome } from 'react-icons/ai'


const ErrorHandle = () => {
    const Error = useRouteError();

    return (
        <div className='sm:flex justify-center sm:order-1 sm:my-0'>
   
      <div className='sm:w-5/12 '>

      <Lottie 
        animationData={LottieErrorAnimation} 
        loop={true} />
      </div>
      <div style={{alignItems:"center"}} className='sm:w-4/12  flex justify-center'>
       
       <Link to={'/'}> <button className='btn sm:order-2 bg-purple-900  shadow-lg ' >
           <AiOutlineHome  className='me-2'/>
           Go Home 
           
           </button></Link>

     </div>
        </div>
    );
};

export default ErrorHandle;