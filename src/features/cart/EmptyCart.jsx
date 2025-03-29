import { LinkButton } from "../../ui";

function EmptyCart() {
  return (
    <div className='flex flex-col items-center justify-center mt-20 space-y-8'>
      <LinkButton 
        className='w-1/4 text-center uppercase'
      to="/menu">&larr; Back to menu</LinkButton>

      <div className='flex mt-15'>
      <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-50 h-50 text-gray-500"
        > 
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2 13h13l3-8H6" />
        </svg>

      </div>

      <h2 className='w-max text-3xl'>Your cart is still empty. Start adding some pizzas. </h2>

      <h2 className='w-max text-3xl'>They are really delicious. Don't miss the opportunity. </h2>
    </div>
  );
}

export default EmptyCart;
