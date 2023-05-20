import React from 'react';
import { FcUndo } from 'react-icons/fc';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {

const getData = useLoaderData()







    return (
        <div className='container p-5'>
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
    getData.map((p,index)=><AllData key={index} index={index} data={p}/>)
  }
      </tbody>
      

  </table>
</div>
        </div>
    );
};


function AllData({data,index}){
 const {_id,seller_name,Name,Sub_category,Price,Available_quantity,}  = data
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






