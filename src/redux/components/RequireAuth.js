import { useLocation, Navigate, Outlet, } from "react-router-dom";
import useCurrentState from "../hooks/useCurrentState";

const RequireAuth = () => {
    const {token}=useCurrentState()

    const location = useLocation();

    const content=(
        token.access
        ? <Outlet />
        : <Navigate to="/nogoom-app/login/" state={{ from: location }} replace />
    )
  return content
}

export default RequireAuth