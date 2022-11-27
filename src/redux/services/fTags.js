import { baseApi } from "./base"

const followedTags=baseApi.injectEndpoints({
    endpoints:builder=>({
        getFollowedTags: builder.query(
            {
                query:()=>'tags/followed/',
                keepUnusedDataFor:5,
            }
        )
    })
})

export const {
    useGetFollowedTagsQuery
}=followedTags