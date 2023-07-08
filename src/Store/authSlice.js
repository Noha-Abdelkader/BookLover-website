import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const loginState = createAsyncThunk('authSlice/state' , async(arg, thunkApI)=>{
    const result = await axios.get('https://dummyjson.com/users/1');
    console.log(result.json());
})



export const authSlice = createSlice({
    name:'authSlice',
    initialState:{data:null , status:null},
    reducers:{

    },
    extraReducers:{
[loginState.pending]:(state,action)=>{console.log(action);},
[loginState.fulfilled]:(state,action)=>{console.log(action);},
[loginState.rejected]:(state,action)=>{console.log(action);}
    }
})