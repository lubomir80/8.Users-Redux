import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userTodoApi = createApi({
   reducerPath: "userTodoApi",
   baseQuery: fetchBaseQuery({
      baseUrl: "https://64786e26362560649a2dc092.mockapi.io/",
   }),

   endpoints: builder => ({
      getUserTodos: builder.query({
         query: () => "data"
      }),
   })
})


export const { useGetUserTodosQuery } = userTodoApi