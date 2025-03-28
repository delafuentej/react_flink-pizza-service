import {formatCurrency} from '../../../utils/helpers';
import { Button } from '../../../ui';

function MenuItem({ pizza }) {
  
  const {  name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li

    className='flex gap-4 py-2' 
    >
      <img 
        src={imageUrl} 
        alt={name} 
        className={`h-28 ${soldOut ? 'opacity-70 grayscale': ''} `}
        />
      <div className='flex flex-col'>
        <p className='text-orange-400 font-bold uppercase'>{name}</p>
        <p className='italic text-stone-500 font-semibold capitalize'>
          {
          ingredients.join(', ')
              }
        </p>
        <div className={`w-max text-white font-bold px-3 py-1 rounded-l-full rounded-r-full  shadow-xl mt-auto relative
                        ${(soldOut) ? 'bg-red-500 w-1/3 uppercase' :'bg-green-600 w-1/3'}`}>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}

          <Button
            className={`${!soldOut ? 'w-max bg-amber-400 hover:text-stone-700 absolute bottom-0 right-[-350px] md:right-[-475px] flex grow'  : 'hidden'}`}
          >Add to Cart 🛒</Button>
         
        </div>
       
        
      </div>
      
    </li>
  );
}

export default MenuItem;
