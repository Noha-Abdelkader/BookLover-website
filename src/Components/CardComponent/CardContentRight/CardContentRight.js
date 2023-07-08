import React, { Fragment } from 'react'
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

export default function CardContentRight({title, authors ,downLoaded}) {
  
  
  return <Fragment>
     <div className="px-2 py-3 text-left">
          <div className=" text-yellow-400 mb-2">
           <div className="flex justify-start items-center">
           <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <BsStarHalf />
           </div>
            <span className="text-slate-400 ms-2  mb-2">(5 reviews)</span>
          </div>

          {authors ?<span className="uppercase text-md  text-slate-400 ">
            BY: {authors} </span> : ''}
            
          <span className="font-semibold block text-md hover:underline mb-2">
            {title}
          </span>
         
            <span className=" text-md flex gap-1  items-center text-amber-700 font-bold"><FaDownload/>{downLoaded}</span>
        </div>
  </Fragment>
}
