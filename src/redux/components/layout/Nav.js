import { NavLink,useLocation} from "react-router-dom";
import {HomeIcon,TagIcon, } from '@heroicons/react/solid'



const Nav = () => {  
  const location = useLocation();

  let content
  if (location.pathname === '/nogoom-app/' 
  || location.pathname === '/nogoom-app/followed/'){
  content= (
    <div className='flex gap-1 justify-center mb-3'>
      <div className="flex bg-slate-200 rounded">
        {console.log(location)}
        <NavLink
        to='/nogoom-app/'
        className={({isActive}) =>'rounded p-0.5 '+(
        isActive 
        ? "bg-white border border-slate-200" 
        : "bg-slate-200 hover:bg-black/25")}>
            <HomeIcon className="h-5 w-5"/>
        </NavLink>
        <NavLink 
        to='/nogoom-app/followed/'
        className={({isActive}) =>'rounded p-0.5 '+(
        isActive 
        ? "bg-white border border-slate-200" 
        : "bg-slate-200 hover:bg-black/25")}
        >
            <TagIcon className="h-5 w-5"/>
        </NavLink>
      </div>
    </div>
  )
        }
  
  return content
}

export default Nav