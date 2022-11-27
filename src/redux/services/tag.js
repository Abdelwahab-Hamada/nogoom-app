import { baseApi } from "./base"

const tag=baseApi.injectEndpoints({
    endpoints:builder=>({
        getTag: builder.query(
            {
                query:(name)=>`tags/${name}/details/`,
                keepUnusedDataFor:5,
            }
        ),

        getTab: builder.query({ //getReviews () url=tabName/api/tagName ) query:(url)=>url,
            query: (url)=>`${url}`,
            keepUnusedDataFor:5,

        })
    })
})

export const {
    useGetTagQuery,useGetTabQuery
}=tag