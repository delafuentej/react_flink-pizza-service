//Test ID: IIDSAT
import { useEffect } from "react";
import { useLoaderData, useFetcher } from "react-router-dom";
import OrderItem from './components/OrderItem';
import { getOrder } from "../../services";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import UpdateOrder from "./UpdateOrder";



const Order =()=> {
  const order = useLoaderData();
// to retrieve info about another route => hook: useFetcher()
  const fetcher = useFetcher();

  useEffect(()=> {
    if(!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
  },[fetcher])
  
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className='flex flex-col justify-center align-center mt-15 space-y-6 px-6 py-4'>
     <h2 className='bg-red-500 text-white font-bold text-center text-xl rounded-lg'>Order #{id} status</h2> 

      <div className='flex  justify-around'>
        <h3 className='font-bold uppercase'>Status</h3>

        <div className='space-x-3'>
          {priority && <span className='rounded-full bg-red-500 text-white uppercase px-4 py-2 font-semibold'>Priority </span>}
          <span className='rounded-full bg-green-600 text-white uppercase  px-4 py-2 font-semibold'>{`${status} order`}</span>
        </div>
      </div>

      <div className='flex justify-around text-center'>
        <p className='font-bold uppercase'>Delivery: 
          {deliveryIn >= 0
            ? ` Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className='px-6 py-4'>
        {cart.map((item) =>(
          <OrderItem 
          key={item.pizzaId}
          item={item}
          isLoadingIngredients= {fetcher.state === 'loading'}
          ingredients={fetcher?.data?.find(el => el.id === item.pizzaId)?.ingredients ?? []}
          
          />
        ))}
        {/* {  console.log('fetcher.data',fetcher.data?.find(el => el.id === item.pizzaId))} */}
      </ul>

      <div className='flex justify-between text-center flex-wrap px-6 py-4'>
        <p className='font-bold flex flex-col'>Price pizza:<span> {formatCurrency(orderPrice)}</span></p>
        {priority && <p className='font-bold flex flex-col'>Price priority: <span>{formatCurrency(priorityPrice)}</span></p>}
        <p className='font-bold flex flex-col uppercase bg-red-500 text-white px-4 py-2 rounded'>To pay on delivery  <span>{formatCurrency(orderPrice + priorityPrice)}</span></p>
      </div>
      {!priority && <UpdateOrder order={order}/>}
    </div>
  );
};

export async function loader({params}){
 
// we need to use a hook to get the id from the url
// but the useParams hook only works inside components
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
