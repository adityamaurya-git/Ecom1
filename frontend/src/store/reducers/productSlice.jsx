import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
}

export const productSlice = createSlice({
    name:"Products",
    initialState,
    reducers:{
        loadProduct:(state , action) =>{
            state.data = action.payload
        },
    }
})

export const { loadProduct} = productSlice.actions