import React, { Fragment } from "react";
import styles from './LandingPage7.module.css';

export default function LandingPage7() {
  return (
    <Fragment>
      <div className="py-10 px-5 flex flex-wrap md:flex-nowrap gap-6  bg-gray-100 border-y-2 border-slate-400">
        <div className="md:w-1/2 ">
          <div className={`${styles.bgScale} overflow-hidden  rounded-md relative cursor-pointer`}>
          <img  src="https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h5_bn-1.jpg" alt='book poster' className='w-full '/>

          <div className="text-left text-black absolute inset-0 flex justify-end items-center">
<div className="p-3">
          <h5 className="text-lg sm:text-2xl md:text-lg lg:text-2xl font-semibold mb-2 text-yellow-500">20% off select books</h5>
          <h6 className="text-xl sm:text-3xl md:text-xl lg:text-3xl font-black mb-4 uppercase">carrie soto is black</h6>
          <button className="border-2 border-black hover:bg-pink-400 hover:bg-opacity-80 hover:text-white hover:border-white duration-700 py-1 px-2 sm:py-2 sm:px-3  ">Shop Now</button>
          </div>
          </div>
          
          </div>
        </div>


        <div className="md:w-1/2">
        <div className={`${styles.bgScale} overflow-hidden  rounded-md relative cursor-pointer`} >
          <img  src="https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h5_bn-2.jpg" alt='book poster' className='w-full'/>
          <div className="text-left text-black absolute inset-0 flex justify-end items-center">
          <div className="p-3">
          <h5 className="text-lg sm:text-2xl md:text-lg lg:text-2xl font-semibold mb-2 text-yellow-500">40% off select books</h5>
          <h6 className="text-md sm:text-3xl md:text-base lg:text-xl xl:text-3xl font-black mb-4 uppercase">new from michelle obama</h6>
          <button className="border-2 border-black hover:bg-pink-400 hover:bg-opacity-80 hover:text-white hover:border-white duration-700 py-1 px-2 sm:py-2 sm:px-3  ">Shop Now</button>
          </div>
          </div>
          
          </div>
        </div>
      </div>
    </Fragment>
  );
}
