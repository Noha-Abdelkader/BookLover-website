// import React, { Fragment, useEffect , useState } from 'react'

// export default function CountDown() {
//     const [days , setDays]=useState(0);
//     const [hours , setHours]=useState(0);
//     const [minutes , setMinutes]=useState(0);
//     const [seconds , setSeconds]=useState(0);
//     useEffect(()=>{
//     let interval= setInterval(()=>{

// if(seconds>0){
//     setSeconds(seconds-1);
// }
// else if(minutes>0){
//     setMinutes()
// }

// //     const now = new Date().getTime();
// //     const coutDownDate = new Date('2024,05,30').getTime()
// // const distance = coutDownDate - now;
// //                                //day min  sec  ms
// // const days = Math.floor(distance / (24*60*60*1000));
// //                                               // msec sec min
// // const hours = Math.floor(distance % ((24*60*60*1000)/(1000*60*60)));
// //                                    //
// // const minutes = Math.floor(distance % ((60*60*1000)/(1000*60))); 
// // const seconds = Math.floor(distance % ((60*1000)/(1000))); 

//     });


//     return()=>{
//         clearInterval(interval);
//     }
//    },[timerSeconds])

//   return <Fragment>
//     <div className='flex justify-center items-center px-3 py-2 gap-x-2'>
//     <div className='flex flex-col'>
//     <span className='text-lg'>Days</span>
//     <span className='mx-2 font-black text-3xl text-pink-700' >{Days}</span>
//     </div>
//     <div className='flex flex-col'>
//     <span className='text-lg'>Hours</span>
//     <span className='mx-2 font-black text-3xl text-pink-700'>{Hours}</span>
//     </div>

//   <div className='flex flex-col'>
//     <span className='text-lg'>Mins</span>
//     <span className='mx-2 font-black text-3xl text-pink-700'>{Minutes}</span>
//     </div>

//   <div className='flex flex-col'>
//     <span className='text-lg'>Sec</span>
//     <span className='mx-2 font-black text-3xl text-pink-700'>{Seconds}</span>
//     </div>
//     </div>
//   </Fragment>
// }
