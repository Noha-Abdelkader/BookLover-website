
import React from 'react'
import styles from './BookInfo.module.css';
import { WiStars } from "react-icons/wi";


export default function BookInfo() {
  return <div >
  <div className="flex justify-center items-center text-2xl sm:text-3xl font-extrabold mb-5  ">
        <span className="text-amber-600 text-5xl" > <WiStars /> </span>      
          <h3>Book Details</h3>
        <span className="text-amber-600 text-5xl" > <WiStars /> </span>      
        </div>
<p className='bg-red-100 p-2 rounded-md mb-4  text-lg'>There  no post selected yet , please select !!</p>
<div className={`bg-stone-500 bg-opacity-40 rounded-md p-3 py-5 font-black  ${styles.bg}`}>
    <p className='mb-2'>Title :</p>
    <p className='mb-2'>Price :</p>
    <p className='mb-2'>Description :</p>
</div>
  </div>;
}