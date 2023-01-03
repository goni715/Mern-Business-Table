import {createSlice} from "@reduxjs/toolkit";

export const settingsSlice=createSlice({

    name:'settings',
    initialState:{
        loader:"displayNone"
    },
    reducers:{
        ShowLoader:(state)=>{
            state.loader="text-center"
        },
        HideLoader:(state)=>{
            state.loader="displayNone"
        }
    }

})

export  const {ShowLoader,HideLoader}=settingsSlice.actions;
export const selectLoader = (state) => state.settings.loader;
export const settingsSliceReducer = settingsSlice.reducer;