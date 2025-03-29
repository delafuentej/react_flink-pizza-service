import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";
import { Button } from "../../ui";


const AddItemButton = ({pizza}) => {

   

    const dispatch = useDispatch();

    const {id, name, unitPrice} = pizza;

    const handleAddToCart = () =>{
        const newItem = {
          pizzaId: id,
          name,
          quantity: 1,
          unitPrice,
          totalPrice: 1 * unitPrice,
        }
       
        dispatch(addItem(newItem))
      }
  return (
    <Button
    handleClick={handleAddToCart}
    className='w-max bg-amber-400 hover:text-stone-700 absolute bottom-0 right-[-350px] md:right-[-475px] flex grow'
    > 🛒 Add to Cart
  </Button>
  )
}

export default AddItemButton;