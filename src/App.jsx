import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { 
  AppLayout,
  Home, 
  Error } from "./ui";

import {
  Menu, 
  menuLoader,
  Cart,
  Order,
  orderLoader,
  CreateOrder,
  createOrderAction,
  updateOrderAction
} from './features';



//createBrowserRouter: function to define all app routes (each object is one route)
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />
       
      },
      {
        path: "/cart",
        element: <Cart />,
       
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction
        // errorElement: <Error />
       
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction
       
      },
    ],
  },
  
  
]);


function App() {
  
  return <RouterProvider 
          router={router}
        />
}

export default App;
