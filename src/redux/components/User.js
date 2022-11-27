import {UserIcon,XIcon } from '@heroicons/react/solid'
import { useNavigate } from "react-router-dom";
import { Popover } from '@headlessui/react'
import useCurrentState from "../hooks/useCurrentState";
import useLogout from "../hooks/useLogout";


const User = () => {
    const {token,logged}=useCurrentState()

    const logout=useLogout()

    const navTo=useNavigate()

    let log=token.access && logged
          ? <Popover.Button 
          className='hover:underline no-underline text-gray-500 px-1 mb-1'
            onClick={()=>{
              logout()
              navTo('/nogoom-app/login')
              }}>Logout</Popover.Button>
          : <>
                <Popover.Button 
                className='hover:underline no-underline text-gray-500 px-1 mb-1'
                onClick={()=>navTo('/nogoom-app/login')}>Login</Popover.Button>
                <Popover.Button 
                className='hover:underline no-underline text-gray-500 px-1 mb-1'
                onClick={()=>navTo('/nogoom-app/register')}>Register</Popover.Button>
            </>

  return (
        <Popover className="relative w-fit ">
            <Popover.Button className='h-full focus:outline-none hover:bg-black/10 rounded'><UserIcon className=" w-5"/></Popover.Button>
            <Popover.Panel className="
             absolute right-0 top-full py-2 border-2 rounded px-2 z-10 bg-white w-fit">
            <div className=' absolute right-1 -top-2 w-full flex justify-end'>
                {/* <Popover.Button 
                className=' bg-white hover:text-gray-500 w-fit rounded mb-1 block text-end'
                >
                    <XIcon className=' w-4'/>
                </Popover.Button> */}
            </div>
            <>
                {log}
            </>
            
            </Popover.Panel>
        </Popover>
    
  )
}

export default User