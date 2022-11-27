import { baseApi } from "./base";

const follow=baseApi.injectEndpoints({
    endpoints: builder =>({
        follow: builder.mutation({
            query: slug => ({
                url:`tags/${slug}/follow/`,
                method:'PUT',                
            })
        }),
    })
})


export const {
    useFollowMutation
} =follow