import React, { Fragment } from 'react'
import BookList from '../BookList/BookList'
import BookInfo from '../BookInfo/BookInfo'
import NewBook from '../NewBook/NewBook'

export default function BookContainer({books,isLoading}) {

  
  return <Fragment>

            <BookList books={books} isLoading={isLoading}/>
            {/* <div className='flex flex-wrap md:flex-nowrap gap-10  py-12 px-5 relative z-10'>
            <div  className='w-full md:w-1/2'>
            <BookInfo />
            </div>
            <div  className='w-full md:w-1/2'>
            <NewBook/>
            </div>
            <div className='absolute bottom-0 right-0 left-0 -z-10 '>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(255 237 213)" fillOpacity="1" d="M0,64L80,96C160,128,320,192,480,197.3C640,203,800,149,960,144C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
 </div> 
            </div> */}
  </Fragment>
  
  
}
