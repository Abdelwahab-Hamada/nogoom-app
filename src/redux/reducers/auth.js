import {createSlice} from '@reduxjs/toolkit'


const persist=(JSON.parse(localStorage.getItem("persist")) || false)
const logged=(JSON.parse(localStorage.getItem("logged")) || false)

const initialState={ accessToken:{access:'',isUsed:false},logged,persist }

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAccessToken:(state,action)=>{
            const {access}=action.payload //access is a key had been set by backend
            state.accessToken.access=access
            state.accessToken.isUsed=false
        },
        clearSession:(state,action)=>{
            state.accessToken.access=''
            state.accessToken.isUsed=false
            state.logged=false
        },
        used:(state,action)=>{
            state.accessToken.isUsed=true
        },
        setPersist:(state,action)=>{
            state.persist=action.payload
        },
        setLogged:(state,action)=>{
            state.logged=action.payload
        },
    }
})

export const {setAccessToken,clearSession,used,setPersist,setLogged}=authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (
    state
) => state.auth.accessToken

export const isPersistance=(
    state
) => state.auth.persist

export const logging=(
    state
) => state.auth.logged



