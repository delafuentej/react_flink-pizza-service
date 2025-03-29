import { useSelector } from 'react-redux';
import { getCurrentQuantityById } from '../../cart';
import {AddItemButton} from '../../cart';
import {DeleteItemButton} from '../../cart';
import UpdateItemQuantity from '../../cart/UpdateItemQuantity';
import {formatCurrency} from '../../../utils/helpers';




function MenuItem({ pizza }) {

  //const username = useSelector(state => state.user.username);
  
  const {id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantityById = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantityById > 0;


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

         
          {(!soldOut && isInCart) ?  
          <>
          <UpdateItemQuantity pizzaId={id}
            currentQuantity={currentQuantityById}
            className='flex items-center w-max absolute bottom-15  text-stone-500 font-medium text-xl right-[-350px] md:right-[-475px] flex grow'
          />

          <DeleteItemButton 
            className='w-max bg-red-500 hover:text-stone-700 absolute bottom-0 right-[-350px] md:right-[-475px] flex grow'
            pizzaId={id}
            /> 
          </>
           
          : 
          (!soldOut && !isInCart) ?
            <AddItemButton 
            pizza={pizza}
            />
            :
            null
          }

          
         
        </div>
       
        
      </div>
      
    </li>
  );
}

export default MenuItem;
