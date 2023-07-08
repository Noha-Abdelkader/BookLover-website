import React, { Fragment } from 'react';
import  styles from './AboutAuthor.module.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { GiPolarStar } from "react-icons/gi";
import { WiStars } from "react-icons/wi";
import { MdOutlineMenuBook } from "react-icons/md";
import { BiPen } from "react-icons/bi";
import AuthorGallery from '../AuthorGallery/AuthorGallery';


export default function AboutAuthor() {
  return <Fragment>
  <div className='p-10  pt-20 bg-orange-50'>
  
  <div className='flex  flex-col sm:flex-row  gap-10'>
    
    <div className={`${styles.authorImg} m-auto w-full sm:w-1/2`}>

    <img src='http://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/author-2.jpg' alt='author' className='border-amber-700 border-2 p-4  bg-orange-100 relative w-full lg:w-2/3 m-auto'/>

    <div className={`${styles.authorIcon} absolute top-8 left-4 lg:top-24 lg:left-10`}>
    <GiPolarStar className='text-amber-700 text-5xl  lg:text-6xl '/>
    </div>

    <div className={`${styles.authorIcon} absolute  bottom-8 left-4 lg:bottom-24 lg:left-10`}>
    <BiPen className='text-amber-700 text-5xl lg:text-6xl '/>

    </div>
    
    <div className={`${styles.authorIcon} absolute  top-8 right-4 lg:top-24 lg:right-10`}>
    <MdOutlineMenuBook className='text-amber-700 text-5xl lg:text-6xl  '/>
    </div>
    
    <div className={`${styles.authorIcon} absolute  bottom-8 right-4 lg:bottom-24 lg:right-10`}>
    <WiStars className='text-amber-700 text-5xl lg:text-6xl  '/>
    </div>
   

    </div>

    <div className='m-auto w-full sm:w-1/2 flex flex-col   '>

    <div className='mb-7'>
    <div className='flex justify-start items-center mb-4 text-2xl lg:text-5xl '>
    <RiUserStarFill className='text-amber-700 me-3 '/>
    <h4 className='font-bold  '>  About The Author</h4>
    </div>

        <p className='text-base sm:text-lg text-amber-800 mb-5'>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.</p>

        <button className={`${styles.shopAllBtn}  py-2 ps-5  sm:ps-10 text-sm md:text-lg border-2 border-amber-700 text-black flex items-center justify-between mx-auto font-bold hover:bg-amber-700 hover:text-slate-50 hover:border-transparent transition-all duration-900 ms-0`}>
            Shop All
            <FaLongArrowAltRight className="ms-5 sm:ms-10  me-2 sm:me-5" />
          </button>
    </div>

    
    <AuthorGallery/>

    </div>

    </div>

    {/* <div className='block lg:hidden '>
    <AuthorGallery/>
    </div> */}
  </div>
  </Fragment>
  };

