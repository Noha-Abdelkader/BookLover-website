// import React, { Fragment } from 'react'
// import styles from './Home.module.css';

// export default function Home() {
//   return <Fragment>
// <div className='py-5 flex justify-between items-center flex-wrap  md:flex-nowrap gap-12 '>

//     <div className={` ${styles.home_content} md:w-7/12  m-auto p-2 rounded-tr-md rounded-br-md `}>
//    <h3 className='mb-4 font-black italic  text-xl  text-center xl:text-2xl text-slate-600'>Browse the collection of our best top interresting Books.</h3>
//     <h4 className='text-lg font-black italic lg:text-xl text-center text-slate-600'>you will definitely find what you are looking for.</h4>
//     </div>

// <div className='md:w-5/12 m-auto md:ms-auto  w-3/5'>
// <img src='https://images.gr-assets.com/misc/1576518043-1576518043_goodreads_misc.gif' alt='reading girl' className='w-100'/>
// </div>

// </div>
//   </Fragment>
// }

import React, { useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Home.module.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

// AOS ---------------
import AOS from 'aos';


export default function Home() {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  AOS.init();

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className='py-10'>
        <div className='py-5 flex justify-between items-center flex-wrap  md:flex-nowrap gap-12 '>

     <div className={`${styles.slider_content_2}   md:w-4/12  m-auto p-10 rounded-tr-md rounded-br-md ms-auto md:ms-10`} data-aos="fade-up"
     data-aos-duration="3000">
    <h3 className='mb-4 font-semibold italic  lg:text-xl  text-left  xl:text-2xl text-slate-600'>  <span className='text-rose-400 text-3xl  font-black'> ISBN </span> Search Feature.</h3>
     <h4 className={`  text-lg font-semibold  italic lg:text-xl text-left  text-slate-600`}>Search books using ISBN numbers by Auther names and save your time.</h4>
     </div>


 <div className='md:w-8/12 m-auto md:ms-auto  w-3/5' data-aos="fade-up"
     data-aos-duration="3000"  data-aos-delay="300">
 <img src='https://hostacmee.space/demo/bookchoix/wp-content/uploads/revslider/slider-1/girl-searching-online.png' alt='reading girl' className='w-100'/>
 </div>

 </div>
        </SwiperSlide>

        <SwiperSlide className='py-5'>
        <div className=' flex justify-between items-center flex-wrap  md:flex-nowrap gap-12 '>

     <div className={`   md:w-8/12  m-auto p-10 sm:p-20 rounded-tr-md rounded-br-md ms-auto md:ms-10`} data-aos="zoom-in">

     <h3 className='mb-4 font-semibold italic  lg:text-xl   xl:text-2xl text-slate-600 '>Over <span className='text-rose-400 text-3xl  font-black'>12 Milion</span> Books.</h3>
     <h4 className={` ${styles.slider_content_4} text-lg font-semibold  italic lg:text-xl  text-slate-60 p-5 `}>start your learning journy bt browsing Milions of books from our library.</h4>
     </div>

 <div className='md:w-5/12 m-auto md:ms-auto  w-3/5' data-aos="zoom-in"  data-aos-delay="300">
 <img src='https://hostacmee.space/demo/bookchoix/wp-content/uploads/2021/11/reading-books.png' alt='reading girl' className='w-100'/>
 </div>

 </div>
        </SwiperSlide>

        <SwiperSlide className='py-10' >
        <div className='py-5 flex justify-between items-center flex-wrap  md:flex-nowrap gap-12 '>

     <div className={`  md:w-5/12   p-2 rounded-tr-md rounded-br-md  mx-auto`}  data-aos="fade-down-right">
    <h3 className='mb-4 font-black italic  text-2xl  text-center xl:text-2xl text-slate-600'>Browse the <span an className='text-rose-400 text-3xl  font-black'>collection of our best top </span>  interesting Books.</h3>
     <h4 className={`${styles.home_content} text-lg font-black italic lg:text-xl text-center text-slate-600 py-5 rounded-md`}>you will definitely find what you are looking for.</h4>
     </div>

 <div className='md:w-4/12 m-auto md:ms-auto  w-3/5' data-aos="fade-left">
 <img src='https://images.gr-assets.com/misc/1576518043-1576518043_goodreads_misc.gif' alt='reading girl' className='w-100'/>
 </div>

 </div>
        </SwiperSlide>

        <SwiperSlide className='py-10 overflow-hidden'>
        <div className='py-5 flex justify-between items-center flex-wrap  md:flex-nowrap gap-12 '>

     <div className={` ${styles.slider_content_3}   md:w-8/12  m-auto p-10 text-left  ms-auto md:ms-10 `} data-aos="flip-down"  data-aos-delay="300">
       <h3 className='mb-4 font-semibold italic  lg:text-xl   xl:text-2xl text-slate-600 '>Read <span className='text-rose-400 text-3xl  font-black'> PDF Books</span>  Online.</h3>
     <h4 className={`rounded-tl-xl rounded-br-xl py-2 px-4 text-lg font-semibold  italic lg:text-xl  text-slate-600 `}>Let your customers read books online without leaving your website.</h4>
     </div>

 <div className='md:w-8/12 m-auto md:ms-auto  w-3/5' data-aos="flip-down" >
 <img src='https://hostacmee.space/demo/bookchoix/wp-content/uploads/revslider/slider-1/girl-reading-books-online.png' alt='reading girl' className='w-100'/>
 </div>

 </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
