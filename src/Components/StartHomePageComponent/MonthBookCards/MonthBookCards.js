import React, { Fragment } from "react";
import MonthBookCard from "../MonthBookCard/MonthBookCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ImBooks } from "react-icons/im";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";


export default function MonthBookCards({isLoading , books }) {
  
  return (
    <Fragment>
      <div className="p-10 pt-28 ">
  
        <div className="flex items-center  justify-between flex-wrap sm:flex-nowrap mb-6  ">
          <div className="flex  items-center text-2xl sm:text-4xl min-[800px]:text-5xl font-extrabold ">
            <ImBooks className="text-amber-600 " />
            <span>Books of the Month</span> 
          </div>

          <button className=" capitalize py-2 ps-5  sm:ps-10 text-sm md:text-lg bg-black text-white flex items-center justify-between hover:bg-amber-700 duration-700 shadow-md shadow-slate-500">
            see all
            <FaLongArrowAltRight className="ms-5 sm:ms-10  me-2 sm:me-5" />
          </button>
        
        </div>

        <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 1100,
          disableOnInteraction: false,
        }}
        breakpoints={{
            "0": {
            slidesPerView: 1,
          },
            '500': {
            slidesPerView: 2,
          },
          "700": {
            slidesPerView: 3,
          },
          "900": {
            slidesPerView: 4,
          },
          "1200": {
            slidesPerView: 6,
          }
        }}
        
        modules={[Autoplay]}
        className="mySwiper  "
      >
      
{isLoading ? <div className="center">

    <div className="bg-slate-100 text-center">
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    </div>

</div> : books? books.map((book)=>{
  return <SwiperSlide key={book.id}  >
  <MonthBookCard  book={book} />
        </SwiperSlide>;
}):<Fragment>
        <div className='bg-orange-50 text-center rounded-md'>
        <p className='text-2xl font-black text-red-800  p-5'>There is No book</p>
          <img src='https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg' className='w-1/2 m-auto' alt='select book'/>
          </div>
        </Fragment> }
</Swiper> 
      </div>
    </Fragment>
  );
}
