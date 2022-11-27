import { useGetTabQuery } from "../services/tag";
import { useState, useEffect,useRef } from 'react'

const useReviews = (tagName,page=1) => {
    const [results, setResults] = useState([])    
    
    const {
        data,
        isLoading,
        isError,
        isSuccess,
        error
    }=useGetTabQuery(`reviews/${tagName}/?page=${page}`,)

    useEffect(()=>{
        if(isSuccess ) {
            setResults([...results,...data?.results])            
        }     
    },[data])    

    const returns=isSuccess 
    ? {results,
        isLoading,
        isSuccess,
        next:data?.next}
    : {results,isLoading,isSuccess,next:null}
    

  return returns
}

export default useReviews