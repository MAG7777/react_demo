import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { buildQueries } from '@testing-library/react';
const BASE_URL = process.env.REACT_APP_URL_API;


export const apiSLice = createApi({
    reducerPath: 'apiSLice',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`
    }),
    endpoints: (bulder) => ({
        getAllTasks: bulder.query({
            query: () => '/tasks'
        }),
        searchTask:bulder.query({
            query:(params)=>`/tasks?q=${params}`
        }),

        // searchTasks: builder.query({
        //     query: (searchTerm) => `tasks?q=${searchTerm}`,
        //   }),
        removeSingleTask: bulder.mutation({
            query: (taskId) => ({
                url: `/tasks/${taskId}`,
                method: 'DELETE'
            })
        }),
        addNewTask: bulder.mutation({
            query: (payload) => ({
                url: '/tasks',
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),

    })
})


export const { useGetAllTasksQuery, useRemoveSingleTaskMutation, useAddNewTaskMutation, useSearchTaskQuery } = apiSLice;

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