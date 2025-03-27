//import { useState } from "react";
import { 
  useNavigation, 
  Form, 
  redirect, 
  useActionData } from "react-router-dom";
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
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form 
        method='POST'
        //action='/order/new'
        >
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p className={{style: {color: 'red'}}}>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          {/* creation of an invisible input to transmit the cart information as a string*/}
          <input type='hidden' name='cart' value={JSON.stringify(cart)}/>
          <button
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Placing Order' : 'Order now'}
          </button>
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
