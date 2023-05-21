import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination, FreeMode ,Autoplay,Navigation} from "swiper";
const Swipper = () => {
    return (
        <div className='py-10 bg-violet-600 border-b-4 border-purple-700 mb-10'>
        <Swiper
                slidesPerView={3}
                autoplay={{
                    delay: 1800,
                    disableOnInteraction: false,
                  }}
                spaceBetween={30}
                freeMode={true}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode,Autoplay, Pagination,Navigation]}
                className="mySwiper w-11/12  bg-white rounded-2xl"
              >
        
        <SwiperSlide>
          <img  src="https://www.bestyears.co.uk/images/stories/virtuemart/product/large%20ptero%201200x.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='py-5' src="https://m.media-amazon.com/images/I/61Umezo99QL._AC_SX450_.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-3/4 py-5' src="https://m.media-amazon.com/images/I/71b3t7dAFkL._AC_SL1500_.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img  src="https://www.bestyears.co.uk/images/stories/virtuemart/product/large%20ptero%201200x.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i5.walmartimages.com/asr/5d12f492-20e1-4d48-b61c-685a33ca3a7e.9388276f6b93456da6af1641d39bfd00.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/812GAjkJOCL._SX679_.jpg" />
        </SwiperSlide>
        
        
            
             
              </Swiper>
        
              
        </div>
    );
};

export default Swipper;