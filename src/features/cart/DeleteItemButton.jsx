import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import { Button } from "../../ui";

const DeleteItemButton = ({pizzaId, className}) => {
    const dispatch= useDispatch();

    
  const handleDeleteItem = (id) => {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button
      className={className}
      handleClick={handleDeleteItem}
    >
      🗑️ Delete
    </Button>
  )
}

export default DeleteItemButton;