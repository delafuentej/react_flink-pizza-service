import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

const Username = () => {

  const username = useSelector(getUsername);

  if(!username) return;
  
  return (
    <div className='hidden md:block text-sm font-semibold'>{username}</div>
  )
}

export default Username;