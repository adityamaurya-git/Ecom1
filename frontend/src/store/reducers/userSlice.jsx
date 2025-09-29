import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : null,
}

export const userSlice = createSlice({
    name:"Users",
    initialState,
    reducers:{
        loadUser:(state , action)=>{
            state.data = action.payload;
        },
        removeUser:(state,action)=>{
            state.data = null;
        }
    },
})

export const {loadUser , removeUser} = userSlice.actions