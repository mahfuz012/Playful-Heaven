import React from 'react';
import Banner from './HomePageInstrumentFile/Banner';
import Gallery from './HomePageInstrumentFile/Gallery';
import Faq from './HomePageInstrumentFile/Faq';

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

<p className='text-center font-bold text-5xl text-indigo-700'>Sneak Peek: Exciting Upcoming Toys!</p>










<p className='text-center font-bold text-3xl mt-11 text-violet-700 mb-5'>Frequently Asked Questions (FAQ)</p>
<Faq />









</div>
    );
};

export default GroundHome;