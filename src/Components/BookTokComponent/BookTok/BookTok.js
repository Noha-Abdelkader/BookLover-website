import React, { Fragment } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

// background-image: linear-gradient(to right bottom, #ffedd5, #fed8ac, #fdc284, #fcab5f, #fb923c);

import CardContentLeft from '../../CardComponent/CardContentLeft/CardContentLeft';
import styles from './BookTok.module.css'
import { FaBook } from "react-icons/fa";



export default function BookTok({books, isLoading  }) {
 
 
 return <Fragment> 
    <div id='bookTok' className={`flex flex-col md:flex-row pt-32  pb-6 px-6 gap-7 ${styles.bookTok} ` } >

<div className='w-full md:w-1/3'>
    <div className='flex justify-start items-center gap-2  mb-4 text-2xl'>
    <FaBook className="text-amber-600 "/>
    <h6 className=' font-black capitalize'>   what's hot on boktok</h6>
    </div>
    <ul className='text-gray-500 list-disc list-inside mb-4 '>
       <li className='mb-2'><span className='cursor-pointer' >Anthologies & Short Stories</span></li>
       <li className='mb-2'><span className='cursor-pointer' >Classics</span></li>
       <li className='mb-2'><span className='cursor-pointer' >Fiction in Translation</span></li>
       <li className='mb-2'><span className='cursor-pointer' >Historical Fiction</span></li>
       <li className='mb-2'><span className='cursor-pointer' >Modern & Contemporary</span></li>
       <li className='mb-2'><span className='cursor-pointer' >Myths & Legends</span></li>
       <li className='mb-2'><span className='cursor-pointer' >Poetry, Drama & Literary Criticism</span></li>
       <li className='mb-2'><span className='cursor-pointer' >Romance</span></li>
       <li className='mb-2'><span className='cursor-pointer' >Fantasy Romance</span></li>
    </ul>
<button className= 'py-3 px-7 text-md text-white bg-black hover:bg-amber-800 duration-500 rounded-md'>See All </button>
    </div>


    <div className='w-full md:w-2/3'>
    {isLoading ? <div className="center">
<div className=" flex justify-center items-center  absolute inset-0">
<div>
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
</div>
</div>: <Swiper
        spaceBetween={20}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            "@0.00": {
            slidesPerView: 3,
          },
          "@1.1": {
            slidesPerView: 2,
          },
          "@1.3": {
            slidesPerView: 3,
          },
          "@1.6": {
            slidesPerView: 4,
          },
          "@1.8": {
            slidesPerView: 5,
          },
          "@2.0": {
            slidesPerView: 6,
          },
        }}
       
        navigation={true}
        modules={[ Autoplay, Navigation]}
        className="mySwiper"
      >
      {books ? books.map((book) => {
  return <SwiperSlide key={book.id}  className=' sm:min-w-[175px] sm:max-w-[175px]  '>
          <CardContentLeft src={book.formats["text/html"]} preview={book.formats['image/jpeg']} />
        </SwiperSlide>}) :<Fragment>
        <div className='bg-orange-50 text-center rounded-md'>
        <p className='text-2xl font-black text-red-800  p-5'>There is No book</p>
          <img src='https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg' className='w-1/2 m-auto' alt='select book'/>
          </div>
        </Fragment> }
          
</Swiper> }


    </div>

    </div>

  </Fragment>
}


// min-h-[300px] max-h-[350px]