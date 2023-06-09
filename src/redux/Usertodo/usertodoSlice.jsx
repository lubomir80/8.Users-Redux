import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
   userstodo: [
      {
         id: "1",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fo-OWJ8FTU_BkyO9JuormaHqhltTjwUFXktOLhE&s",
         name: "Zidan",
         age: "18",
         status: "Yes",
         actions: "Edited avatar 5 minutes ago"
      },
      {
         id: "2",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fo-OWJ8FTU_BkyO9JuormaHqhltTjwUFXktOLhE&s",
         name: "Kate",
         age: "48",
         status: "Yes",
         actions: "Edited avatar 5 minutes ago"
      },
      {
         id: "3",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fo-OWJ8FTU_BkyO9JuormaHqhltTjwUFXktOLhE&s",
         name: "Adam",
         age: "50",
         status: "No",
         actions: "Edited avatar 5 minutes ago"
      },
      {
         id: "4",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fo-OWJ8FTU_BkyO9JuormaHqhltTjwUFXktOLhE&s",
         name: "Boris",
         age: "23",
         status: "Yes",
         actions: "Edited avatar 5 minutes ago"
      },
   ],
   filter: "-",
}


const usertodoSlice = createSlice({
   name: "usertodo",
   initialState,
   reducers: {

      setFilter: (state, { payload }) => {
         state.filter = payload
      },
      editUser: (state, { payload }) => {
         const userIndex = state.userstodo.findIndex(todo => todo.id === payload.id)
         state.userstodo[userIndex] = payload

      },
      addUser: {
         reducer: (state, { payload }) => {
            state.userstodo.unshift(payload)
         },
         prepare: (user) => {
            const id = nanoid()
            return { payload: { id, ...user } }
         }
      },
      removeUser: {
         reducer: (state, { payload }) => {
            const userIndex = state.userstodo.findIndex(todo => todo.id === payload)
            state.userstodo.splice(userIndex, 1)
         },
      },
      removeAllUser: {
         reducer: (state) => {
            state.userstodo = []
         },
      },
   },
})


export const usertodoReducer = usertodoSlice.reducer
export const { addUser, removeUser, removeAllUser, setFilter, editUser } = usertodoSlice.actions