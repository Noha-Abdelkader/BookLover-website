import React, { Fragment } from "react";
import { ImBooks } from "react-icons/im";
import styles from './BestSellersCards.module.css';

export default function BestSellersCards({books,isLoading}) {

  return <Fragment>
      <div className="px-5 py-16 bg-orange-50">
        <div className="flex justify-center items-center text-3xl sm:text-5xl font-extrabold mb-5  ">
        <span className="text-amber-600" > <ImBooks /> </span>      
          <h1>BestSellers</h1>
        </div>

         <div className='flex flex-wrap items-start justify-center p-4 '>

    
       { isLoading ?<div className="center">

<div className=" text-center">
<div className="wave"></div>
<div className="wave"></div>
<div className="wave"></div>
<div className="wave"></div>
<div className="wave"></div>
<div className="wave"></div>
<div className="wave"></div>
<div className="wave"></div>
<div className="wave"></div>
<div className="wave"></div>
</div>

</div> : books ? books.map((book)=>{
          return <div key={book.id} className="w-1/3 md:w-1/4 lg:w-1/6 p-4 ">
            <a href={book.formats['text/html']} rel="noreferrer" target='_blank' className="flex justify-center items-center cursor-pointer " >
            <div className={`${styles.layer} relative z-0  `}>

            <div className="">
            <img src={book.formats["image/jpeg"]} alt={book.title}  className="w-full"/>
            </div>
           
<div className={` absolute inset-0 z-10  flex justify-center items-center p-2  font-black  ${styles.content}`}>
<h5>{book.title}</h5>
</div>
            <div className="absolute bottom-0 inset-x-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
               <path fill="#ffedd5" fillOpacity="1" d="M0,192L40,170.7C80,149,160,107,240,117.3C320,128,400,192,480,192C560,192,640,128,720,128C800,128,880,192,960,186.7C1040,181,1120,107,1200,96C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
               </path>
               </svg>
            </div>
            </div>
            </a>
            </div> }) :<Fragment>
        <div className='bg-orange-50 text-center rounded-md'>
        <p className='text-2xl font-black text-red-800  p-5'>There is No book</p>
          <img src='https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg' className='w-1/2 m-auto' alt='select book'/>
          </div>
        </Fragment> }

       </div>
       </div>
      
     </Fragment>;
     
}
 