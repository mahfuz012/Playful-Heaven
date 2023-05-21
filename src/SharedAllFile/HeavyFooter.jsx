import React from 'react';
import { FaSnapchat, FaInstagram,FaTelegram, FaTwitter, FaWhatsapp,FaFacebook, } from 'react-icons/fa';



const HeavyFooter = () => {
    return (
    
    <div className=" lg:text-left sm:mt-20">

     

      <div className="py-10 flex  bg-teal-50 md:text-left justify-center">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="">
          <img src='https://i.ibb.co/gWDXww0/Untitled-design.png' className=' ' />

            <h4
              className="sm:-my-1 py-3 border-t-8 border-purple-600 mb-4 flex items-center justify-center font-extrabold text-3xl md:justify-start">

              Playful Heaven
            </h4>
            <p>
            
            </p>
          </div>

          <div className="text-center ">
            <h6
              className="text-purple-800 mb-4 text-center  font-bold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4 ">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Appetizers</a>

            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Entrées</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Sides</a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Desserts</a>
            </p>
          </div>

          <div style={{alignItems:"center"}} className='text-center sm:flex sm:flex-col '>
            <h6
              className="text-purple-800 mb-4 flex justify-center font-bold uppercase text-center">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Pricing</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >My Toys</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Add A Toy</a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200"
              >Help</a>
            </p>
          </div>

          <div style={{alignItems:"center"}} className=' sm:flex sm:flex-col '>
            <h6
              className="text-purple-800 mb-4 flex  justify-center font-bold uppercase md:justify-start">
              Contact Address
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">

              USA, PL 5417
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">

              Something@example.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">

              + 08 XXXXXXXX
            </p>
            <p className="flex items-center justify-center md:justify-start">

              + 08 XXXXXXXX
            </p>
          </div>
        </div>
      </div>



      <div className="bg-gradient-to-r  flex items-center justify-center border-b-2 border-purple-200 p-6 dark:border-neutral-500 ">
       
       <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
     <FaFacebook className='hover:transform hover:scale-150 transition-all duration-300 text-2xl text-blue-700' />
   </a>
   <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
     <FaTwitter className='hover:transform hover:scale-150 transition-all duration-300 text-2xl text-blue-700' />
   </a>
   <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
     <FaWhatsapp className='hover:transform hover:scale-150 transition-all duration-300 text-2xl text-blue-700' />
   </a>
   <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
     <FaInstagram className='hover:transform hover:scale-150 transition-all duration-300 text-2xl text-blue-700' />
   </a>
   <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
     <FaTelegram className='hover:transform hover:scale-150 transition-all duration-300 text-2xl text-blue-700' />
   </a>
   <a href="#!" className="text-neutral-600 dark:text-neutral-200">
     <FaSnapchat className='hover:transform hover:scale-150 transition-all duration-300 text-2xl text-blue-700' />
   </a>

</div>







      <div className="border-b-8 border-purple-800  p-6 text-center">
        <span className='font-bold text-xl'>© 2023 Copyright : </span>
        <a
          className="font-bold text-xl text-purple-600 "
          href="https://tailwind-elements.com/"
        > Playful Heaven </a>
      </div>
    </div>
    );
};

export default HeavyFooter;