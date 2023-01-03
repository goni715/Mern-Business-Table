import {configureStore} from "@reduxjs/toolkit";
import {settingsSliceReducer} from "../state-slice/settings-slice";
import {productSliceReducer} from "../state-slice/productSlice";

export default configureStore({

    reducer:{
        settings:settingsSliceReducer,
        product:productSliceReducer
    }
})