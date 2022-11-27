import { StarIcon } from '@heroicons/react/solid'
import { useState,useEffect } from 'react'


const Rate = ({score}) => {
    const [color,setColor]=useState('')

    useEffect(()=>{
        switch (score) {
            case 1:
              setColor('text-red-600')
              
              break;
            case 2:
              setColor('text-orange-500')
              
              break;
            case 3:
              setColor('text-yellow-400')
              
              break;
            case 4:
              setColor('text-green-500')
              
              break;
            case 5:
              setColor('text-green-600')
              
              break;
          
            default:
              setColor('')
      
              break;
        }
    },[])

      
  return (
    <div className='flex'>
        {[...Array(score)].map(
            (e,i)=><StarIcon 
                    key={i} 
                    className={`w-5 ${color}`}/>
            )                    
        }
        {[...Array(5-score)].map(
            (e,i)=><StarIcon 
                    key={i} 
                    className='w-5 text-gray-200'/>
            )                    
        }
    </div>
  )
}

export default Rate