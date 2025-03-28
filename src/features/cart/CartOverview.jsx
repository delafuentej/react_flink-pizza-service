import { LinkButton } from "../../ui";

function CartOverview() {
  return (
    <div className='flex flex-col bg-amber-500 text-black-200 font-bold rounded-lg shadow-md 
    animate-pulse px-4 py-4 sm:px-6 md:text-base w-1/2 sm:w-1/3 lg:w-1/6'>
      <h2 className="font-extrabold text-lg">Limited offer! 🚀</h2>
      <h3>Finish your order before the offers run out! </h3> 
      <p className='text-red-500 space-x-4 sm:space-x-6' >
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <LinkButton to="/cart" className='text-center mt-1 uppercase'>Open cart &rarr;</LinkButton>
    </div>
  );
}

export default CartOverview;
