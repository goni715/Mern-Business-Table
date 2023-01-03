import {createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({

    name:'product',
    initialState:{
        Total:0,
        AllProduct:[]
    },
    reducers:{
        SetTotal:(state,action)=>{
            state.Total=action.payload;
        },
        SetAllProduct:(state,action)=>{
            state.AllProduct=action.payload;
        }
    }
})



export  const {SetTotal,SetAllProduct}=productSlice.actions;
export const selectTotal = (state) => state.product.Total;
export const selectAllProduct = (state) => state.product.AllProduct;

export const productSliceReducer = productSlice.reducer;