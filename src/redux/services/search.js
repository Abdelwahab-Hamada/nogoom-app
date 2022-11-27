import { baseApi } from "./base"

const search=baseApi.injectEndpoints({
    endpoints:builder=>({
        getSearch: builder.mutation(
            {
                query:(q)=>`tags/search/?q=${q}`,
                keepUnusedDataFor:5,
            }
        )
    })
})

export const {
    useGetSearchMutation
}=search