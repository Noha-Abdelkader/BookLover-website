import React, { Fragment, useEffect, useRef, useState } from "react";
import { FaBookReader } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
// import { useDispatch, useSelector } from "react-redux";
// import {getMagazines} from '../../../Store/magazineSlice'
import styles from "./Magazines.module.css";
import { useGetMagazineMutation } from "../../../Store/Api";

export default function Magazines() {

let [magazines , setMagazines] = useState([]);
  let [getMagazine, { isLoading }] = useGetMagazineMutation();


  //-------- fetching data-------------------
  let fetchMagazine = async () => {
    try {
      let res = await getMagazine();
       console.log(res , 'response');
      setMagazines(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  //---- useEffect --------------

  useEffect(() => {
    fetchMagazine();
  }, []);


  //------ return ----------
  return (
    <Fragment>
      {isLoading ?<div className="center">
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
</div>: <div
        id="magazines"
        className="flex  bg-orange-50  border-y-2 border-black overflow-hidden">
        <div className="w-full sm:w-1/2 pt-5 ps-5 relative z-10  ">
          <div className="flex items-center gap-3 mb-6 text-xl lg:text-3xl font-black justify-center sm:justify-start">
            <h3>Also, you can find us on </h3>
            <FaBookReader className="text-amber-700 text-3xl" />
          </div>

          <div className="w-[220px] h-[180px] md:w-[300px] md:h-[230px] lg:w-[350px] lg:h-[320px] xl:w-[380px] xl:h-[350px] 2xl:w-[420px] 2xl:h-[450px] mx-auto sm:mx-0">
            <Swiper
              direction={"vertical"}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper w-full "
            >
              {magazines ? (magazines.map((magazine, index) => {
                  return (
                    // <SwiperSlide key={index} className="px-10">
                    //   <div>
                    //     <div className="relative z-0">
                    //       {magazine.volumeInfo.imageLinks.thumbnail && (
                    //         <img
                    //           src={magazine.volumeInfo.imageLinks.thumbnail}
                    //           alt={magazine.volumeInfo.title}
                    //           className="w-[200px] h-[200px]"
                    //         />
                    //       )}
                    //       <div className=" bg-black bg-opacity-50 absolute z-10 inset-x-0  bottom-0  translate-y-0.5 p-1  lg:px-10 lg:py-2 md:py-2 text-center ">
                    //         <a href={magazine.volumeInfo.previewLink}>
                    //           <p className="font-semibold text-lg mb-3 text-white ">
                    //             {magazine.volumeInfo.title}
                    //           </p>
                    //         </a>
                    //       </div>
                    //     </div>
                    //   </div>
                    // </SwiperSlide>
                    <p key={index}>{magazine.name}</p>
                  );
                })
              ) : (
                <p className="text-lg bg-slate-400 text-white p-20">
                  no magazines
                </p>
              )}
            </Swiper>
          </div>
        </div>
        <div className={`${styles.bg} w-1/2  hidden sm:block`}>
          <img
            src="https://www.oerlive.com/wp-content/uploads/2019/09/magazines.jpg"
            alt="reading people"
            className="w-full"
          />
        </div>
      </div>}
    </Fragment>
  );
}
