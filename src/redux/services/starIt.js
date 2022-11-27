import { baseApi } from "./base";

const starIt=baseApi.injectEndpoints({
    endpoints: builder =>({
        star: builder.mutation({
            query: id => ({
                url:`reviews/${id}/star/`,
                method:'PUT',                
            })
        }),
    })
})


export const {
    useStarMutation
} =starIt