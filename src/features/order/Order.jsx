//Test ID: IIDSAT
import { useLoaderData } from "react-router-dom";
import OrderItem from './components/OrderItem';
import { getOrder } from "../../services";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";



const Order =()=> {
  const order = useLoaderData();
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
        <h3 className='font-bold'>Status</h3>

        <div>
          {priority && <span className='text-red-500 font-semibold'>Priority </span>}
          <span>{`${status} order`}</span>
        </div>
      </div>

      <div className='flex justify-around text-center'>
        <p className='font-bold'>Delivery: 
          {deliveryIn >= 0
            ? ` Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className='px-6 py-4'>
        {cart.map((item) =>(
          <OrderItem 
          key={item.id}
          item={item}
          />
        ))}
      </ul>

      <div className='flex justify-between text-center flex-wrap px-6 py-4'>
        <p className='font-bold flex flex-col'>Price pizza:<span> {formatCurrency(orderPrice)}</span></p>
        {priority && <p className='font-bold flex flex-col'>Price priority: <span>{formatCurrency(priorityPrice)}</span></p>}
        <p className='font-bold flex flex-col'>To pay on delivery:  <span>{formatCurrency(orderPrice + priorityPrice)}</span></p>
      </div>
    </div>
  );
};

export async function loader({params}){
  console.log('params', params)
// we need to use a hook to get the id from the url
// but the useParams hook only works inside components
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
