import React from 'react';
import styles from './NewBook.module.css';
import { WiStars } from "react-icons/wi";

export default function NewBook() {
  return <div>
  
        <div className="flex justify-center items-center text-2xl sm:text-3xl font-extrabold mb-5  ">
        <span className="text-amber-600 text-5xl" > <WiStars /> </span>      
          <h3>Add New Book</h3>
        <span className="text-amber-600 text-5xl" > <WiStars /> </span>      

        </div>

<div className='flex flex-wrap'>
<input className={`${styles.input}`} placeholder='bookname'></input>
<input className={`${styles.input}`} placeholder='bookprice'></input>
<input className={`${styles.input}`} placeholder='discription'></input>
</div>
  </div>
}
