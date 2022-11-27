import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Star from './Star'
import Rate from './Rate'


const Review = React.forwardRef(({ review },ref) => {
    const reviewDetails=(
        <div className=' '>
            <div className='flex flex-col h-fit border-l-2 font-mono  mb-5 p-2 gap-2'>
                <h1 className='text-lg font-bold'>{review.title}</h1>

                <Rate score={review.score} />

                <p className=''>{review.comment}</p>

                <div className='flex justify-between'>
                    <Star review={review} />
                    <span>{review.created}</span>
                </div>
                
            </div>
        </div>
    )

    const content = ref
        ? <article ref={ref}>{reviewDetails}</article>
        : <article >{reviewDetails}</article>

  return content
})

export default Review