import React, { Fragment } from 'react';
import styles from './FeedBackCard.module.css';

export default function FeedBackCard() {
  return <Fragment>
    <div className='p-3 md:p-6 text-gray-400 border-gray-400 border-2 rounded-md'>
    <div className='flex justify-start items-center border-b-2 border-gray-400  mb-4 pb-3 gap-5 lg:gap-0'>
        <img src='https://hostacmee.space/demo/bookchoix/wp-content/uploads/2021/03/Henry.jpg' alt='personal pic' className={` rounded-full ${styles.setImg}`}/>
        <div >
            <h6 className='text-white font-semibold mb-2'>Henry</h6>
            <h6>Team Leader</h6>
            </div>

        </div>
        <p>Tempor id eu nisl nunc mi ipsum faucibus vitae. Vestibulum sed arcu non odio euismod lacinia. Sit amet consectetur adipiscing elit duis tristique.</p>

    </div>
  </Fragment>
}
