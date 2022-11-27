import { useLocation, Navigate, Outlet, } from "react-router-dom";
import useCurrentState from "../hooks/useCurrentState";

const useLogin = ({children}) => {
    const {token}=useCurrentState()

    const location = useLocation();

    

    const content=(
        token.access
        ? <Navigate to="/nogoom-app/login" state={{ from: location }} replace />
        : children
    )
  return content
}

export default useLogin