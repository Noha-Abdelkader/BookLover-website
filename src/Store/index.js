import { configureStore } from "@reduxjs/toolkit";

import bookSlice from "./bookSlice";

import magazineSlice from "./magazineSlice";
import { authSlice } from "./authSlice";


const store = configureStore({
  reducer:{
  bookSlice:bookSlice.reducer,
  magazineSlice:magazineSlice.reducer,
  authSllice:authSlice.reducer,
  }
  })
export default store;