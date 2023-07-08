import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
   
//api key : AIzaSyAlL8IayhadzDoPiQsSev9wK3PsNeh8ZDA
                                 

//  action                         // type prefix     payload creator(data send , fire action & get state)
export const getBooks = createAsyncThunk('bookSlice/getBooks' , async(arg, thunkApI)=>{
    
    const {rejectWithValue} = thunkApI ; // => func to handel error 
    
    try{
        // const result = await axios.get("https://www.googleapis.com/books/v1/volumes?q=ocean+subject&key=AIzaSyAlL8IayhadzDoPiQsSev9wK3PsNeh8ZDA");
        // const result = await axios.get('https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=AIzaSyAlL8IayhadzDoPiQsSev9wK3PsNeh8ZDA');

        const result = await axios.get("http://gutendex.com/books/?author_year_start=1800&author_year_end=1899");
         return result;
    }
    catch(error){
return rejectWithValue(error.message);
    }
     
} );

// ================
const bookSlice = createSlice({
    name:'bookSlice',
    initialState:{ books:'' , isLoading:false , error:false},
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(getBooks , (state,action)=>{
            console.log(state);
            console.log(action);
        })
        // builder.addCase[getBooks.pending , (state)=>{
        //     state.error = false;
        //     state.isLoading=true;
        // }],
        // builder.addCase[getBooks.fulfilled ,(state,action)=>{
        //     state.isLoading=false;
        //     state.books = action.payload.data.results.slice(0,10);
        // }],
        // builder.addCase[getBooks.rejected ,(state,action)=>{
        //     state.isLoading=false;
        //     state.error = action.payload;
        // }],
       }
})

export default bookSlice;     

