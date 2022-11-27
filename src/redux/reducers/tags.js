import {createSlice} from '@reduxjs/toolkit'

const initialState ={objects:[],ids:[]}

const tagsSlice=createSlice({
    name:'tags',
    initialState,
    reducers:{
        setTags:(state,action)=>{
            state.objects=action.payload
        },
        setTagsIDs:(state,action)=>{
            state.ids=action.payload
        },
    }
})

export const {setTags,setTagsIDs}=tagsSlice.actions

export default tagsSlice.reducer

export const collectTags=(
    state
)=> state.tags.objects

export const collectTagsIDs=(
    state
)=> state.tags.ids