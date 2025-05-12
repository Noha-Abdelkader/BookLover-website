import React, { Fragment, useEffect, useState } from "react";
import BookTok from "../BookTok/BookTok";
import LandingPage7 from "../../BookTokComponent/LandingPage7/LandingPage7";
// import { useDispatch, useSelector } from "react-redux";
// import { bookApi, getBooks, useGetBooksQuery } from "../../../Store/bookSlice";
import BookContainer from "../Favorite/BookContainer/BookContainer";
import { useGetBooksMutation } from "../../../Store/Api";


export default function BookTokContainer() {

    let [books , setBooks]= useState([]);
    const [getBooks , {isLoading}] = useGetBooksMutation();


//==== fetch data ============================
const fetchBooks = async()=>{
    try{
        let response = await getBooks();
       setBooks(response.data.results);

    }catch(err){
        console.log(err);
    }
};

//======= useEffect =========================
useEffect(()=>{
fetchBooks();
},[]);

//======= return =========================

  return (
    <Fragment>
      <BookTok isLoading={isLoading} books={books.slice(0,15)}/>
      <LandingPage7 />
      <BookContainer books={books} isLoading={isLoading}/>
    </Fragment>
  );
}
