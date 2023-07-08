import React, { Fragment } from 'react'

export default function Subscribe() {
  return<Fragment>
    <div className='p-10  sm:py-28 flex flex-wrap sm:flex-nowrap bg-orange-50 gap-7 ' >
    <div  className='w-full sm:w-1/2'>
<h5 className=' text-3xl sm:text-5xl font-black'>Subscribe to
our Newsletter</h5>
    </div>
    <div className='w-full sm:w-1/2'>
        <p className='mb-5 text-lg text-orange-900'>Give your inbox some love with new products, tips, & more. Sed ut perspiciatis unde omnis iste natus error sit volu accusa.</p>
<div className='flex justify-start'>
<input className='border-2 border-black placeholder:text-gray-500 p-3' placeholder='Your Email......'/><button className='bg-black text-white p-2 text-lg font-semibold'>Subscribe</button>

</div>
    </div>

   

    </div>
  </Fragment>
}
