import React, { Fragment } from 'react'
import { GiChessKing } from "react-icons/gi";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle ,AiFillInstagram , AiFillYoutube } from "react-icons/ai";
import styles from "./Footer.module.css";

export default function Footer() {
  return <Fragment>
    <div className='p-10 px-5 sm:py-24 bg-black text-white '>
    <h4 className='text-2xl sm:text-4xl flex justify-center items-baseline mb-10'><GiChessKing className='text-amber-700 mx-2'/>BookLovers</h4>
    <div className='flex flex-wrap capitalize justify-center items-center gap-4 text-xs  sm:text-lg text-gray-400 mb-5'>
    <a className='cursor-pointer hover:text-amber-600 duration-500'>Contact</a>
    <a className='cursor-pointer hover:text-amber-600 duration-500'>Privacy policy</a>
    <a className='cursor-pointer hover:text-amber-600 duration-500'>Terms of service</a>
    <a className='cursor-pointer hover:text-amber-600 duration-500'>Returns</a>
    </div>
<div className='flex justify-center items-center text-2xl gap-3'>
<div className={`${styles.footerIcon}`}>
    <RiFacebookCircleFill />
</div>
    <div className={`${styles.footerIcon}`}>
    <AiFillTwitterCircle  />
    </div>
    <div className={`${styles.footerIcon}`}>
    <AiFillInstagram  />
    </div>
    <div className={`${styles.footerIcon}`}>
    <AiFillYoutube />
    </div>
</div>

    </div>
  </Fragment>
}
