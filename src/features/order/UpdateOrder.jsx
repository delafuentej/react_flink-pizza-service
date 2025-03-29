import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services";
import { Button } from "../../ui";

const UpdateOrder = ({order}) => {
    const fetcher = useFetcher();
  return <fetcher.Form 
            method='PATCH'
            className='text-right'
        >
                <Button 
                    className='uppercase text-ls w-1/3  rounded-xl'
                >
                    Make Priority
                </Button>

        </fetcher.Form>
}

export default UpdateOrder;

export async function action({request, params}){
   const data ={ priority: true};
   await updateOrder(params.orderId, data);
    return null;

}