import { baseApi } from "./base"

const tags=baseApi.injectEndpoints({
    endpoints:builder=>({
        getTags: builder.query(
            {
                query:(url)=>`${url}`,
                keepUnusedDataFor:5,
                
            }
        ),
        createTag: builder.mutation({
            query: q => ({
                url:'tags/create/',
                method: 'POST',
                body: { ...q }
            })
        }),
        
    })
})

export const {
    useGetTagsQuery,useCreateTagMutation
}=tags