import React, { Fragment , useEffect } from 'react'
import { useSelector } from 'react-redux'

//===============components =========
import LandingPage5 from '../LandingPage5/LandingPage5'
import BestSellersCards from '../BestSellersCards/BestSellersCards'
import LandingPage2 from '../LandingPage2/LandingPage2'
import LandingPage3 from '../LandingPage3/LandingPage3'
import MonthBookCards from '../MonthBookCards/MonthBookCards';




//======= cutstom hook =============
import {  useGetBooksMutation} from '../../../Store/Api';

export default function StartHomePage() {
    
  
  // ------- state -----
  const books = useSelector(state=>state.bookSlice.books.slice(0,15));

//------------use our custom hook -----------
const  [ getBooks ,{isLoading}] = useGetBooksMutation();

//=================
const fetchBooks = async()=>{
  try{
 await getBooks();

  }
  catch(err){
    console.log(err);
  }
};

// ======= useEffect ===================
useEffect(()=>{
fetchBooks();

} , [])




//======= return ==================
  return <Fragment>
    <LandingPage5/>
    <BestSellersCards books={books} isLoading={isLoading}/>
    <LandingPage2/>
    <MonthBookCards books={books} isLoading={isLoading}  />
    <LandingPage3/>
  </Fragment>
}

// instant change Nav.Link To Link 
//<Nav.Link to={/} as={Link}> Prod  </Nav.Link>