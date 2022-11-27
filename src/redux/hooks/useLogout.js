import { useDispatch, } from "react-redux";
import { clearSession } from "../reducers/auth";
import { useLogoutMutation } from "../services/logout";



const useLogout = () => {
    const dispatch=useDispatch()
    const [logout,]=useLogoutMutation()

    const Logout=()=>{
        dispatch(clearSession())
        logout()
    }
    
  return Logout
}

export default useLogout
        
