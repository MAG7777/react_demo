import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_URL_API;


export const apiSLice = createApi({
    reducerPath: 'apiSLice',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`
    }),
    endpoints:(bulder)=>({
      getAllTasks: bulder.query({
        query: ()=>'/tasks'
      }),
      removeSingleTask: bulder.mutation({
        query:(taskId)=>({
            url:`/tasks/${taskId}`,
            method:'DELETE'
        })
      })
    })
})


export const {useGetAllTasksQuery, useRemoveSingleTaskMutation} = apiSLice;

// export const apiSLice = createApi({
//     reducerPath: 'apiSLice',
//     baseQuery: fetchBaseQuery({
//         baseUrl: `${BASE_URL}`,
//     }),
//     endpoints: (builder) => ({
//         getTasks: builder.query({
//             query: () => '/tasks'
//         }),
//         deleteTasks: builder.mutation({
//             query: (id) => ({
//                 url: `/tasks/${id}`,
//                 method: 'DELETE',
//                 credentials: 'include',
//             }),
//         })
//     })
// })

// export const { useGetTasksQuery, useDeleteTasksMutation } = apiSLice;