import { useSelector, } from "react-redux";
import { selectCurrentToken,isPersistance,logging } from "../reducers/auth";
import { collectTags,collectTagsIDs } from "../reducers/tags";

import { useDispatch, } from "react-redux";
import { setAccessToken as setAT,
    setLogged as setLgd,setPersist as setPrsst } from "../reducers/auth";
import { setTags as setTs,setTagsIDs as setTsIDs } from "../reducers/tags";
import { useEffect,useState } from 'react'

const useCurrentState = () => {
    const getCurrentToken = useSelector(selectCurrentToken)
    const getCurrentPersistance=useSelector(isPersistance)
    const getCurrentLoggging=useSelector(logging)

    

    const getTags=useSelector(collectTags)
    const getTagsIDs=useSelector(collectTagsIDs)

    const dispatch=useDispatch()


    const setAccessToken=(access)=>{
        dispatch(setAT({access,}))
    }

    const setLogged=(payload)=>{
        dispatch(setLgd(payload))
    }

    const setPersist=(payload)=>{
        dispatch(setPrsst(payload))
    }

    const setTags=(payload)=>{
        dispatch(setTs(payload))
    }

    const setTagsIDs=(payload)=>{
        dispatch(setTsIDs(payload))
    }

    const addToTags=(tag)=>{
        const {id,}=tag
        if (!getTagsIDs.includes(id)){
            setTags([...getTags,tag])
            setTagsIDs([...getTagsIDs,id])
        }
    }

    const removeFromTags=(tag)=>{
        const {id,}=tag
        if (getTagsIDs.includes(id)){
            setTags(getTags.filter((singleTag)=> singleTag !== tag ))
            setTagsIDs(getTagsIDs.filter((singleTag)=> singleTag !== id ))
        }
    }

    const forceRemove=(tag)=>{
        const {id,}=tag
        setTags(getTags.filter((singleTag)=> singleTag !== tag ))
        setTagsIDs(getTagsIDs.filter((singleTag)=> singleTag !== id ))
    }

    const clearTags=()=>{
        if (getTagsIDs.length){
            setTags([])
            setTagsIDs([])
        }
    }

  return {
        'token':getCurrentToken,
        'persist':getCurrentPersistance,
        'logged':getCurrentLoggging,
        setAccessToken,
        setPersist,
        setLogged,
        'tags':getTags,
        'tagsIDs':getTagsIDs,
        addToTags,
        removeFromTags,
        forceRemove,
        clearTags
    }
}

export default useCurrentState

