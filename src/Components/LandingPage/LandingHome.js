import React, { Fragment } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";
import NavBar from "../NavBar/NavBar";

export default function LandingHome() {
  return <Fragment>

  <div className="relative z-0">
    
  <NavBar/>

<Swiper
  effect={"flip"}
  grabCursor={true}
  pagination={true}
  navigation={true}
  autoplay={true}
  modules={[EffectFlip, Pagination, Navigation]}
  className="mySwiper"
>
<SwiperSlide >
    <img src="https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h5_2.jpg" className="w-100 m-auto" alt=""/>
  </SwiperSlide>

<SwiperSlide >
    <img src="https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h5_3.jpg"  className="m-auto" alt=""/>
  </SwiperSlide>
 
  
 
 

 
</Swiper>
  </div>


      </Fragment>;
}
