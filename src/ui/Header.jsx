
import { SearchOrder, User } from "../features";
import LinkButton from "./LinkButton";

const Header = () => {
  return (
    <header className='flex flex-row justify-between bg-red-500 text-white border-b-4
     border-stone-400 font-bold px-4 py-3 sm:px-6 uppercase '>
          {/* <Link to='/'className='tracking-[3px]' >Flink-Pizza & Co.</Link> */}
          <LinkButton 
            className='tracking-[3px]'
            to='/'
          >
            Flink-Pizza & Co
          </LinkButton>
          <SearchOrder />
          
         <User/>
    </header>
  
  )
}

export default Header;