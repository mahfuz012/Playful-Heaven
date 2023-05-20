
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviderFile/AuthProvider';


const Addtoys = () => {
const {userID} = useContext(AuthContext)


  const array = ['teddy', 'bear', 'horse', 'dinosaur', 'dogs', 'cat',' unicorn', 'cows']

const addtoyssubmit =(e)=>{
    e.preventDefault()
 
const url = e.target.url.value
const name = e.target.name.value
const email = e.target.email.value
const rating = e.target.rating.value
const option = e.target.option.value
const sellername = e.target.sellername.value

const price = e.target.price.value
e.target.reset()
console.log(url,name,email, rating,option,sellername,price)





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
    <input className="focus:shadow-purple-600 focus:shadow-md shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='price'  type="number" placeholder="Enter price" required />
  </div>
  <div className="mb-4">
    <label className="block text-purple-700 text-sm font-bold mb-2">Rating:</label>

    <input className="focus:shadow-purple-600 focus:shadow-md shadow appearance-none border 
    rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='rating'  type="number" step="1" min="0" max="5" placeholder="Enter rating" required />
  </div>

<input className='w-2/4 mx-auto btn bg-purple-700 border-none my-6' value="Submit add items" type='submit'></input>

</form>



</div>










        </div>


    );
};

export default Addtoys;