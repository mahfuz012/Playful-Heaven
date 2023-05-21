import React, { useEffect } from 'react';
import { FcUndo } from 'react-icons/fc';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitles';
import { useState } from 'react';

const AllToys = () => {

  useTitle('Pheaven | AllToy')
 

  
// const data = useLoaderData()
const [data,setdata] = useState([])

useEffect(()=>{
  fetch(`https://playful-heaven.vercel.app/userdata`)
  .then(res=>res.json())
  .then(data=>setdata(data))
},[])





const [textdata,setText] = useState([])

useEffect(()=>{
fetch(`https://playful-heaven.vercel.app/namedata?Name=${textdata}`,)
      .then(res=>res.json())
      .then(data=>setdata(data))
  

},[textdata])




function clicksearchitems(e){
e.preventDefault()
const text= e.target.text.value
setText(text)
}


const sortAscending = () => {
  fetch('https://playful-heaven.vercel.app/finddata?sort=ascending')
    .then((res) => res.json())
    .then((data) => setdata(data));
};

const sortDescending = () => {
  fetch('https://playful-heaven.vercel.app/finddata?sort=descending')
    .then((res) => res.json())
    .then((data) => setdata(data));
};

useEffect(() => {
 
  setdata(data);
}, [data]);

    return (
        <div className='container p-5'>


<div className='sm:flex sm:justify-evenly'>
<div style={{alignItems:"center"}} className='flex'>
  <p className='font-bold text-purple-800'>Data Find : </p>
  <form onSubmit={clicksearchitems}>
  <input name='text' type='text' className='mx-2 border p-2 rounded-xl' placeholder='search your Toy Name' />
  <input type='submit' className='btn bg-purple-700' />
  </form>
 </div>
 
<div>
  <button onClick={sortAscending} className='border-none mx-2 btn bg-blue-600'>ascending </button>
  <button onClick={sortDescending} className='border-none mx-2 btn bg-green-600'>descending </button>
</div>
</div>



            <div className="overflow-x-auto">
  <table className="table w-full my-20 border-2 border-purple-800">

    <thead className=''>
      <tr className='text-center '>
        <th className='bg-purple-700 rounded-none text-white'>No:</th>
        <th className='bg-purple-700 rounded-none text-white'>Seller:</th>
        <th className='bg-purple-700 rounded-none text-white'>Toy Name</th>
        <th className='bg-purple-700 rounded-none text-white'>Sub-category</th>
        <th className='bg-purple-700 rounded-none text-white'>Price</th>
        <th className='bg-purple-700 rounded-none text-white'>Available Quantity</th>
        <th className='bg-purple-700 rounded-none text-white'>View Details</th>
      </tr>
    </thead>

<tbody>
    
  {
    data.map((p,index)=><AllData key={index} index={index} data={p}/>)
  }
      </tbody>
      

  </table>
</div>
        </div>
    );
};


function AllData({data,index}){
 const {_id,seller_name,Name,Sub_category,Price,Available_quantity}  = data
    return(

        <tr className='text-center '>
        <td className='border-purple-200 font-semibold'>{index+1}</td>
        <td className='border-purple-200 font-semibold'>{seller_name}</td>
        <td className='border-purple-200 font-semibold'>{Name}</td>
      
        
        <td className='border-purple-200 font-semibold'>{Sub_category}</td>
        <td className='border-purple-200 font-semibold'>{Price}</td>
        <td className='border-purple-200 font-semibold'>{Available_quantity}</td>
        <td className='border-purple-200 font-semibold'>
    <Link to={`/singleDetails/${_id}`}><button  className='btn w-20 text-white font-bold  bg-fuchsia-700 border-none'>Details</button></Link>

        </td>
        </tr>

)
}












export default AllToys;






