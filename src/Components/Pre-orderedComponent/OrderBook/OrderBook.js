import React, { Fragment } from 'react'
import PreorderBooks from '../PreorderBooks/PreorderBooks'
import Discounts from '../Discounts/Discounts'
import OnlineBook from '../OnlineBook/OnlineBook';
import Magazines from '../Magazines/Magazines';


export default function OrderBook() {
  return <Fragment>
<Discounts/>

    <OnlineBook/>
    <PreorderBooks/>
    <Magazines/>
    
  </Fragment>
}
