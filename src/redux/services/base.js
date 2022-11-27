import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAccessToken,used, } from "../reducers/auth";


const baseUrl='https://abyou.pythonanywhere.com/'
const credentials='include'


const baseQuery=fetchBaseQuery({ 
    baseUrl,
    credentials,
    prepareHeaders:(headers,{getState})=>{
        const accessToken=getState().auth.accessToken
        
        
        if (accessToken.access && !accessToken.isUsed){
            headers.set(
                "Authorization", 
                `Bearer ${accessToken.access}`
            )
                
        }

        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions)=>{
    let response = await baseQuery(args, api, extraOptions)    
    
    if (response?.error?.status === 401 ){
        console.log('sending refresh token')
        api.dispatch(used())
        const {data} = await baseQuery('auth/', api, extraOptions)
        const {access}=data
        
        if(access){
            api.dispatch(setAccessToken({access,}))
            response=await baseQuery(args, api, extraOptions)
        }
    }

    return response
}

export const baseApi=createApi({
    reducerPath:'baseApi',
    baseQuery: baseQueryWithReauth,
    endpoints: builder =>({})
})
