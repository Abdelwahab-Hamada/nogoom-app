import { baseApi } from "./base";

const registerEndpoint=baseApi.injectEndpoints({
    endpoints: builder =>({
        register: builder.mutation({
            query: credentials => ({
                url:'register/',
                method:'POST',
                body: { ...credentials }
            })
        }),
    })
})


export const {
    useRegisterMutation
} =registerEndpoint