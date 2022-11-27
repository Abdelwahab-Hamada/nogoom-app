import { baseApi } from "./base";

const loginEndpoint=baseApi.injectEndpoints({
    endpoints: builder =>({
        login: builder.mutation({
            query: credentials => ({
                url:'auth/',
                method:'POST',
                body: { ...credentials }
            })
        }),
    })
})


export const {
    useLoginMutation
} =loginEndpoint