import React, { Fragment } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from "./LandingPage4.module.css";

export default function LandingPage4() {
  return (
    <Fragment>
      <div className="bg-orange-50 border-t-2 border-b-2 border-black relative overflow-hidden z-10 py-10 sm:py-0">
        <div>
          <img
            src="https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/revslider_book-1.png"
            alt="book poster"
            className="w-1/2 md:w-1/3 absolute top-8 left-1/3 md:left-1/2 z-20"
          />
          <img
            src="https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/revslider_book-2.png"
            alt="book poster"
            className="w-1/2 md:w-1/3 absolute top-6 -right-[30%] md:-right-[15%] "
          />

          <img
            src="https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/revslider_decor-line.png"
            alt="book poster"
            className="md:h-[500px] lg:h-[600px]  xl:h-[650px] w-full"
          />

          <div className={`absolute  bottom-1/4 left-1/3 md:left-2/4 z-30 `}>
            <div className={`${styles.posterDisc}  bg-contain bg-center bg-no-repeat p-5 sm:p-7 lg:p-14`} style={{backgroundImage:`url(https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/revslider_label.svg)`}}>
              <span className="font-black text-4xl text-white">70%</span>
            </div>
          </div>
        </div>
        {/*absolute bottom-1/4 left-1/3 md:left-2/4 z-30  w-[18%] sm:w-[20%] md:w-[15%] xl:w-[10%] */}
        <div className="absolute left-0 top-0 py-6 px-3 md:py-20 w-1/2 sm:w-1/3  md:w-full  ">
          <h5 className="text-xl  sm:text-3xl lg:text-4xl   xl:text-5xl font-bold text-amber-900 sm:mb-6">
            What Book Are You Looking For?
          </h5>
          <span className="text-2xl sm:text-5xl font-black mb-4 sm:mb-8 inline-block">
            Save up 
            <small className="text-orange-700 text-2xl sm:text-8xl block px-5 sm:inline-block sm:px-0">
               50%<span className="sm:text-5xl "> OFF</span> 
            </small>
          </span>
          <button className={`${styles.shopAllBtn}  py-2 ps-3  sm:ps-10 text-sm md:text-lg border-2 border-amber-700 text-black flex items-center justify-between mx-auto font-bold hover:bg-amber-700 hover:text-slate-50 hover:border-transparent transition-all duration-900 ms-0 rounded-md`}>
            Shop All
            <FaLongArrowAltRight className="ms-5 sm:ms-10  me-2 sm:me-5" />
          </button>
        </div>
        <div className="absolute left-0 bottom-4 flex justify-center items-start text-xl md:text-3xl font-semibold px-3">
          <span className={`${styles.posterFooter} flex flex-col mx-2`}>
            600+<small className="text-amber-700">Stores</small>
          </span>
          <span className={`${styles.posterFooter} flex flex-col mx-2`}>
            160+<small className="text-amber-700">Clients</small>
          </span>
          <span className={`${styles.posterFooter} flex flex-col mx-2`}>
            2700+<small className="text-amber-700">Product</small>
          </span>
        </div>
      </div>
    </Fragment>
  );
}
