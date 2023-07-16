import { configureStore } from "@reduxjs/toolkit";

import getBookSlice from "./bookSlice";
import { bookApi, magazineApi } from "./Api";


// import magazineSlice from "./magazineSlice";
// import { authSlice } from "./authSlice";


const store = configureStore({
  reducer:{
  bookSlice:getBookSlice.reducer,

  // magazineSlice:magazineSlice.reducer,
  // authSllice:authSlice.reducer,

  
  [bookApi.reducerPath] :bookApi.reducer,
  [magazineApi.reducerPath]:magazineApi.reducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(bookApi.middleware)
  })
export default store;

