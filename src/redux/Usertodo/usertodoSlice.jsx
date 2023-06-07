import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   userstodo: [],
   filter: "-",
}


const usertodoSlice = createSlice({
   name: "usertodo",
   initialState,
   reducers: {

   }
})


export const usertodoReducer = usertodoSlice.reducer