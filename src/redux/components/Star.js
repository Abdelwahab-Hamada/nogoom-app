import { useStarMutation } from '../services/starIt'
import { StarIcon } from '@heroicons/react/solid'
import { useEffect } from 'react'


const Star = ({review}) => {
    const [star,{data,}]=useStarMutation()

    const starStyle=()=>(
        data 
        ? data.is_stared           
        : review.is_stared
    )    

    
  return (
    <div className='flex relative'>
        <StarIcon 
        onClick={()=>star(review.id)}
        className={           
            ` peer ... ${starStyle()
                ? 'w-5 text-yellow-500'
                : 'w-5 text-gray-200'
            } cursor-pointer`
            }/>
        <h1 className='hidden peer-hover:block absolute left-3/4 top-2/4 bg-black/75 text-white tracking-wide text-xs rounded px-0.5 pb-0.5'>
        {
            starStyle() 
            ? 'unStar'
            : 'star'
        
        }
        </h1>
        {/* <span>{starCounter()}</span> */} {/* most stared is better*/}
        
    </div>
  )
}

export default Star