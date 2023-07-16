import {  createSlice } from "@reduxjs/toolkit";
import { bookApi } from "./Api";

//========== book slice =================
let initialState = {
    books:'',
};

const bookSlice = createSlice({
    name:'getBookSlice',
    initialState,
    reducers:{}, 
    extraReducers: (builder) =>{
        builder.addMatcher(bookApi.endpoints.getBooks.matchFulfilled , (state,action)=>{
            state.books = action.payload.results;
        })
       }
});

// ==============================================



export default bookSlice;     


