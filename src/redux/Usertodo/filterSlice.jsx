import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   filter: "-",
}


const filterSlice = createSlice({
   name: "usertodo",
   initialState,
   reducers: {

      setFilter: (state, { payload }) => {
         state.filter = payload
      },
   },
})


export const filterReducer = filterSlice.reducer
export const { addUser, removeUser, removeAllUser, setFilter, editUser } = filterSlice.actions