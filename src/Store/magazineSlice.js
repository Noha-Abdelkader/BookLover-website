// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getMagazines = createAsyncThunk('getMagazine/magazine' , async(_,thunkAPI)=>{
//     const result = await axios.get('https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=AIzaSyAlL8IayhadzDoPiQsSev9wK3PsNeh8ZDA');
//     return result;
// })




// export const magazinesSlice = createSlice({
//     name:'getMagazine',
//     initialState:{magazines:'' , isLoading: true},
//     reducers:{},
//     extraReducers:{
//         [getMagazines.pending]:(state,action)=>{ 
//             state.isLoading = true;
//         },
//         [getMagazines.fulfilled]:(state,action)=>{ 
//             state.isLoading = false;
//             state.magazines = action.payload.data.items;
        
//         },
//         [getMagazines.rejected]:(state,action)=>{
//             console.log(action);
//             state.isLoading = false;
//         }
//     }
// });

// export default magazinesSlice;