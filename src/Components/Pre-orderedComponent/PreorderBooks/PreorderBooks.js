import React, { Fragment } from 'react'
import { GiSpellBook } from "react-icons/gi";

export default function PreorderBooks() {
  return <Fragment>
    <div className='p-10 flex justify-center items-center flex-wrap md:flex-nowrap gap-5'>

    <div className='w-full md:w-1/2 relative z-0'>
<img src='https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h3-banner-2.jpg' alt='logo' className='h-full'/>
<img src='https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/h3-banner-decor.png' alt='logo' className='absolute -bottom-10 -right-6 z-10'/>
    </div>

<div className='w-full md:w-1/2 p-7'>
<h5 className=' text-xl md:text-3xl lg:text-4xl font-bold mb-5 flex'> <GiSpellBook className='text-amber-700 me-1 md:me-4'/> Preorder Books Now!</h5>
<p className='text-lg text-zinc-500 mb-7 '>Sed ut perspiciatis unde omnis iste natus error sit volu accusantium doloremque laudantium, totam remto.</p>
<p className='text-amber-600 mb-7'>Sed ut perspiciatis unde omnis iste natus error sit voluptatemio tium generators perspiciatis unde omnis iste natus erspiciatis il unde omnis in natus er e on.</p>
<div className='flex gap-4'>
   <img src='https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/app-1.jpg' alt='app store' className='w-[20%] h-[25%]'/>
   <img src='https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/app-2.jpg' alt='google store' className='w-[20%] h-[25%]'/>
   <img src='https://demothemedh.b-cdn.net/baloca/wp-content/uploads/2022/11/app-3.jpg' alt='amazon store' className='w-[20%] h-[25%]'/>
    </div>
    </div>
    </div>
  </Fragment>
}
