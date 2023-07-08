import React, { Fragment } from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { CiRead } from "react-icons/ci";
import { BiCommentAdd } from "react-icons/bi";
import styles from './CardContentLeft.module.css';


export default function CardContentLeft({src,preview}) {
return <Fragment>
    <div className={`${styles.card_img} relative overflow-hidden  text-xl`}>
          <a href={src} rel="noreferrer" target='_blank'>
          <img src={preview} alt="book cover" className={` w-full  `}/></a>

         
          <div className={`${styles.cardB_layer} absolute inset-0 flex justify-evenly items-center bg-slate-900 bg-opacity-25 opacity-0 hover:opacity-100 py-2 `}>
            <a href={src} rel="noreferrer" target='_blank'> <CiRead className="text-amber-600 cursor-pointer"/></a>  
            <MdFavoriteBorder className={`${styles.card_favIcon} absolute top-0 left-0 mt-2 ms-2 text-red-700 cursor-pointer` } />
          <BiCommentAdd className={`${styles.card_commentIcon} absolute right-0 top-0 mt-2 me-2 text-green-700 cursor-pointer`}/>
          </div>
           
        </div>
  </Fragment>
}
