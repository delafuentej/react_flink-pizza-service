import { formatCurrency } from "../../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className='py-3'>
      <div className='flex items-center justify-between gap-4'>
        <p>
          <span className='font-bold'>{quantity}&times;</span> <span className="font-bold">{name}</span>
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
