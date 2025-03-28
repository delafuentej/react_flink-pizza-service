import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services";
import MenuItem from "./components/MenuItem";

const Menu = () =>{
  // to retrieve  the data we need a custom hook: useLoaderData;
  const menu = useLoaderData();
  console.log('menu',menu)
  return <ul className="divide-y divide-orange-300 px-2">
    {menu.map((pizza) => (
      <MenuItem 
        pizza={pizza} 
        key={pizza.id}
        />
    ))
    }
  </ul>;
}

export async function loader(){
  const menu = await getMenu();
  return menu;
}
// we have to connect the loader function to the route

export default Menu;


