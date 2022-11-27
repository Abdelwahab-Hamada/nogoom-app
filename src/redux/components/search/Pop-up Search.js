import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Dialog } from '@headlessui/react'
import { XIcon,SearchIcon } from '@heroicons/react/solid'
import Search from './Search'



const PopupSearch = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navTo=useNavigate()

  const resultOnClick=(tag)=>{
    setIsOpen(false)
    navTo('/nogoom-app/tag',
    {'state':{'name':tag.slug}})
  }

  return (
    <>
      <button 
      className='hover:bg-black/10 h-full rounded '
      onClick={()=>setIsOpen(!isOpen)}>
        <SearchIcon className="w-5 "/>
      </button>
      
        <Dialog 
          open={isOpen} 
          onClose={()=>setIsOpen(false)} 
          className="relative z-50 ">
            <div 
            className="fixed inset-0 bg-black/30" 
            aria-hidden="true" />
            
                <div 
                className="fixed inset-0 flex mt-10 justify-center p-4">
                    
                    <Dialog.Panel 
                    className="h-fit w-full sm:w-full md:w-10/12 lg:w-8/12 rounded bg-white flex flex-col p-1 mt-5">
                        <button 
                        className='top-0  absolute hover:bg-black/25 w-fit rounded '
                        onClick={() => setIsOpen(false)}>
                          <XIcon className='h-5 w-5'/>
                        </button>
                        <Search 
                        resultOnClick={resultOnClick} 
                        message='found no data'/>
                    </Dialog.Panel>
                </div>
        </Dialog>
      
    </>
  )
}

export default PopupSearch