import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
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
            query:(params)=>`/tasks/search?q=${params}`
        }),
        removeSingleTask: bulder.mutation({
            query: (taskId) => ({
                url: `/tasks/${taskId}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Task', id }],

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
        editSelectedTask: bulder.mutation({
            query: (payload) => ({
                url: `/tasks/${payload.id}`,
                method: 'PUT',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),

        removeCheckedTasks: bulder.mutation({
            query: (payload) => ({
                url: '/tasks',
                method: 'DELETE',
                body: JSON.stringify({ ids: payload }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        })

    }),

    // overrideExisting: false,

})


export const {
    useGetAllTasksQuery,
    useRemoveSingleTaskMutation,
    useAddNewTaskMutation,
    useSearchTaskQuery,
    useEditSelectedTaskMutation,
    useRemoveCheckedTasksMutation,
} = apiSLice;