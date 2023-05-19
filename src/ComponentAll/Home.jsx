import React from 'react';
import Navbar from '../SharedAllFile/NavbarSection';
import NavbarSection from '../SharedAllFile/NavbarSection';
import { Outlet } from 'react-router-dom';
import HeavyFooter from '../SharedAllFile/HeavyFooter';

const Home = () => {



    return (
        <div className='container-fuild'>


<div>
<NavbarSection />
</div>

<div className='distanceFixing'>
  <Outlet />
</div>



<div>
  <HeavyFooter />
</div>

            
        </div>
    );
};

export default Home;