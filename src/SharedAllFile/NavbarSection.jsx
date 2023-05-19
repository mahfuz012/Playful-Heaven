import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavbarSection = () => {
    return (
        <div>
             <div className=" navbar bg-purple-100   border-b-4 border-b-purple-700 sm:justify-between">

      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

          <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-80 ">


          <li className='font-medium '>Home</li>
          <li className='font-medium sm:mx-3 '>Blog</li>

           


          

          </ul>
        </div>

        <a className=" btn btn-ghost normal-case text-xl">
          <img src='https://i.ibb.co/gWDXww0/Untitled-design.png' />
          <span className='font-extrabold text-blue-700 font-mono'>
          Playful</span>
          <span className='mx-1 italic'>Heaven</span></a>
      </div>


     <div className=" navbar-center hidden lg:flex  px-2">


 <ul style={{alignItems:'center'}} className="menu  menu-horizontal px-1">


<li className='font-medium p-2 cursor-pointer hover:overline '>All Toys</li>
<Link to={'/'}><li className='font-medium p-2 cursor-pointer hover:overline '>Home</li></Link>
<li className='font-medium p-2 cursor-pointer hover:overline '>My Toys</li>
<li className='font-medium p-2 cursor-pointer hover:overline '>Add A Toy</li>
<Link to={'/blogs'}><li className='font-medium p-2 cursor-pointer hover:overline '>Blogs</li></Link>
      
<button className='btn bg-fuchsia-700 border-none sm:mx-2'>Login</button>


</ul>



       

      </div>


    </div>
        </div>
    );
};

export default NavbarSection;