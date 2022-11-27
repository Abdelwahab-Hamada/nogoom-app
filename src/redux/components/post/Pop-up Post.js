import { XIcon,PencilIcon } from '@heroicons/react/solid'
import { useState,useEffect,createContext } from 'react'
import { Dialog } from '@headlessui/react'
import useCurrentState from '../../hooks/useCurrentState'
import TagsHandler from '../search/Tags Handler'
import Review from './Review'

export const Close=createContext({})

const PopupPost = () => {
    //declaration
    const [isOpen, setIsOpen] = useState(false)

    const {tagsIDs,token,logged}=useCurrentState()

    const [dot,setDot]=useState('')

    //Auto
    useEffect(()=>
        tagsIDs.length ? 
        setDot('absolute top-2  left-1 inline-block   w-1 h-1 rounded-full bg-red-500')
        :
        setDot('')
        
    ,[tagsIDs])

    

    

  let content=(
    <>
        <button 
        onClick={()=>setIsOpen(!isOpen)}
        className="w-5 relative rounded-md text-black pt-2 text-sm font-medium   hover:bg-black/10   focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
            <PencilIcon className="w-5"/>
            <span className={dot}></span>
        </button>
        
        
        <Dialog 
        open={isOpen} 
        onClose={()=>setIsOpen(false)} 
        className="relative z-50 ">
            <div 
            className="fixed inset-0 bg-black/30" 
            aria-hidden="true" />
                <div 
                className="fixed inset-0 flex mt-20 align-middle items-center justify-center p-4"
                >
                    <Dialog.Panel 
                    className="h-fit w-full sm:w-full md:w-8/12 lg:w-6/12 rounded bg-white flex flex-col p-2"
                    >
                        <button 
                        className='hover:bg-black/25 w-fit rounded mb-1 self-end'
                        onClick={() => setIsOpen(false)}>
                            <XIcon className='h-5 w-5'/>
                        </button>
                        <TagsHandler />
                        <Review />    
                    </Dialog.Panel>
                </div>
        </Dialog>
    </>
  )
  if (token.access || logged) return content
}

export default PopupPost