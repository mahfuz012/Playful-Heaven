import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsToys = () => {
    const getId = useLoaderData();
   const {image_url,
    Name,
    seller_email,
    Rating,
    Sub_category,
    seller_name,
    Available_quantity,
    Price,
    Detail_description}  = getId


    return (
        <div className='container sm:my-20'>

<div className="card lg:card-side bg-base-100 border shadow-xl">
<img src={image_url} className='border w-2/4' alt="Album"/>

  <div className="card-body">
    <h2 className="card-title font-bold">Toy Name : <span className='font-bold text-2xl text-purple-700'>{Name}</span></h2>
    
  <p className = "font-bold text-xl">Price : <span className='text-purple-700'>{Price}$</span></p>
  





   
  </div>
</div>
        </div>
    );
};

export default DetailsToys;