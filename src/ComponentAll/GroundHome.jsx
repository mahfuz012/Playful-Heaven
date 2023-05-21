import React from 'react';
import Banner from './HomePageInstrumentFile/Banner';
import Gallery from './HomePageInstrumentFile/Gallery';
import Faq from './HomePageInstrumentFile/Faq';
import Swipper from './HomePageInstrumentFile/Swipper';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TeddyBears from '../TabFilesAdd/TeddyBears';
import Dinosourse from '../TabFilesAdd/Dinosourse';
import Magical from '../TabFilesAdd/Magical';
import useTitle from '../hooks/useTitles';












const GroundHome = () => {
  useTitle('Pheaven | Home')
    return (
        <div className='  '>
         <div className=' '>  
        <Banner />
        </div> 


<div className=''>
<h1 className='text-5xl text-center my-5 p-5 font-semibold'>Exploring the Enchanting World of Animal Toys: <br></br>A Captivating Gallery</h1>
<div className='sm:px-20 sm:mb-10'>
<Gallery />
</div>
</div>




<p className='text-purple-800 my-10 font-bold text-center sm:text-5xl'>Shop by category-</p>
<div className=''>
<Tabs className="">
    <TabList className="text-center p-5 font-bold text-2xl">
      
      <Tab >Teddy Bears</Tab>
      <Tab >Dinosaur</Tab>
      <Tab >Magical Unicorn</Tab>
    </TabList>

    <TabPanel className="border">
<TeddyBears />
</TabPanel>


    <TabPanel>
   <Dinosourse />
    </TabPanel>
    <TabPanel>
 <Magical />
    </TabPanel>


  </Tabs>
</div>








<p className='bg-violet-600 py-5 mt-20 px-5 sm:px-0 text-center font-bold text-2xl sm:text-5xl text-white'>Sneak Peek: Exciting Upcoming Toys!</p>

<Swipper />








<p className='text-center  font-bold text-3xl sm:mt-32 text-violet-700 mb-5'>Frequently Asked Questions (FAQ)</p>
<Faq />









</div>
    );
};

export default GroundHome;