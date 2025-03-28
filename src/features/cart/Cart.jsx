import { LinkButton, Button } from "../../ui";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className='px-4 py-6 '>
      <LinkButton
        to='/menu'>
          &larr; Back to menu
      </LinkButton>


      <h2 className='mt-15 font-semibold text-xl'>Your cart, %NAME%</h2>

      <ul className='mt-5 divide-y divide-orange-400 border-b-2 border-t-2 border-orange-600'>

        {cart.map((item) =>(
            <CartItem 
            key={item.key}
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
        <Button>Clear cart</Button>
       
      </div>
    </div>
  );
}

export default Cart;
