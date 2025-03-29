import { useDispatch } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";
import { Button } from "../../ui";

const UpdateItemQuantity = ({pizzaId, currentQuantity, className}) => {
    const dispatch = useDispatch();

    const handleClickDecrease = () => {
        dispatch(decreaseItemQuantity(pizzaId))
    };

    const handleClickIncrease = () => {
        dispatch(increaseItemQuantity(pizzaId))
    }

  return (
    <div className={`flex items-center gap-4 ${className}`}>

        <Button
        handleClick={handleClickDecrease}
        >
            <span className='text-md'>
                -
            </span>

        </Button>

        <span className="text-sm font-medium">
        {currentQuantity}
        </span>
        <Button
        className='bg-green-600'
         handleClick={handleClickIncrease}
        >
            <span className='text-md'>
                +
            </span>
        </Button>

        
    </div>
  )
}

export default UpdateItemQuantity