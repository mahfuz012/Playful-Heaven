import React from 'react';

const Gallery = () => {
const allPicture = [

" https://m.media-amazon.com/images/I/71qtAiNUCpL._AC_SL1200_.jpg",

"https://www.collectjurassic.com/wp-content/uploads/2022/11/DinoTrackersDangerPackW213-1024x1024.jpeg",

"https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjMzYWM5MGNiODhlMTgxYWNjNWNlOWM0LWNpZnRveXMtdHJleC1kaW5vc2F1ci10b3lzLWZvci1raWRzLTMtNS5qcGc.jpg",

 " https://s.alicdn.com/@sc04/kf/H4ef0dafc334446f697a0348f5d5232e2v.jpg_300x300.jpg",
  "https://static-01.daraz.com.bd/p/3365fb41670619a4ad043430622b05cf.jpg",
  "https://static-01.daraz.com.bd/p/c0d9db2c47fbe8a56afab9a4da10f3fa.jpg",
  "https://static-01.daraz.com.bd/p/18db4a5a760501e65d5304e8091cc799.jpg",
  "https://m.media-amazon.com/images/I/61BRKVOc4QL._SL1500_.jpg",
  " https://m.media-amazon.com/images/I/61SypNEwQpL._SY450_.jpg",
]


    return (
 <div className='sm:grid sm:grid-cols-3 p-5 place-items-center bg-black'>

{
    allPicture.map(p=><img className='w-screen sm:h-5/6 border p-3 m-2 border-purple-600 border-4' src={p} />)
}




        </div>
    );
};

export default Gallery;