import { StarIcon } from '@heroicons/react/solid'
import { useState,useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'


const Stars = () => {
  const [score,setScore]=useState()
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
  },[score])

  let content=(
    <RadioGroup value={score} onChange={setScore} className='flex cursor-pointer' name='score'>
        <RadioGroup.Option className={` 
        peer ... hover:text-red-600 text-red-600 ${color}
`
        
        } value={1}>
        <StarIcon className='w-5'/></RadioGroup.Option>

        <RadioGroup.Option className={` 
        peer ... hover:text-orange-500  peer-hover:text-gray-200
        ${score<2 
        ?  'text-gray-200'
        :  score>2
            ? color
            : 'text-orange-500'}`
        
        } value={2}>
        <StarIcon className='w-5'/></RadioGroup.Option>

        <RadioGroup.Option className={` 
        peer ... hover:text-yellow-400 peer-hover:text-gray-200
        ${score<3 
        ?  'text-gray-200'
        :  score>3 
            ? color
            : 'text-yellow-400'}`
        
        } value={3}>
        <StarIcon className='w-5'/></RadioGroup.Option>

        <RadioGroup.Option className={` 
        peer ... hover:text-green-500  peer-hover:text-gray-200
        ${score<4 
        ?  'text-gray-200'
        :  score>4 
            ? color
            : 'text-green-500'}`
        
        } value={4}>
        <StarIcon className='w-5'/></RadioGroup.Option>

        <RadioGroup.Option className={` 
        peer ... hover:text-green-600  peer-hover:text-gray-200
        ${score<5 
        ?  'text-gray-200'
        :  'text-green-600'}`
        } value={5}>
        <StarIcon className='w-5'/></RadioGroup.Option>
        
        <p className=' cursor-default font-mono ml-5 border text-right flex '>
          
          <StarIcon className='w-5 inline-block text-red-600'/>=1
          <StarIcon className='w-5 inline-block text-green-600'/>=5
        </p>
    </RadioGroup>
  )
  
  let oldcontent= (
    
      <RadioGroup value={score} onChange={setScore} className='flex' name='score'>
        <RadioGroup.Option className={` 
        peer ... text-red-600`
        } value={1}>
        <StarIcon className='w-5'/></RadioGroup.Option>


        <RadioGroup.Option className={` 
        peer ... peer-hover:text-black ${score<2 
        ?  'text-black'
        :  'text-orange-500'}`} value={2}>
        <StarIcon className='w-5'/></RadioGroup.Option>


        <RadioGroup.Option className={` 
        peer ... peer-hover:text-black  ${score<3 
        ?  'text-black'
        :  'text-yellow-400'}`} value={3}>
        <StarIcon className='w-5'/></RadioGroup.Option>


        <RadioGroup.Option className={` 
        peer ... peer-hover:text-black  ${score<4 
        ?  'text-black'
        :  'text-green-500'}`} value={4}>
        <StarIcon className='w-5'/></RadioGroup.Option>


        <RadioGroup.Option className={` 
        peer-hover:text-black ${score<5 
        ?  'text-black '
        :  'text-green-600'}`} value={5}>
        <StarIcon className='w-5'/></RadioGroup.Option>

      </RadioGroup>
     
    
  )
  return content
}

export default Stars