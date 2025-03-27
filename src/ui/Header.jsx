import { Link } from "react-router-dom";
import { SearchOrder, User } from "../features";

const Header = () => {
  return (
    <header className='flex flex-row justify-around bg-red-500 text-white border-b-4 border-stone-400 font-bold px-4 py-3 sm:px-6 uppercase '>
          <Link to='/'className='tracking-[3px]' >Flink-Pizza & Co.</Link>
          <SearchOrder />
          
         <User/>
    </header>
  
  )
}

export default Header;