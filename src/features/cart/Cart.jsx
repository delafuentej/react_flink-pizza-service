import { useSelector, useDispatch } from "react-redux";
import { getCart, clearCart, getTotalItemsCart, deleteItem } from "./cartSlice";
import { getUsername } from "../user";
import { LinkButton, Button } from "../../ui";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";


function Cart() {

  const cart = useSelector(getCart);
  const username = useSelector(getUsername);
  const totalItemsCart = useSelector(getTotalItemsCart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const handleDeleteItem = () => {
    dispatch(deleteItem())
  }

  if(!cart.length) return <EmptyCart />;
  
  return (
    <div className='px-4 py-6 '>
      <LinkButton
        to='/menu'>
          &larr; Back to menu
      </LinkButton>

{/*Your cart, {username}  */}
      <h2 className='mt-15 font-semibold text-xl'>{(!totalItemsCart) ? `Your cart ist leer, ${username}` : `Your cart has ${totalItemsCart} ${totalItemsCart > 1 ? 'items': 'item'}, ${username}`}</h2>

      <ul className='mt-5 divide-y divide-orange-400 border-b-2 border-t-2 border-orange-600'>
        {cart.map((item) =>(
            <CartItem 
            key={item.pizzaId}
            item={item}
            />
        ))}

      </ul>

      <div className='mt-10  m-auto space-x-6'>
        <LinkButton
        className='px-2 py-3 '
          to='/order/new'
         
        >
          Order pizzas
        </LinkButton>
        <Button
          handleClick={handleClearCart}
        >Clear cart</Button>
       
      </div>
    </div>
  );
}

export default Cart;
