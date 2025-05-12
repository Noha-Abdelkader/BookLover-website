import React, { Fragment } from "react";
import Container from "./Components/Container/Container";
import Home from "./Components/Home/Home";
import LandingHome from "./Components/LandingPage/LandingHome";
import "aos/dist/aos.css";
import BestSellersCards from "./Components/StartHomePageComponent/BestSellersCards/BestSellersCards";
import Footer from "./Components/Footer/Footer";
import Subscribe from "./Components/Subscribe/Subscribe";
import "animate.css";
import NavBar from "./Components/NavBar/NavBar";
import {Route,Routes} from "react-router-dom";
import Author from "./Components/AuthorComponent/Author/Author";
import Reviews from "./Components/ReviewsComponent/Reviews/Reviews";
import OrderBook from "./Components/Pre-orderedComponent/OrderBook/OrderBook";
import Search from "./Components/SearchComponent/Search/Search";
import StartHomePage from "./Components/StartHomePageComponent/StartHomePage/StartHomePage";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import BookOfMonth from "./Components/StartHomePageComponent/MonthBookCards/MonthBookCards";
import RouteMang from "./RouteMang";
import BookTokContainer from "./Components/BookTokComponent/BookTokContainer/BookTokContainer";


export default function App() {

return  <Fragment>
      <Container>
        <NavBar/>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<StartHomePage />}></Route>
          <Route path="*" element={<StartHomePage />}></Route>
          <Route path="/StartHomePage" element={<StartHomePage />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/orderBook" element={<OrderBook />}></Route>
          <Route path="/search" element={<Search />}></Route>

          <Route path="/BookTok" element={<BookTokContainer/>}></Route>
          <Route path="/BestSellers" element={<BestSellersCards />}></Route>
          <Route path="/Author" element={<Author />}></Route>
          <Route path="/Reviews" element={<Reviews />}></Route>
        </Routes>

        {/* <LandingHome/> */}
        <Subscribe />
        <Footer />
      </Container>
    </Fragment>;
}
