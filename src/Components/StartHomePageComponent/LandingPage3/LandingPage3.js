import React, { Fragment } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from './LandingPage3.module.css';


export default function LandingPage3() {
  return <Fragment>
    <div className='bg-black text-white flex p-8 py-20 gap-6'>
    <div className='w-100 md:w-1/2 xl:w-1/4 m-auto text-center'>
        <h5 className='text-4xl lg:text-6xl mb-7 capitalize p-3 sm:p-0'>best books of the year sale</h5>
        <strong className='block text-7xl mb-6 '>20%</strong>
        <span className='text-amber-700 font-semibold text-xl mb-7 inline-block'>top 10 books, boxed sets & more</span>

    <button className={`${styles.shopAllBtn}  py-2 ps-5  sm:ps-10 text-md md:text-lg border-2 border-amber-700 text-white flex items-center justify-between mx-auto font-bold hover:bg-amber-700 hover:text-slate-50 hover:border-transparent transition-all duration-900 mb-7`}>
            Shop All
            <FaLongArrowAltRight className="ms-5 sm:ms-10  me-2 sm:me-5" />
          </button>
    </div>
<div className='hidden md:block w-100 md:w-1/2 bg-fixed bg-cover bg-center' style={{backgroundImage:`url(https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h4-bg-parallax.jpg)`}}>
</div>


    </div>

  </Fragment>
}
