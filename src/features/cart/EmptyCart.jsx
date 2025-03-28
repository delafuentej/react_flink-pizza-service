import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div>
      <Link 
         className='text-sm bg-red-500  hover:bg-stone-400 hover:text-red-500
         text-white  font-bold rounded px-4 py-2 transition-colors duration-300
         cursor active:scale-95 active:shadow-inner shadow-lg'
      to="/menu">&larr; Back to menu</Link>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
