import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
   userstodo: [],
   filter: "-",
}


const usertodoSlice = createSlice({
   name: "usertodo",
   initialState,
   reducers: {
      addUser: {
         reducer: (state, { payload }) => {
            state.userstodo.push(payload)
         },
         prepare: (user) => {
            const id = nanoid()
            return { payload: { id, ...user } }
         }
      },
      removeUser: {
         reducer: (state, { payload }) => {
            const userIndex = state.userstodo.indexOf(payload);
            state.userstodo.splice(userIndex, 1)
         },
      },
   },
})


export const usertodoReducer = usertodoSlice.reducer
export const { addUser, removeUser } = usertodoSlice.actions