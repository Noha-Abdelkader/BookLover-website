import React, { Fragment } from 'react';
import { GiBookCover , GiBookmarklet , GiSecretBook , GiBookAura , GiBookshelf , GiSpellBook ,  GiBookmark } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination , Autoplay } from "swiper";
import { GiPolarStar } from "react-icons/gi";

import styles from './Social.module.css';

export default function Soical() { 
  return <Fragment>
    <div className='py-8 px-4 bg-orange-50 border-slate-400 border-y-2'>
    <div className="flex justify-center items-center text-3xl sm:text-5xl font-extrabold mb-8  ">
          <GiPolarStar className="text-amber-600" /> <span>Trusted By The Best</span> <GiPolarStar className="text-amber-600" />
        </div>

    <Swiper
        freeMode={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            "@0.00": {
            slidesPerView: 2,
        spaceBetween:50

          },
            "@0.75": {
            slidesPerView: 3,
        spaceBetween:50

          },
          "@1.00": {
            slidesPerView: 3,
        spaceBetween:50

          }
                  }}

        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination , Autoplay]}
        className="mySwiper mb-10 "
      >

 
        <SwiperSlide >
            <img src='https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h1_img-3.jpg' alt='book posters' className='w-100'/>
        </SwiperSlide>

        <SwiperSlide >
            <img src='https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h1_img-4.jpg' alt='book posters' className='w-100'/>
        </SwiperSlide>
        <SwiperSlide >
            <img src='https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h1_img-5.jpg' alt='book posters' className='w-100'/>
        </SwiperSlide>
        <SwiperSlide >
            <img src='https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h1_img-6.jpg' alt='book posters' className='w-100'/>
        </SwiperSlide>
       
        
       
      </Swiper>


<Swiper
        
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            "@0.00": {
            slidesPerView: 2,
        spaceBetween:20
          },
          "@2.0": {
            slidesPerView: 3,
        spaceBetween:10
          },
          "@2.50": {
            slidesPerView: 4,
        spaceBetween:100
          },
          "@3.50": {
            slidesPerView: 5,
        spaceBetween:100
          },
          "@4.0": {
            slidesPerView: 6,
        spaceBetween:100

          }
        }}

        pagination={{
          clickable: true,
          hiddenClass:false,
        }}
        modules={[FreeMode, Pagination , Autoplay]}
        className="mySwiper mb-14"
      >

 
        <SwiperSlide className='cursor-pointer sm:text-7xl font-bold text-center'>
            <GiBookCover className='mx-auto text-amber-800  text-7xl'/>
        <h6 className='text-xl sm:text-2xl'>Book Door</h6>
        <p className='text-sm font-medium'>“They’ve helped customers find quality material for many years.”</p>
        </SwiperSlide>
        
        <SwiperSlide className='cursor-pointer  sm:text-7xl font-bold text-center'>
        <GiBookmarklet  className='mx-auto text-cyan-950  text-7xl'/>
        <h6 className='text-xl sm:text-2xl'>REDOAK</h6>
        <p className='text-sm font-medium'>“They’ve helped customers find quality material for many years.”</p>
        </SwiperSlide>


        <SwiperSlide className='cursor-pointer sm:text-7xl font-bold text-center'>
        <GiSecretBook  className='mx-auto text-orange-950  text-7xl'/>
        <h6 className='text-xl sm:text-2xl'>BOOK Story</h6>
        <p className='text-sm font-medium'>“They’ve helped customers find quality material for many years.”</p>
        </SwiperSlide>

        <SwiperSlide className='cursor-pointer sm:text-7xl font-bold text-center'>
        <GiBookAura  className='mx-auto text-sky-950  text-7xl'/>
        <h6 className='text-xl sm:text-2xl'>Book&Magic</h6>
        <p className='text-sm font-medium'>“They’ve helped customers find quality material for many years.”</p>
        </SwiperSlide>
        
        <SwiperSlide className='cursor-pointer sm:text-7xl font-bold text-center'>
        <GiBookshelf  className='mx-auto  text-amber-800  text-7xl'/>
        <h6 className='text-xl sm:text-2xl'>Islamic Writer's</h6>
        <p className='text-sm font-medium'>“They’ve helped customers find quality material for many years.”</p>
        </SwiperSlide>
        
        <SwiperSlide className='cursor-pointer sm:text-7xl font-bold text-center'> 
        <GiSpellBook  className='mx-auto text-emerald-950  text-7xl'/>
        <h6 className='text-xl sm:text-2xl'>Book Cover</h6>
        <p className='text-sm font-medium'>“They’ve helped customers find quality material for many years.”</p>
        </SwiperSlide>
        
        <SwiperSlide className='cursor-pointer sm:text-7xl font-bold text-center'> 
        <GiBookmark  className='mx-auto text-orange-950  text-7xl'/>
        <h6 className='text-xl sm:text-2xl'>Book Stores</h6>
        <p className='text-sm font-medium'>“They’ve helped customers find quality material for many years.”</p>
       </SwiperSlide>
       
      </Swiper>


<div className='text-3xl sm:text-5xl font-extrabold mb-5 text-center'>
  <h4 className='mb-5'>Read the world authours of korean</h4>
  <h6 className='cursor-text text-amber-400 text-2xl mb-5'>20% off select books</h6>
  <button className={`${styles.shopAllBtn}  py-2 ps-5  sm:ps-10 text-sm md:text-lg border-2 border-amber-700 text-black flex items-center justify-between mx-auto font-bold hover:bg-amber-700 hover:text-slate-50 hover:border-transparent transition-all duration-900 m-auto rounded-md`}>
            Shop All
            <FaLongArrowAltRight className="ms-5 sm:ms-10  me-2 sm:me-5" />
          </button>
</div>




      </div>

  </Fragment>
}
