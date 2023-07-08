import React, { Fragment, useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import styles from "./LandingPage6.module.css";
import axios from "axios";
import usePrevState from "../../Hooks/usePrevState";
// import useDebounce from '../Hooks/useDebounce';

export default function LandingPage6() {
  const [search, setSearch] = useState("flower");
  // const [debounceValue, setDebounceValue] = useState(search);  //4
  const [data, setData] = useState([]);

  const prevState = usePrevState(search); //5

  // ---------- اول مرة هيشتغل مرتين--------------------------
  // ---1--- اول مرة خالص
  // if( search){  // اول مرة هيشغله
  //   getData();                    // بس هيشتغل مرتين بسبب الابديت -> dependency
  // }                // و بيطبع مع كل حرف

  //----2----- علشان ميطبعش مع كل حرف

  // const timer =setTimeout(()=>{
  //   if(search) {
  //     getData();
  //   }
  // } , 3000);
  // return ()=> clearTimeout(timer);

  //مشكلتها انه بيستني وقت علشان يشتغل اول مرة برضوا

  // ----- 3 ----- علشان يجيب الداتا علي طول مجرد ما يفتح

  // if(!data.length){  // => علشان يشتغل اول ما يفتح
  //   if(search){
  //     getData();
  //   }
  // }
  // else{
  //   const timeOut = setTimeout(() => {
  //     if(search){
  //       getData();
  //     }
  //   }, 4000);
  //   return()=>clearTimeout(timeOut);
  // }
  // بس ظهر مشكله انه بيجيب الداتا اول مرة كذا مرة
  // بسبب الابديت ف الل => dependency

  //----------------------------------

  // }
  // ,[search]);

  // -----4  المفروض يشتغل مرة واحده اول ما يفتح

  // useEffect(()=>{
  //   const timeOut = setTimeout(()=>{
  //     if(!search){
  //     setDebounceValue('frontend');
  //     }
  //     else{
  //       setDebounceValue(search);
  //     }

  //   } ,1500)

  //   return ()=>clearTimeout(timeOut);
  // }
  // ,[search]);

  // useEffect(()=>{
  //   const getData = async()=>{
  //         const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+debounceValue+'+intitle&key=AIzaSyAlL8IayhadzDoPiQsSev9wK3PsNeh8ZDA');
  //         setData(response.data.items);
  //     }
  //       getData();

  // } , [debounceValue]);

  // ============ 5 علشان يشتغل مرة واحده
                        // بس مش شغاله !!

  useEffect(() => {

    const getData = async () => {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "+subject&key=AIzaSyAlL8IayhadzDoPiQsSev9wK3PsNeh8ZDA"
      );
      setData(response.data.items);
    };

    if (!data.length) {
      if(search){
        getData();
      }

    } 
    else if (search !== prevState) {
      const timeOut = setTimeout(() => {
        if (search) {
          getData();
        }
      }, 1500);
      return ()=>{
        clearTimeout(timeOut);
      } 
    }
  }, [data.length, search, prevState]);

  // ==========================
  const bookDetails = (item) => {
    // console.log(item);
  };
  // console.log(data);

  return (
    <Fragment>
      <div
        className={`${styles.bg} py-8 z-10 sm:min-h-screen border-y-2 border-gray-400  `}
      >
        <div className="relative z-20 text-center py-20 ">
          <h6 className="text-4xl font-black uppercase mb-3">
            Best novels of all time: You must-read.
          </h6>
          <h3 className="text-xl font-semibold mb-5">
            The best in books, eBooks, Blu-ray, CD,music & stationery
          </h3>
          <input
            placeholder="lam looking for..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-3/4 md:w-2/5 p-3 border-2 border-gray-400"
          />
        </div>
        <div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={4}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className={`mySwiper ${styles.fixHeight} `}
          >
            {data.length
              ? data.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img
                        src={
                          !item.volumeInfo.imageLinks
                            ? ""
                            : `${item.volumeInfo.imageLinks.thumbnail}`
                        }
                        alt={item.volumeInfo.title}
                        onClick={(item) => bookDetails(item)}
                        className="w-full"
                      />
                    </SwiperSlide>
                  );
                })
              : <div className="center">

<div className="text-center">
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

</div> }
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
}
