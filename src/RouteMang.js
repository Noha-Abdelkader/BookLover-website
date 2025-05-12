import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import StartHomePage from './Components/StartHomePageComponent/StartHomePage/StartHomePage';
import Home from './Components/Home/Home';
import OrderBook from './Components/Pre-orderedComponent/OrderBook/OrderBook';
import Search from './Components/SearchComponent/Search/Search';
import BookOfMonth from "./Components/StartHomePageComponent/MonthBookCards/MonthBookCards";
import BestSellersCards from './Components/StartHomePageComponent/BestSellersCards/BestSellersCards';
import Author from './Components/AuthorComponent/Author/Author';
import Reviews from './Components/ReviewsComponent/Reviews/Reviews';
import NavBar from './Components/NavBar/NavBar';



export default function RouteMang() {

    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<NavBar/>}>
    
            <Route index element={<StartHomePage/>}/>
            <Route path="/StartHomePage" element={<StartHomePage />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route p  ath="/orderBook" element={<OrderBook />}></Route>
            <Route path="/search" element={<Search />}></Route>
    
            <Route path="/BookOfMonth" element={<BookOfMonth />}></Route>
            <Route path="/BestSellers" element={<BestSellersCards />}></Route>
            <Route path="/Author" element={<Author />}></Route>
            <Route path="/Reviews" element={<Reviews />}></Route>

            <Route path="*" element={<StartHomePage />}></Route>

          </Route>
        )
      );


  return <RouterProvider router={router}/>
}
