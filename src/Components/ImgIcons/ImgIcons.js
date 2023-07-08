import React, { Fragment } from 'react'
import styles from './ImgIcons.module.css';
import { GiPolarStar } from "react-icons/gi";
import { WiStars } from "react-icons/wi";
import { MdOutlineMenuBook } from "react-icons/md";
import { BiPen } from "react-icons/bi";


export default function ImgIcons() {
  return <Fragment>
     <div className={`${styles.authorIcon} absolute top-14 left-0`}>
    <GiPolarStar className='text-amber-700 '/>
    </div>

    <div className={`${styles.authorIcon} absolute bottom-14 left-0`}>
    <BiPen className='text-amber-700 '/>

    </div>
    
    <div className={`${styles.authorIcon} absolute top-14 right-0`}>
    <MdOutlineMenuBook className='text-amber-700 '/>
    </div>
    
    <div className={`${styles.authorIcon} absolute bottom-14 right-0`}>
    <WiStars className='text-amber-700 '/>
    </div>
  </Fragment>
}
