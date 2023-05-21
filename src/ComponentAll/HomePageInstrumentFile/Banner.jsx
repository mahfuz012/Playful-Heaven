import React from 'react';

const Banner = () => {
    return (
<div className=' bg-clolor  flex justify-center flex-wrap '>


<div className='sm:w-5/12  p-3  clip-color-banner'>

  <h1 style={{fontFamily:"sans-serif"}} 
  className='text-8xl mt-5 text-white font-bold my-2'>Roar into Fun!</h1>
  <p className='text-5xl text-white '>Discover the Wild World of
   <span className='mx-5 italic font-bold text-yellow-300'>Animal</span></p>
   <p className='text-7xl  sm:w-2/4 flex justify-center p-1 bg-purple-600 uppercase my-5 font-bold text-white rounded-full'> Toys</p>

        </div>



            <div className=' sm:w-6/12 '>
    <img className=' ' src='https://i.ibb.co/dKynfnm/Yellow-Blue-Gradient-3-D-Math-Club-Blog-Banner.png' />
            </div>



        </div>
    );
};

export default Banner;