import useReviews from "../hooks/useReviews";
import Review from "./Review";
import { useRef,useCallback,useState,useEffect } from 'react'


const Reviews = ({tagName,skip}) => {//Reviews = Recos = Q&S
    const [page,setPage]=useState(1)

    useEffect(()=>{
      setPage(1)      
    },[tagName])

    const {
      results,
      isLoading,
      isSuccess,
      next
    }=useReviews(tagName,page)
    
    const intObserver=useRef()
    const lastReview=useCallback(rev=>{
      if (isLoading) return

      if (intObserver.current) intObserver.current.disconnect()

      intObserver.current=new IntersectionObserver(revs =>{
        if (revs[0].isIntersecting && next){
          console.log('nearo')
          setPage(next)
        }
      })

      if (rev) intObserver.current.observe(rev)
    },[isLoading,next])

    let content=results.map((review,i)=>{
      if (results.length === i+1){
        return <Review 
                        ref={lastReview}
                        key={review.id} 
                        review={review}/>
      }
      return <Review key={review.id} review={review}/>
    })

  return (
    <div className=" h-4/6 overflow-auto w-full scrollbar ">
      {content}
      {isLoading && <p className="center">Loading More Posts...</p>}
    </div>
  )
}

export default Reviews