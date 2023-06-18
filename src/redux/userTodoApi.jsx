import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userTodoApi = createApi({
   tagTypes: ["users"],
   reducerPath: "userTodoApi",
   baseQuery: fetchBaseQuery({
      baseUrl: "https://64786e26362560649a2dc092.mockapi.io/",
   }),

   endpoints: builder => ({
      getUserTodos: builder.query({
         query: () => "users",
         providesTags: ["users"]
      }),
      addUserTodos: builder.mutation({
         query: body => ({
            url: `users`,
            method: "POST",
            body
         }),
         invalidatesTags: ["users"]
      }),
      removeUserTodos: builder.mutation({
         query: id => ({
            url: `users/${id}`,
            method: "DELETE",
         }),
         invalidatesTags: ["users"]
      }),
      editUserTodos: builder.mutation({
         query: body => ({
            url: `users/${body.id}`,
            method: "PUT",
            body
         }),
         invalidatesTags: ["users"]
      }),
   })
})


export const {
   useGetUserTodosQuery,
   useAddUserTodosMutation,
   useRemoveUserTodosMutation,
   useEditUserTodosMutation
} = userTodoApi