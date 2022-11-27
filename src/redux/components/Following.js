import { useFollowMutation } from '../services/follow'
import { StarIcon } from '@heroicons/react/solid'
import useCurrentState from '../hooks/useCurrentState'
import { useEffect } from 'react'


const Following = ({tag}) => {
    const [follow,{data,}]=useFollowMutation()

    const {token,logged}=useCurrentState()

    const starStyle=()=>(
        data 
        ? data.is_follower           
        : tag.is_follower
    )    

    
  let content= (
    <div className='flex relative'>
        <StarIcon 
        onClick={()=>follow(tag.slug)}
        className={           
            ` peer ... ${starStyle()
                ? 'w-5 text-yellow-500'
                : 'w-5 text-gray-200'
            } cursor-pointer`
            }/>
        <h1 className='hidden peer-hover:block absolute left-3/4 top-2/4 bg-black/75 text-white tracking-wide text-xs rounded px-0.5 pb-0.5'>
        {
            starStyle() 
            ? 'following'
            : 'follow'
        
        }
        
        </h1>
        {/* <span>{starCounter()}</span> */} {/* most stared is better*/}
        
    </div>
  )
  return content

}

export default Following