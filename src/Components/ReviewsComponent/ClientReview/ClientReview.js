import React, { Fragment } from 'react'
import { GiPolarStar } from "react-icons/gi";
import ClientReviewCard from '../ClientReviewCard/ClientReviewCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function ClientReview() {

  const array = new Array(4).fill(1);
  return <Fragment>
    <div className='p-10 pt-32 bg-orange-50'>
    <div className="flex justify-center items-center text-2xl sm:text-5xl font-extrabold mb-8  ">
          <GiPolarStar className="text-amber-600" /><span>Happy Client Say ! </span> <GiPolarStar className="text-amber-600" /> 
        </div>

  
        <Swiper
        // slidesPerView={2}
        spaceBetween={10}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            "@0.00": {
            slidesPerView: 1,
        spaceBetween:30

          },
            "@1.50": {
            slidesPerView: 2,
        spaceBetween:30

          },
          "@2.0": {
            slidesPerView: 3,
        spaceBetween:10

          },
          "@3.0": {
            slidesPerView: 4,
        spaceBetween:10

          }
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

      {array.map((item,index)=>{
        return  <SwiperSlide key={index} className='w-full md:w-1/2 xl:w-1/3 p-4'>
        <ClientReviewCard/>
        </SwiperSlide>

      })}
          
</Swiper>




    </div>
  </Fragment>
}
