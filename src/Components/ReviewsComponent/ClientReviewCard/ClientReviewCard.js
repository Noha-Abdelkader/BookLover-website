import React, { Fragment } from 'react'
import { AiFillStar } from "react-icons/ai";


export default function ClientReviewCard() {
  return <Fragment>
    <div className='border-2 border-gray-300 rounded-md w-100 py-10 px-4 text-center hover:bg-yellow-200 duration-700 transition-all '>
    <div className="flex justify-center items-center text-orange-400 mb-7">
           <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
           </div>

<div >
<h6 className='text-xl font-semibold mb-5'>"Quick and friendly"</h6>
<p className='text-md text-orange-800 mb-5'>Ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar egestas mi lorem. Adipiscing felis, vel faucibus in.</p>
<div>
<h6 className='font-semibold' >Guy Hawkins</h6> <span className='text-zinc-500 font-semibold' >7 months ago <small className='text-orange-600'>03/03</small></span>
</div>
</div>
</div>
  </Fragment>
}
