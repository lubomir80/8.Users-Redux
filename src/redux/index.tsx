import { configureStore } from '@reduxjs/toolkit'
import { usertodoReducer } from './Usertodo/usertodoSlice'


export const store = configureStore({
   reducer: usertodoReducer,
})