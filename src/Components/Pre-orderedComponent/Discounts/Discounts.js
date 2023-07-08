import React, { Fragment } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineEye,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import styles from "./Discounts.module.css";
// import CountDown from "../CountDown/CountDown";

export default function Discounts() {
  return (
    <Fragment>
      <div className=" text-center p-14 pt-28 relative">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPURQLi3BW2K3G_fjfk_AcJRWykDZyUhRfg&usqp=CAU" alt="discount themes" className="w-1/6 rounded-lg m-auto mb-2 "/>
        
        {/* <CountDown/> */}
        <div >
        <span className="font-black text-xl  text-pink-700 mb-7">50% discounts</span>

        <h5 className={`${styles.head} text-2xl sm:text-4xl font-black mb-14`}>Deals of the week</h5>
        </div>

       <div className="flex flex-wrap sm:flex-nowrap justify-start items-start py-8">

       <div className="w-full sm:w-1/2 lg:w-1/4 p-3  ">
        <div>
          <div className={`${styles.imgParent} relative bg-gray-100 rounded-md p-4`}>
            <img src='https://hostacmee.space/demo/bookchoix/wp-content/uploads/2023/02/celebration-of-freedom-572x764-1-550x680.jpg' alt='poster book' className={` w-full shadow-md shadow-slate-300 mb-5 rounded-tl-lg rounded-br-lg cursor-pointer`}/>
            
            <div className={`${styles.layer} absolute inset-0 bg-rose-300  bg-opacity-70 flex justify-center items-center text-2xl rounded-md`}>
              <AiOutlineShoppingCart className= 'mx-2'/>
              <BsSuitHeart className= 'mx-2'/>
              <AiOutlineEye className= 'mx-2'/>
              <AiOutlineShareAlt className= 'mx-2' />
            </div>

          </div>

            <div className="p-5">
              <span className="text-gray-400 text-lg">
                <a href="">Biography</a>
              </span>
              <h5 className="text-base sm:text-xl font-semibold mb-2">
                Celebration of Freedom
              </h5>
              <h6 className="text-gray-600 mb-3 ">
                <span className="text-gray-400 p-1">By</span>Ellie Thomson
              </h6>
              <del className="text-rose-400 mx-1">$36.0</del>
              <span className="text-rose-400">$23.00</span>
          </div>

         </div>
        </div>
       <div className="w-full sm:w-1/2 lg:w-1/4 p-3 ">
        <div>
          <div className={`${styles.imgParent} relative bg-gray-100 rounded-md p-4`}>
            <img src='https://hostacmee.space/demo/bookchoix/wp-content/uploads/2021/03/healthy-eating-550x680.jpg' alt='poster book' className={` w-full shadow-md shadow-slate-300 mb-5 rounded-tl-lg rounded-br-lg cursor-pointer`}/>
            <div className={`${styles.layer} absolute inset-0 bg-rose-300  bg-opacity-70 flex justify-center items-center text-2xl rounded-md`}>
              <AiOutlineShoppingCart className= 'mx-2'/>
              <BsSuitHeart className= 'mx-2'/>
              <AiOutlineEye className= 'mx-2'/>
              <AiOutlineShareAlt className= 'mx-2' />
            </div>

          </div>

            <div className="p-5">
              <span className="text-gray-400 text-lg">
                <a href="">Foods & Cookery</a>
              </span>
              <h5 className="text-base sm:text-xl font-semibold mb-2">
              Eating Your Way to a Better Life
              </h5>
              <h6 className="text-gray-600 mb-3 ">
                <span className="text-gray-400 p-1">By</span>Herry
              </h6>
              <del className="text-rose-400 mx-1">$27.0</del>
              <span className="text-rose-400">$17.00</span>
          </div>

         </div>
        </div>
        
      
      
       </div>

      </div>
    </Fragment>
  );
}
