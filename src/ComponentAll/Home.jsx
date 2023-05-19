import React from 'react';
import Navbar from '../SharedAllFile/NavbarSection';
import NavbarSection from '../SharedAllFile/NavbarSection';
import { Outlet } from 'react-router-dom';
import HeavyFooter from '../SharedAllFile/HeavyFooter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {



    return (
        <div className='container-fuild'>


<div>
<NavbarSection />
</div>

<div className='distanceFixing'>
  <Outlet />
  <ToastContainer
position="top-center"
autoClose={2500}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

<ToastContainer />
</div>



<div>
  <HeavyFooter />
</div>

            
        </div>
    );
};

export default Home;