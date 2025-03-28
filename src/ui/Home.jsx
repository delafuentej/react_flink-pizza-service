import { CreateUser } from "../features";

function Home() {
  return (
    <div className='flex flex-col items-center justify-center bg-stone-200 mt-20 
    b-2 rounded-2xl  shadow-lg shadow-stone-400 border-b border-r border-amber-400 w-10/12 mx-auto'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl text-center text-stone-700 font-bold mt-10'>
        The best pizza.
  
        <br />
        <span className='text-amber-500'>
        Straight out of the oven, straight to you.
        </span>
        <br />
        <span>Not fast, but supersonic 🚀</span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
