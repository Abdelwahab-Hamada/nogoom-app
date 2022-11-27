import { baseApi } from "./base";

const logoutEndpoint=baseApi.injectEndpoints({
    endpoints: builder =>({
        logout: builder.mutation({
            query: () => ({
                url:'auth/',
                method:'DELETE',
                
            })
        }),
    })
})


export const {
    useLogoutMutation
} =logoutEndpoint