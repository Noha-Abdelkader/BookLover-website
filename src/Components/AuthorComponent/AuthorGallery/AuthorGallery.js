// import React from 'react';
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";


// export default function AuthorGallery() {
// const images = [
//   {
//     original: 'https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-11-600x919.jpg',
//     thumbnail: 'https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-11-600x919.jpg',
//   },
//   {
//     original: 'https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-12-600x919.jpg',
//     thumbnail: 'https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-12-600x919.jpg',
//   },
//   {
//     original: 'https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-1-600x919.jpg',
//     thumbnail: 'https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-1-600x919.jpg',
//   },
//   {
//     original: 'https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-10-600x919.jpg',
//     thumbnail: 'https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-10-600x919.jpg',
//   },
// ];

//     return <ImageGallery items={images} />;
// }



// =====================================

import React, { Fragment } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default function AuthorGallery() {
const imgs = ['https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-11-600x919.jpg', 'https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-12-600x919.jpg','https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-1-600x919.jpg', 'https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-10-600x919.jpg','https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-11-600x919.jpg' ,'https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-12-600x919.jpg','https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-1-600x919.jpg' ,'https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/10/Product-10-600x919.jpg']

  return <Fragment>
      <Swiper
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            "@0.00": {
            slidesPerView: 4,
        spaceBetween:30
          }
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
{imgs.map((src,index)=>{
  return  <SwiperSlide key={index}>
        <img src={src} alt='book poster' className='w-full' />
        </SwiperSlide>
})}
          
</Swiper>
  </Fragment>
}

