import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_URL_API;


// export const usersApi = createApi({
//     reducerPath: 'userApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: `${BASE_URL}`
//     }),
//     endpoints: (bulder) =>({
//         userRegistration: bulder.mutation({
//             query: (payload) => ({
//                 url: '/register',
//                 method: 'POST',
//                 body: JSON.stringify(payload),
//                 headers: {
//                     'Content-type': 'application/json; charset=UTF-8',
//                 },
//             })
//         })
//     })

// });


export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`
    }),
    endpoints: (bulder) => ({

        userRegistration: bulder.mutation({
            query: (payload) => ({
                url: 'https://reqres.in/api/register',
                method: 'POST',
                body: JSON.stringify({
                    "email": "eve.holt@reqres.in",
                    "password": "123456",
                    "name": "123456",
                    "dcbdcbh": "123456",
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),


    })
})


export const { useUserRegistrationMutation } = usersApi;