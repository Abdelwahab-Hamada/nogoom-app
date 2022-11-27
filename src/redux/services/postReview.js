import { baseApi } from "./base";

const postReview=baseApi.injectEndpoints({
    endpoints: builder =>({
        review: builder.mutation({
            query: data => ({
                url:'reviews/create/',
                method:'POST',
                body: { ...data }
            })
        }),
    })
})


export const {
    useReviewMutation
} =postReview