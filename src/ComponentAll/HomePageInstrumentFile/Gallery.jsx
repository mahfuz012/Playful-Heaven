import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Gallery = () => {
    const allPicture = [
        {
          name: 'Image 1',
          url: 'https://m.media-amazon.com/images/I/71qtAiNUCpL._AC_SL1200_.jpg',
          animation: 'fade-up',
          easing: 'ease-in-out-back',
        },
        {
          name: 'Image 2',
          url: 'https://www.collectjurassic.com/wp-content/uploads/2022/11/DinoTrackersDangerPackW213-1024x1024.jpeg',
          animation: 'fade-down',
          easing: 'ease-in-out-quad',
        },
        {
          name: 'Image 3',
          url: 'https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjMzYWM5MGNiODhlMTgxYWNjNWNlOWM0LWNpZnRveXMtdHJleC1kaW5vc2F1ci10b3lzLWZvci1raWRzLTMtNS5qcGc.jpg',
          animation: 'flip-down',
          easing: 'ease-in-out-cubic',
        },
        {
          name: 'Image 4',
          url: 'https://s.alicdn.com/@sc04/kf/H4ef0dafc334446f697a0348f5d5232e2v.jpg_300x300.jpg',
          animation: 'slide-up',
          easing: 'ease-in-out-quart',
        },
        {
          name: 'Image 5',
          url: 'https://static-01.daraz.com.bd/p/3365fb41670619a4ad043430622b05cf.jpg',
          animation: 'zoom-out',
          easing: 'ease-in-out-sine',
        },
        {
          name: 'Image 6',
          url: 'https://static-01.daraz.com.bd/p/c0d9db2c47fbe8a56afab9a4da10f3fa.jpg',
          animation: 'zoom-in-up',
          easing: 'ease-in-out-back',
        },
        {
          name: 'Image 7',
          url: 'https://static-01.daraz.com.bd/p/18db4a5a760501e65d5304e8091cc799.jpg',
          animation: 'fade-down-right',
          easing: 'ease-in-out-quad',
        },
        {
          name: 'Image 8',
          url: 'https://m.media-amazon.com/images/I/61BRKVOc4QL._SL1500_.jpg',
          animation: 'flip-up',
          easing: 'ease-in-out-cubic',
        },
        {
          name: 'Image 9',
          url: 'https://m.media-amazon.com/images/I/61SypNEwQpL._SY450_.jpg',
          animation: 'flip-up',
          easing: 'ease-in-out-quart',
        },
      ];
      

    return (
 <div className='sm:grid sm:grid-cols-3 p-5 place-items-center bg-black'>

    
{

    allPicture.map(p=>
        
    <img data-aos={p.animation} data-aos-offset="200" data-aos-easing={p.easing} data-aos-duration="800" className='overflow-hidden w-screen sm:h-5/6 border p-3 m-2 border-purple-600 border-4' src={p.url} />

        
 )
}





        </div>
    );
};

export default Gallery;