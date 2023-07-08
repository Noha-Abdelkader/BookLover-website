import React, { Fragment } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from "./OnlineBook.module.css";
import ImgIcons from "../../ImgIcons/ImgIcons";

export default function OnlineBook() {
  return (
    <Fragment>
      <div className={` ${styles.bg} p-14 sm:p-28  text-slate-50 text-center overflow-hidden flex `} style={{backgroundImage: `url(https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h1_bg-2.svg)`}}>

        <div className={`xl:w-1/3 hidden xl:grid rounded-[25%] border-2 border-amber-600 relative p-5`}>
        <img src=" https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h1_img-1.jpg" alt="" className="w-10/12  m-auto bg-slate-300 rounded-[25%]"/>
        <div className="text-5xl">
        <ImgIcons/>

        </div>
        </div>

        <div className="w-100 xl:w-1/3 my-auto">
          <h4 className={`${styles.head} font-black text-lg sm:text-4xl mb-4 py-1`}>Online BookFairs 2022 </h4>
          <p className="text-md sm:text-xl mb-8 text-amber-700 xl:leading-10">
            Your cool friend who’s always reading something awesome. Folio’s
            stock is expertly curated so you know you’re getting the best
            titles.
          </p>

          <button className={`${styles.seeAllBtn} capitalize py-2 ps-5  sm:ps-10 text-sm md:text-lg bg-white text-black flex items-center justify-between mx-auto font-bold hover:bg-amber-700 hover:text-slate-50 transition-all duration-900 `}> see all
            <FaLongArrowAltRight className="ms-5 sm:ms-10  me-2 sm:me-5" />
          </button>
        </div>
 <div className="xl:w-1/3 hidden xl:grid rounded-[25%] border-2 border-amber-600 relative  p-5">
        <img src=" https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h1_img-2.jpg" alt="reading girl" className="w-10/12  m-auto bg-slate-300 rounded-[25%]"/>
        <div className="text-5xl">
        <ImgIcons/>

        </div>
        </div>
        

      </div>
    </Fragment>
  );
}
