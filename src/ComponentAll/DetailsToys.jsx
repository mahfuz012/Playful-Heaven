import React from 'react';
import { useLoaderData } from 'react-router-dom';



const DetailsToys = () => {
    const getId = useLoaderData();
  
   const {image_url,
    Name,
    seller_email,
    Rating,

    seller_name,
    Available_quantity,
    Price,
    Detail_description}  = getId


    return (
        <div className='container sm:my-20'>

<div className="card lg:card-side bg-base-100 border my-20 sm:my-0 shadow-xl">

<img src={image_url} className='sm:w-2/4' />


    <div className='px-5 py-8 sm:flex sm:flex-col sm:justify-center'>
    <p className="font-bold text-2xl my-2">Toy Name : <span className='font-bold text-xl text-purple-700'>{Name}</span></p>
    <p></p>
  <p className = "font-bold text-2xl my-2">Price : <span className='text-purple-700'>{Price}$</span></p>
<p className='font-bold'>Rating: {Rating}</p>





<p className='font-bold mb-2'>Quantity: {Available_quantity}</p>



  <p className = "font-semibold ">Seller Name :  <span className='text-purple-700'>{seller_name}</span></p>
  <p className = "font-semibold ">Seller Email : <span className='text-purple-700'>{seller_email}</span></p>
<p className='font-bold  my-5'>Details : <span className='font-normal'>{Detail_description}</span> </p>



    </div>






   

</div>
        </div>
    );
};

export default DetailsToys;