import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './Usertodo/filterSlice'
import { userTodoApi } from './userTodoApi'




export const store = configureStore({
   reducer: {
      filter: filterReducer,
      [userTodoApi.reducerPath]: userTodoApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userTodoApi.middleware),
})

