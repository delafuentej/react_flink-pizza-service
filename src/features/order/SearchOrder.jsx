import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../ui";


const SearchOrder = () => {
    const[query, setQuery] = useState('');

    const navigate = useNavigate();

    console.log('navigate',navigate)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!query) return;
        // to navigate to page /order/:query with help of the custom hook useNavigate
        navigate(`/order/${query}`);
        setQuery('');
    }
  return (
    <form
        onSubmit={handleSubmit}
    >

        <Input 
            placeholder='Search Order#'
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
            className="bg-stone-100"
        />
   
    </form>
  
        
  )
}

export default SearchOrder;