import { configureStore } from '@reduxjs/toolkit'
import { usertodoReducer } from './Usertodo/usertodoSlice'
import { userTodoApi } from './userTodoApi'




export const store = configureStore({
   reducer: {
      todos: usertodoReducer,
      [userTodoApi.reducerPath]: userTodoApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userTodoApi.middleware),
})

