import React, { Fragment } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { FaLongArrowAltRight } from "react-icons/fa";

import styles from './LandingPage5.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


export default function LandingPage5() {

    AOS.init();

  return <Fragment>
    <Swiper
        spaceBetween={10}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            "@0.00": {
            slidesPerView: 1,
        // spaceBetween:30
          },
            "@1.00": {
            slidesPerView: 1,
        // spaceBetween:30
          }
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">

<SwiperSlide>
                <div className= 'h-screen w-full relative md:static z-30 flex justify-between items-center  bg-orange-100 border-b-2 border-gray-300' >

                <div className='w-full md:w-1/3 text-center md:text-start ps-5 absolute md:static inset-0  z-20 bg-neutral-900 bg-opacity-50 md:bg-transparent grid'>
                <div className='self-center text-white sm:text-black'>
                <h3  data-aos="fade-up"
     data-aos-duration="1500"  className='capitalize  text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black  mb-7 sm:text-black'>the best in books ebooks, blu-ray,cd,music&stationery.</h3>
            <h6 data-aos="fade-up"
     data-aos-duration="1500"  data-aos-delay="300" className='capitalize  mb-8 text-xl  lg:text-xl xl:text-2xl sm:text-black '>best novels of all time:ypu must-read.</h6>
            <button data-aos="fade-up"
     data-aos-duration="1500"  data-aos-delay="600" className={`${styles.shopAllBtn} mx-auto md:ms-0 py-2 ps-5  sm:ps-10 text-xl md:text-lg sm:text-black border-2 border-amber-700  flex items-center justify-between font-bold hover:bg-amber-700 hover:text-slate-50 hover:border-transparent transition-all duration-900 rounded-md`}>
            Shop All
            <FaLongArrowAltRight className="ms-5 sm:ms-10  me-2 sm:me-5" />
          </button>
                </div>
        </div>

        <div className='w-full md:w-1/3  sm:h-full bg-black bg-opacity-60  bg-cover bg-center  flex' style={{backgroundImage:`url(https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/revslider_decor-line-white.png)`}}>      
        <div className={`${styles.moveBg} sm:absolute  sm:h-3/4 sm:bottom-4  sm:left-1/2   z-10`}>
        <img src='https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/revslider_book-3.png' alt='poster' className='w-full' />
        </div>

        </div>

        </div>
         </SwiperSlide> 
        {/* max-[400px]:py-52 min-[658px]:py:44 */}

        <SwiperSlide className='border-b-2 border-gray-300' >
        <div   className={`${styles.scaleBg}  h-screen w-full bg-cover bg-center overflow-hidden`} style={{backgroundImage:`url(https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/revslider_h2.jpg)`}} >
       <div className='h-screen    bg-neutral-900 bg-opacity-50 md:bg-transparent py-20 flex justify-center md:justify-start items-center  '>
       <div className='sm:w-full md:w-1/2 text-white md:text-black ps-3 sm:ps-10  '>
      
          <h3  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos-duration="1500" className=' capitalize text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-black  mb-8'>best novels of all time: you must-read.</h3>
          <h6 data-aos="fade-up" data-aos-duration="1500"  data-aos-delay="300" className='capitalize mb-8 text-xl  lg:text-xl xl:text-2xl sm:text-black '>best novels of all time:ypu must-read.</h6>
      
            <button  data-aos="flip-up" data-aos-duration="1000" className={`${styles.shopAllBtn}  py-2 ps-5  sm:ps-10 text-sm md:text-lg border-2 border-amber-700  flex items-center justify-between mx-auto font-bold hover:bg-amber-700 hover:text-slate-50 hover:border-transparent transition-all duration-900 m-auto rounded-md`}>
            Shop All
            <FaLongArrowAltRight className="ms-5 sm:ms-10  me-2 sm:me-5" />
          </button>
        </div>
       </div>
        </div>
        </SwiperSlide>

       

       
          
</Swiper>
  </Fragment>
}

