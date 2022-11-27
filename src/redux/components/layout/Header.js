import Nav from "./Nav"
import PopupSearch from "../search/Pop-up Search"
import PopupPost from "../post/Pop-up Post"
import User from "../User"

const Header = () => {

  return (
    <div className=" mt-2">
        <div className=" h-fit flex justify-around ">
          <div className="flex gap-2 pr-40">
            <PopupPost />
            
            <PopupSearch />
          </div>
          {/* <h1 className=" font-semibold">Nogoom</h1> */}
          <User />
        </div>
        <Nav />
    </div>
  )
}

export default Header