
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProviderFile/AuthProvider';
import useTitle from '../hooks/useTitles';
import swal from 'sweetalert';


const Addtoys = () => {
  useTitle('Pheaven | AddToy')
const {userID} = useContext(AuthContext)


  const array = ['Teddy Bears', 'Dinosaur', 'Magical Unicorn']

const addtoyssubmit =(e)=>{
    e.preventDefault()
 
const image_url = e.target.url.value
const Name = e.target.name.value
const seller_email = e.target.email.value
const Rating = e.target.rating.value
const Sub_category  = e.target.option.value
const seller_name = e.target.sellername.value
const Available_quantity = e.target.quantity.value
const Price= e.target.price.value
const Detail_description = e.target.description.value


e.target.reset()
console.log({image_url,
  Name,
  seller_email,
  Rating,
  Sub_category,
  seller_name,
  Available_quantity,
  Price,
  Detail_description})
const userDetailsData= {image_url,
  Name,
  seller_email,
  Rating,
  Sub_category,
  seller_name,
  Available_quantity,
  Price,
  Detail_description}


fetch('https://playful-heaven.vercel.app/userdata', {
    method:'POST',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(userDetailsData)
    
}) .then(res => res.json())
.then(data =>{
    e.target.reset()
    swal("Data  has been added !", "success");
    console.log(data)
})




}















    return (
        <div className='container-fluid '>
 <div className=' w-12/12'>
  <h1 className='text-white  mb-10 p-3 bg-purple-700 font-bold sm:text-2xl  text-center'>You can enhance your website by including a variety of additional animal toys of your choice</h1>
   </div>



<div className='sm:w-8/12  mx-auto sm:flex sm:flex-col'>


   <form className="w-full sm:grid sm:grid-cols-2 sm:gap-3 sm:w-3/4 mx-auto" onSubmit={addtoyssubmit}>
  <div className="mb-4  ">

 <label className="block text-purple-700 text-sm font-bold mb-2">Picture URL of the toy:</label>

    <input className="shadow  border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-purple-600 focus:shadow-md"  type="url" placeholder="Enter picture URL" name='url' required />
  </div>





  <div className="mb-4">
    <label className="block text-purple-700 text-sm font-bold mb-2">Toy Name:</label>
    <input className="focus:shadow-purple-600 focus:shadow-md shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Enter toy name" name='name' required />
  </div>



  <div className="mb-4">
    <label className="block text-purple-700 text-sm font-bold mb-2" >Seller name: <span className='font-semibold text-xs'>(Already Taken from User)</span></label>

    <input className="focus:shadow-purple-600 focus:shadow-md shadow appearance-none border border-purple-700 rounded bg-purple-100  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='sellername'  defaultValue={userID?.displayName} type="text" placeholder="Enter seller name" />
  </div>




  <div className="mb-4">
    <label className="block text-purple-700 text-sm font-bold mb-2">Seller email: <span className='font-semibold text-xs'>(Already Taken from User)</span></label>
    <input className="focus:shadow-purple-600 border bg-purple-100 focus:shadow-md shadow border-purple-700 appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='email'   defaultValue={userID?.email}  type="email" placeholder="Enter seller email" />
  </div>


  <div className="mb-4">
    <label className="block text-purple-700 text-sm font-bold mb-2" >Sub-category:</label>


    <select name='option' className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>

      <option>Select sub-category</option>
    {
        array.map(p=><option  className='bg-gray-200 ' value={p}>{p}</option>)
    }

  
    </select>
</div>


  <div className="mb-4">
    <label className="block text-purple-700 text-sm font-bold mb-2" >Price:</label>
    <input className="focus:shadow-purple-600 focus:shadow-md shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='price'  type="number"  placeholder="Enter price" required />
  </div>
  <div className="mb-4">
    <label className="block text-purple-700 text-sm font-bold mb-2">Rating:</label>

    <input className="focus:shadow-purple-600 focus:shadow-md shadow appearance-none border 
    rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='rating'  type="number"  min="1" max="5" placeholder="Enter rating" required />
  </div>

<div>
    <label className="block text-purple-700 text-sm font-bold mb-2">Available quantity:</label>

    <input className="focus:shadow-purple-600 focus:shadow-md shadow appearance-none border 
    rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='quantity'  type="number"  min="1" max="10" placeholder="Enter Quantity" required />
  </div>

<div>
<textarea placeholder='Type Detail description' name='description' className='my-5 sm:my-0 focus:outline-none focus:shadow-purple-600 focus:shadow-md p-5 border-2' rows="2" cols="73" 
style={{resize:"vertical"}}
></textarea>
</div>

<br></br>


<input className='w-2/4  btn bg-purple-700 sm:w-4/6 border-none my-6' value="Submit add items" type='submit'></input>

</form>



</div>










        </div>


    );
};

export default Addtoys;