import React, { Fragment } from 'react'
import styles from './AuthorOfMonth.module.css';
import { GiPolarStar } from "react-icons/gi";
import ImgIcons from '../../ImgIcons/ImgIcons';


export default function AuthorOfMonth() {
const imgs =['http://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/author.jpg' , 'http://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/author-1.jpg' ,'http://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/author-2.jpg','http://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/author-3.jpg'];
  
  return <Fragment>
    <div className='p-10 relative z-10'>
    <div className="flex justify-center items-center text-2xl sm:text-5xl font-extrabold mb-8  ">
          <GiPolarStar className="text-amber-600" />
          <span>Authors of the month</span> 
          <GiPolarStar className="text-amber-600" />
        </div>
<p className='text-center text-lg  font-medium sm:font-semibold mb-4'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<div className='grid grid-col-1 grid-row-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-8 md:gap-10 lg:gap-14 py-4 '>

{imgs.map((src,index)=>{
    return  <div className='w-full' key={index} >
<div className={` ${styles.authorImg} border-2 border-transparent hover:border-amber-700 hover:bg-orange-50 duration-700 transition-all relative p-3 mb-8`}>
    <img src={src} alt="author" className='w-100 rounded-[100%] '/>

    <div className={`${styles.authorIcon} text-6xl sm:text-3xl md:text-xl lg:text-3xl`}>
    <ImgIcons />
    </div>

</div>
<div className='text-center'>
    <h6 className='mb-3 text-lg md:text-2xl font-black cursor-pointer'>Georgia Ramirez</h6>
    <p className='mb-3 text-md md:text-lg font-semibold text-amber-700'> Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.</p>
</div>

</div>
})}
<div className='absolute bottom-0 right-0 left-0 -z-10 '>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(255 247 237)" fillOpacity="1" d="M0,64L80,96C160,128,320,192,480,197.3C640,203,800,149,960,144C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
</div>

</div>
    </div>
  </Fragment>
}
