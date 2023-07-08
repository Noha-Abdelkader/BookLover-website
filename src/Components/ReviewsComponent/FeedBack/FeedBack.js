import React, { Fragment } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation ,Pagination , Autoplay} from "swiper";

import FeedBackCard from "../FeedBackCard/FeedBackCard";




export default function FeedBack() {
  return <Fragment>
      <div className=" text-white bg-gray-800 p-14  flex justify-center items-center flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/3 ">
          <h4 className="uppercase font-black text-2xl mb-4">What our customers says</h4>
          <p className="text-gray-400 leading-7 text-lg">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution. Capitalize on low hanging fruit to
            identify a ballpark value added activity to beta test.
          </p>
        </div>

        <div className={`cursor-pointer w-full lg:w-1/2  py-10`}>
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
            "@1.00": {
            slidesPerView: 2,
        spaceBetween:30

          },

        }}
        pagination={{
          clickable: true,
          type: "fraction",
        }}
        navigation={false}
         modules={[Navigation , Pagination]} className="mySwiper">
        <SwiperSlide><FeedBackCard/></SwiperSlide>
        <SwiperSlide><FeedBackCard/></SwiperSlide>
        <SwiperSlide><FeedBackCard/></SwiperSlide>
        <SwiperSlide><FeedBackCard/></SwiperSlide>
      </Swiper>
        </div>
      </div>
    </Fragment>;
}
