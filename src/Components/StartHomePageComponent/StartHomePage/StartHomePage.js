import React, { Fragment , useEffect } from 'react'
import LandingPage5 from '../LandingPage5/LandingPage5'
import BestSellersCards from '../BestSellersCards/BestSellersCards'
import LandingPage2 from '../LandingPage2/LandingPage2'
import LandingPage3 from '../LandingPage3/LandingPage3'
import { useDispatch, useSelector } from "react-redux";
import { getBooks} from '../../../Store/bookSlice';
import MonthBookCards from '../MonthBookCards/MonthBookCards';

export default function StartHomePage() {

    // ------- state -----
  const books = useSelector(state=>state.bookSlice.books);
  const isLoading = useSelector(state=>state.bookSlice.isLoading);

  // ------- dispatch -----
  const dispatch = useDispatch();

  // ------- useeffect  -----
useEffect(()=>{
dispatch(getBooks());
} , [dispatch])
        
  return <Fragment>
    <LandingPage5/>
    <BestSellersCards books={books} isLoading={isLoading}/>
    <LandingPage2/>
    <MonthBookCards isLoading={isLoading} books={books} />

    <LandingPage3/>

  </Fragment>
}
