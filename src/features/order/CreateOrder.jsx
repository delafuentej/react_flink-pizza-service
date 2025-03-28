//import { useState } from "react";
import { 
  useNavigation, 
  Form, 
  redirect, 
  useActionData } from "react-router-dom";
import { Button, Input } from "../../ui";
import { createOrder } from "../../services";
import { isValidPhone } from "../../utils/helpers";


const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {

  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  // to be able to retrieve the data from actions(submit form) we need a custom hook
  const formErrors = useActionData();


  console.log(formErrors)


  
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  // this cart come from redux-state management

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
          {formErrors?.phone && <p className='text-xs bg-red-100 text-red-500 rounded-md'>{formErrors.phone}</p>}
        </div>

        <div className="mb-5 flex flex-col gap-2 ">
          <label
          htmlFor="address"
         className="label"
          >Address</label>
          <div>
            <Input
              type='text'
              name='address'
              placeholder= 'Please enter your full address for delivery'
            
            />
            
          </div>
        </div>

        <div flex flex-row space-x-2 gap-4>
          <input
            type="checkbox"
            name="priority"
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

          <Button 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Placing Order' : 'Order now'}
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
      priority: (data.priority === 'on') ? true : false

};

const errors = {};
if(!isValidPhone(order.phone)) errors.phone = 'Please enter a correct phone number';
if(Object.keys(errors).length > 0)   return errors;

//when everything going well, create new order & redirect
const newOrder = await createOrder(order);
return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
