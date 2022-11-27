import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {UserIcon,XIcon } from '@heroicons/react/solid'


const PopupMsg = ({isOpen, setIsOpen, msg,setMsg}) => {

    return (
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      
            <Dialog.Panel className=' group absolute top-3/4 rounded w-fit bg-black/70 
            text-white font-mono p-2'>
                <div className=' relative'>
                    <p className='mr-10'>
                        {msg}
                    </p>

                    <button 
                    className='group-hover:visible invisible absolute bg-black/70 rounded top-0 right-0  '
                    onClick={() => {
                        setIsOpen(false)
                        setMsg('')
                        }}><XIcon className='w-5'/></button>
                </div>
            </Dialog.Panel>
        

      </Dialog>
    )
}

export default PopupMsg