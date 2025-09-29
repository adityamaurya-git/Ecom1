import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data:[],
}

export const cartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        loadCart:(state , action) =>{
            state.data = action.payload
        },
    }
})

export const {loadCart} = cartSlice.actions