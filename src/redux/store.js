import { configureStore,  } from "@reduxjs/toolkit";
import authReducer from './reducers/auth'
import tagsReducer from './reducers/tags'
import { baseApi } from "./services/base";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store=configureStore({
    reducer:{
        auth: authReducer,//auth comes from authSlice>name
        // baseApi:baseApi.reducer
        [baseApi.reducerPath]:baseApi.reducer,
        tags:tagsReducer,
    },
    middleware: getDefaultMiddleware => 
                getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

