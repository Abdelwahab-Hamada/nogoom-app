import { Combobox } from '@headlessui/react'
import { useGetSearchMutation } from '../../services/search'
import { useEffect,useState,useRef } from 'react'

const Search = ({resultOnClick,noResultOnClick,message,noResultMsg}) => {
    const [query,setQuery]=useState('')
    const [results,setResults]=useState([])

    const searchRef=useRef()

    const [search,]=useGetSearchMutation()

    const fetchData=async (q)=>{
        try {
          const {data}=await search(q)
          setResults(data.results)
        } catch (error) {
          console.error(`inside search>fetchData ${error}`)
        }
    }

    useEffect(()=>{
        searchRef.current.focus()
    })

    let resultsContent=(
            results.length
            ?   results.map((tag) => (
                <Combobox.Option 
                className='cursor-pointer px-1 rounded
                 hover:bg-white/20' 
                key={tag.id}  
                onClick={()=>resultOnClick(tag)}>
                    {tag.label}  
                </Combobox.Option>
                ))

            :   <>
                <h1 className='p-5'>{message}</h1>
                <Combobox.Option 
                className=' cursor-pointer border text-center rounded hover:bg-white/20'
                onClick={()=>noResultOnClick(query)}>
                    {noResultMsg}
                </Combobox.Option>
                </>
    )

  return (
    <div className='relative '>
        <Combobox  value={''} onChange={()=>({})}>
            <Combobox.Input 
            ref={searchRef} 
            className='p-2 outline-none rounded ' 
            placeholder='search tags' 
            autoComplete="off"
            onChange={(event) => { 
                setQuery(event.target.value)
                fetchData(event.target.value)
            }} />
            <Combobox.Options 
            className='z-10 absolute top-3/4 m-1 rounded bg-black/80 p-2 text-white flex flex-col gap-3'>
                
                {resultsContent}

            </Combobox.Options>
        </Combobox>
    </div>
  )
}

export default Search