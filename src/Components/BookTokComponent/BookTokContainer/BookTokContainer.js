import React, { Fragment, useEffect } from "react";
import BookTok from "../BookTok/BookTok";
import LandingPage7 from "../../BookTokComponent/LandingPage7/LandingPage7";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../../Store/bookSlice";
import BookContainer from "../Favorite/BookContainer/BookContainer";


export default function BookOfMonth() {
  // ---------- get init State from bookSlice-----------
  const isLoading = useSelector(state=>state.bookSlice.isLoading);
  const books = useSelector(state=>state.bookSlice.books).slice(1);

//-------- dispatch --------------
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Fragment>
      <BookTok isLoading={isLoading} books={books}/>
      <LandingPage7 />
      <BookContainer books={books} isLoading={isLoading}/>
    </Fragment>
  );
}
