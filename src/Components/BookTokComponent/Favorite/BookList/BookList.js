import React, { Fragment } from 'react';
import { ImBooks } from "react-icons/im";


export default function BookList({books , isLoading}) {
    

  return <Fragment>
  <div className='bg-cover bg-center' style={{backgroundImage:`url(https://media.istockphoto.com/id/690358116/photo/stack-of-colorful-books-education-background-back-to-school-book-hardback-colorful-books-on.jpg?s=612x612&w=0&k=20&c=brhGGZZv5qxp5Tj8ekFndpVL54HH6OMbyez0hWS_wEM=)`}}>
  <div className='py-20 bg-black bg-opacity-20'>

    <div className="flex justify-center items-center text-3xl sm:text-5xl font-extrabold mb-5  ">
        <span className="text-amber-600" > <ImBooks /> </span>      
          <h3>BookList</h3>
        </div>
        <div className='list-none p-3 lg:w-3/4 mx-auto'>

       {isLoading?<div className="center">

<div className="bg-slate-100 text-center">
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
</div> : books ? books.slice(4,8).map( (book)=>{
        return <div key={book.id} className={`text-lg flex  justify-between items-center  p-4 rounded-md mb-4 font-medium bg-white bg-opacity-70 md:w-2/3 m-auto`}>
            <p className='mb-0 '>{book.title}</p>
            <div>
                <a href={book.formats['text/html']} className='cursor-pointer text-lg px-3 py-2 bg-green-900 rounded-md mx-2 text-white hover:bg-white duration-700 hover:text-green-900'>Read</a>
                {/* <button type='button' className='text-lg px-3 py-2 bg-red-900 rounded-md mx-2  text-white hover:bg-white duration-700 hover:text-red-900'>Delete</button> */}
            </div>
        </div>})
          :  <Fragment>
        <div className='bg-orange-50 text-center rounded-md'>
        <p className='text-2xl font-black text-red-800  p-5'>There is No book Selected Yet</p>
          <img src='https://cdn.dribbble.com/users/2140475/screenshots/15216274/media/55e1042bb088cfd81dc6bb1fbe8a2687.jpg?compress=1&resize=450x338&vertical=center' className='w-1/2 m-auto' alt='select book'/>
          </div>
        </Fragment>
         }
         </div>

  </div>
  </div>
  </Fragment>

}
