import { useState, useEffect } from "react";
import { 
  useNavigation, 
  Form, 
  redirect, 
  useActionData } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, EmptyCart, getCart, getTotalPriceCart } from "../cart";
import {store} from '../../store';
import { Button, Input } from "../../ui";
import { createOrder } from "../../services";
import { isValidPhone } from "../../utils/helpers";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";

function CreateOrder() {

  const[ withPriority, setWithPriority] = useState(false)
  

  const {username, status: addressStatus, position, address, error: errorAddress } = useSelector((state)=> state.user);


  const {position:  localPosition= { latitude: 0, longitude: 0 }}= position;



  const[addressInput, setAddressInput] = useState(address || '');

  const isLoadingAddress = addressStatus === 'loading';

  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';
  // to be able to retrieve the data from actions(submit form) we need a custom hook
  const formErrors = useActionData();

  const dispatch = useDispatch();

  
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalPriceCart);
  const priorityPrice = (withPriority) ? totalCartPrice * 0.2 : 0; 
  const totalPrice = totalCartPrice + priorityPrice;

  useEffect(() => {
    setAddressInput(address || "");
 }, [address]);
 
  // this cart come from redux-state management

  if(!cart.length) return <EmptyCart />;

  return (
    <div className='py-6 px-4'>
      <h2 className="block text-xl font-semibold text-stone-500 mb-6">Ready to order? Let's go!</h2>


      <Form 
        method='POST'
        //action='/order/new'
        >
        <div className="mb-5 flex flex-col gap-2 ">
          <label
          htmlFor='customer'
          className="label"
          >First Name</label>

          <Input
            type='text'
            defaultValue={username}
            name='customer'
            placeholder='Introduce your first name'
          />
         
        </div>

        <div className="mb-5 flex flex-col gap-2 ">
          <label
          htmlFor='phone'
         className="label"
          >Phone number</label>
          <div>
            <Input
              type='tel'
              name='phone'
              placeholder='Introduce your phone number'
            />
          
          </div>
          {formErrors?.phone && <p className='text-md bg-red-100 text-red-500 rounded-md px-2 py-1'>{formErrors.phone}</p>}
        </div>

        <div className="mb-5 flex flex-col gap-2 relative">
          <label
          htmlFor="address"
         className="label"
          >Address</label>
          <div>
        
            <Input
              type='text'
              name='address'
              disabled={isLoadingAddress}
               value={addressInput}
              // defaultValue={address}
               onChange={(e) =>setAddressInput(e.target.value)}
              placeholder= 'Please enter your full address for delivery'
            />
              {addressStatus === 'error' && (<p className='text-md bg-red-100 text-red-500 rounded-md px-2 py-1'>{errorAddress}</p>)}
          </div>

             {/*to dispatch fetchAddress funcion*/}

            {
              (!localPosition?.latitude && !localPosition?.longitude) &&
              (<span className='absolute right-[5px] bottom-[5px] z-50' >
              <Button 
                 disabled={isLoadingAddress}
                  className='rounded-all uppercase'
                  handleClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress())}}
              >
             🌍   Get Position
              </Button>
  
            </span>)
            }
         
        </div>

        <div flex flex-row space-x-2 gap-4>
          <input
            type="checkbox"
            name="priority"
            value={withPriority}
            onChange={(e)=> setWithPriority(e.target.checked)}
            id="priority"
            className="peer mr-3 mt-2 h-4 w-4 accent-red-500"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          
          <label 
           className="text-sm  font-medium text-stone-500 space-x-2 cursor-pointer"
          htmlFor="priority">Want to yo give your order priority?</label>

          <span className="text-red-500 font-medium opacity-0 peer-checked:opacity-100 transition-opacity">
          Priority
          </span>
        </div>

        <div>
          {/* creation of an invisible input to transmit the cart information as a string*/}
          <input type='hidden' name='cart' value={JSON.stringify(cart)}/>

          <input type='hidden' name='position' value={`${localPosition?.latitude}, ${localPosition?.longitude}`}/>

          <Button 
            disabled={isSubmitting || isLoadingAddress}
          >
            {isSubmitting ? 'Placing Order' : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>

        </div>
      </Form>
    </div>
  );
}

export async function action({request}){
  const formData = await request.formData();
 
  const data= Object.fromEntries(formData);
  console.log('data', data)
 const order = {
      ...data,
      cart: JSON.parse(data.cart),
      priority: data.priority === 'true',

};

const errors = {};
if(!isValidPhone(order.phone)) errors.phone = 'Please enter a correct phone number';
if(Object.keys(errors).length > 0)   return errors;

//when everything going well, create new order & redirect
const newOrder = await createOrder(order);
// do not overuse
store.dispatch(clearCart());

return redirect(`/order/${newOrder.id}`);

}

export default CreateOrder;
