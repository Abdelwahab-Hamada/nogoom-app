import Stars from "./Stars"
import { PencilIcon } from '@heroicons/react/solid'
import useCurrentState from "../../hooks/useCurrentState"
import { useReviewMutation } from "../../services/postReview"
import { useContext,useState,useEffect } from 'react'
import { Close } from "./Pop-up Post"


const Review = () => {
  const {tagsIDs}=useCurrentState()

  const [review,{isLoading,isError,isSuccess}]=useReviewMutation()

  const {setIsOpen}=useContext(Close)

  const [err,setErr]=useState(false)

  const spinner=(
    <svg role="status" className="inline mb-2 mr-3 w-4 h-4 text-black animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    )

  let loading = (isLoading 
    ? spinner
    : '' )

  const handleSubmit = (event) => {
    event.preventDefault();

    const form=new FormData(event.target)
    const formEntries = Object.fromEntries(form)
    console.log(formEntries)
    formEntries['tags']=tagsIDs
    
    if(tagsIDs.length && formEntries.score){
      review(formEntries)
    } else {
      if (tagsIDs.length){
        setErr('Rate')
        return
      } 
      if (formEntries.score){
        setErr('Tags')
        return
      }
      setErr('both')
      
    }
    
    
    // setIsOpen(false)
  }

  

  return (
    <>
        <form className='flex flex-col gap-1' autoComplete="off" onChange={()=>setErr(false)} onSubmit={handleSubmit}>
            <h1 className={`mr-2 text-2xl font-mono text-center ${
                (err === 'Rate')
                ? 'text-red-600'
                : ''
              }
            `}>Rate</h1>
            <Stars />
            <h1 className='text-2xl font-mono text-center'>Review</h1>
            <div className="w-full flex flex-col-reverse relative mt-3">
              <input 
              type='text' 
              className='
              border peer ... rounded p-1
              focus:outline-none w-full
              ' 
              required
              placeholder=" " 
              name="title"
              id="title"
              />
              <label 
              htmlFor="title"
              className='
              px-2 text-xs font-mono ml-0 absolute 
              peer-placeholder-shown:top-1.5 -top-1/4 left-2
            bg-white text-gray-500 duration-300 ease-in-out 
              peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-400
              peer-placeholder-shown:border-none
              peer-placeholder-shown:bg-transparent
              peer-placeholder-shown:p-0
              '
              >Title</label>
            </div>

            <div className="w-full flex flex-col-reverse relative mt-3">
              <textarea
              className='border peer ... rounded p-1
              focus:outline-none w-full 
              ' 
              required
              placeholder=" "
              name="comment"
              id="comment"
              ></textarea>
              <label 
              htmlFor="comment"
              className='
              px-2 text-xs ml-0 absolute mt-1.5
              peer-placeholder-shown:top-1.5 -top-1/4 left-2
            bg-white text-gray-500 duration-300 ease-in-out 
              peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-400
              peer-placeholder-shown:border-none
              peer-placeholder-shown:bg-transparent
              peer-placeholder-shown:p-0
              peer-placeholder-shown:m-0
              '
              >Comment</label>
            </div>
            <div className="flex items-baseline font-mono mt-3">
              <button 
              type="submit"
              className="mr-2 inline-block w-fit px-3 border-2 relative rounded-md text-black  p-1 text-sm font-medium   hover:bg-black hover:bg-opacity-30   focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                  <PencilIcon className="w-5"/>
              </button>
              <p className={`mr-2 text-lg text-red-600 font-mono hidden${
                (err === 'Rate')
                ? 'block'
                : ''
              }
            `}>*you forgot to rate</p>
              <p className={`mr-2 text-lg text-red-600 font-mono hidden${
                (err === 'Tags')
                ? 'block'
                : ''
              }
            `}>*no tags provided</p>
              <p className={`mr-2 text-lg text-red-600 font-mono hidden${
                (err === 'both')
                ? 'block'
                : ''
              }
            `}>*no tags provided and rate </p>
              {loading}
              {isError && <p className="inline text-red-600"> error </p>}
              {isSuccess && <p className="inline-block text-green-600"> Successfully created </p>}
            </div>
        </form>
    </>
  )
}

export default Review