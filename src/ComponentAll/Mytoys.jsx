import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProviderFile/AuthProvider';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useTitle from '../hooks/useTitles';


const Mytoys = () => {
  useTitle('Pheaven | MyToy')
const {userID} = useContext(AuthContext)
const getEmailId= userID?.email;
const [data,setdata] = useState([])
const array = ['Teddy Bears', 'Dinosaur', 'Magical Unicorn']

useEffect(()=>{
    if(userID){
        fetch(`https://playful-heaven.vercel.app/finddata?seller_email=${getEmailId}`,)
        .then(res=>res.json())
        .then(data=>setdata(data))
    }
 
},[])








function deletesubmit(props){
   const filterData = data.filter(p=>p._id !== props)

   swal({
    title: "Are you Serious ??",
     icon: "warning",
    dangerMode: true,
    buttons: true,
  })
  .then(willDelete => {
    if (willDelete) {
      
        
fetch(`https://playful-heaven.vercel.app/deletedata/${props}`,{
  method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
console.log(data)
swal("Deleted!", "Your file has been deleted!", "success");
})

      setdata(filterData)
}

  });
}





























    return (
        <div className='container-fluid p-5'>
        <div className="overflow-x-auto">
<table className="table w-8/12 mx-auto my-20 border-2 border-purple-800">

<thead className=''>
  <tr className='text-center '>
    <th className='bg-purple-700 rounded-none text-white'>No:</th>
    <th className='bg-purple-700 rounded-none text-white'>Image:</th>
    <th className='bg-purple-700 rounded-none text-white'>Seller:</th>
    <th className='bg-purple-700 rounded-none text-white'>Email</th>
    <th className='bg-purple-700 rounded-none text-white'>Sub-category</th>
    <th className='bg-purple-700 rounded-none text-white'>Rating</th>
    <th className='bg-purple-700 rounded-none text-white'>Price</th>
    <th className='bg-purple-700 rounded-none text-white'>Quantity</th>
    <th className='bg-purple-700 rounded-none text-white'>Update</th>
    <th className='bg-purple-700 rounded-none text-white'>Delete</th>
  </tr>
</thead>

<tbody>

{
data.map((p,index)=><AllData deletesubmit={deletesubmit} key={index} index={index} data={p}/>)
}
  </tbody>
  

</table>
</div>
    </div>
);
};


function AllData({data,index,deletesubmit}){
const {_id,image_url,Name,seller_email,Rating,Sub_category,seller_name,Available_quantity,Price,Detail_description}= data













return(

    <tr className='text-center '>
    <td className='border-purple-200 font-semibold'>{index+1}</td>
    <td className='border-purple-200 font-semibold'>
        <img src={image_url} className='w-1/2 mx-auto' />
    </td>
    <td className='border-purple-200 font-semibold'>{seller_name}</td>
    <td className='border-purple-200 font-semibold'>{seller_email}</td>
      <td className='border-purple-200 font-semibold'>{Sub_category}</td>
      <td className='border-purple-200 font-semibold'>{Rating}</td>
    <td className='border-purple-200 font-semibold'>{Price}</td>
    <td className='border-purple-200 font-semibold'>{Available_quantity}</td>
    <td className='border-purple-200 font-semibold'>



  <Link to={`/update/${_id}`}><button className='btn w-20 text-white font-bold  bg-green-600 border-none'>Update</button></Link>

</td>

    <td className='border-purple-200 font-semibold'>
<button onClick={()=>deletesubmit(_id)} className='btn w-20 text-white font-bold  bg-red-700 border-none'>Delete</button>


    </td>
    </tr>
    );

}




export default Mytoys;









