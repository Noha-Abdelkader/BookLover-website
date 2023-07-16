import React, { Fragment } from 'react';
import CardContentLeft from "../../CardComponent/CardContentLeft/CardContentLeft";
import CardContentRight from "../../CardComponent/CardContentRight/CardContentRight";

import { TbShoppingCartPlus } from "react-icons/tb";


export default function MonthBookCard({book }) {


//--------------------
return <Fragment>
 <div className="w-1/2 relative translate-x-1/2 translate-y-4 z-20 shadow-lg shadow-slate-500 rounded-md ">
              <CardContentLeft src={book.formats["text/html"]} preview={book.formats['image/jpeg']}  />
              </div>

  <div className='bg-orange-50  p-4 rounded-md relative z-10'>
      <div>
     
      <div className='absolute top-0 end-0 p-2 bg-red-800 rounded-bl-md rounded-tr-md text-white font-black'><span>{book.languages}</span></div>
      {/* <div className="flex items-end gap-3 flex-wrap sm:flex-nowrap "> */}
              
              <div  className=" px-3">
              <CardContentRight title={book.title} authors={book.authors.name} downLoaded={book.download_count} />
              </div>

              <div className="font-bold rounded-md flex justify-between items-center mt-4 shadow-md shadow-slate-200 bg-white hover:bg-amber-700 hover:text-slate-50 duration-700 cursor-pointer relative">
                <button className=' uppercase  p-2 lg:p-3 text-sm lg:text-md'>Add to card</button>
                <span className="bg-amber-700 bg-opacity-20 hover:bg-white hover:text-amber-700 p-3 lg:p-4 rounded-tr-md rounded-br-md absolute end-0 top-0 bottom-0">
                  <TbShoppingCartPlus/>
                </span>
              </div>
      </div> 
     
            </div>
  </Fragment>
}
