import React, { useEffect, useState } from 'react';
import { BsStar } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const TeddyBears = () => {


const [data,setData] = useState([])


    useEffect(()=>{

  fetch(`https://playful-heaven.vercel.app/searchdata?Sub_category=Teddy%20Bears`,)
            .then(res=>res.json())
            .then(data=>setData(data))
        
     
    },[])









    return (
        <div className='container-fluid sm:flex space-x-3 justify-center '>
       {
        data.map(p=><Card  key={p._id} data={p} />)
       }
        </div>
    );
};


function Card({data}){
const {image_url,Name,Price,Rating,_id} = data
return(

 <div className="rounded-2xl  border sm:w-1/4 p-5 bg-base-100 shadow-xl">
<img src={image_url} className='w-2/3' alt="Shoes" />

  <div className="">

    <h2 className="font-bold my-3">{Name}</h2>
  

    <p className='italic'>Rating: {Rating}
  
 </p>
    <p className='text-purple-600 font-bold'>Price: {Price}$</p>
    <div className="flex justify-end mt-5">
      <Link to={`/singleDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
)
}

export default TeddyBears;