import { configureStore } from '@reduxjs/toolkit';
import { apiSLice } from '../services/tasks/api';
import { usersApi } from '../services/users/usersApi';
import tasksReducer from '../features/tasks/tasksReducer';


const store = configureStore({
    reducer: {
        [apiSLice.reducerPath]: apiSLice.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        tasksReducer: tasksReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([apiSLice.middleware, usersApi.middleware]),
})

export default store