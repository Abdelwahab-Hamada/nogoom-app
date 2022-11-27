import { baseApi } from "./base";

const reauthEndpoint=baseApi.injectEndpoints({
    endpoints: builder =>({
       reauth: builder.mutation({
            query: ()=> 'auth/',
       }),
    })
})

export const {
    useReauthMutation
}=reauthEndpoint