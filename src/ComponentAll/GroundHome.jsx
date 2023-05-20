import React from 'react';
import Banner from './HomePageInstrumentFile/Banner';
import Gallery from './HomePageInstrumentFile/Gallery';

const GroundHome = () => {
    return (
        <div className=' border border-red-800'>
         <div className=' border border-red-700'>  
        <Banner />
        </div> 


<div className=''>

<h1 className='text-5xl text-center my-5 p-5 font-semibold'>Exploring the Enchanting World of Animal Toys: <br></br>A Captivating Gallery</h1>
<div className='sm:px-20 sm:mb-10'>
<Gallery />
</div>


</div>


 </div>
    );
};

export default GroundHome;