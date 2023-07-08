import React, { Fragment } from 'react'
import styles from './LandingPage2.module.css';
import { FaLongArrowAltRight } from "react-icons/fa";


export default function LandingPage2() {
  return<Fragment>

    <div className='bg-cover bg-center  h-full' style={{backgroundImage:`url(https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h1_bg-1-1.jpg)`}}>
    <div className={`${styles.layer} px-10 py-28 sm:py-40 `}>

<div className='text-center sm:text-left text-4xl'>
<span className='text-amber-700 mb-3 inline-block font-bold'> <span className='text-6xl lg:text-8xl'>20%</span> off select books</span>
    <h5 className='mb-7 font-black'>Read the world: authours of korean</h5>
<button className={`${styles.shopAllBtn}  py-2 ps-5  sm:ps-10 text-base md:text-lg border-2 border-amber-700 text-black flex items-center justify-between mx-auto font-bold hover:bg-amber-700 hover:text-slate-50 hover:border-transparent transition-all duration-900 ms-auto sm:ms-0 `}>
            Shop All
            <FaLongArrowAltRight className="ms-5 sm:ms-10  me-2 sm:me-5" />
          </button>
</div>
    </div>
    </div>

  </Fragment>
}
