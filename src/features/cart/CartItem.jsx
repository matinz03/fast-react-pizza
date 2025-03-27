import { formatCurrency } from '../../utils/helpers'
import DeleteItem from './DeleteItem'
import UpdateItemQuantity from './UpdateItemQuantity'
function CartItem({ item }) {
    const { pizzaId, name, quantity, totalPrice } = item

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between space-x-3 sm:gap-6">
                <p className="mt-1 text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>
                <div className='flex gap-2'>
                    <UpdateItemQuantity id={pizzaId} currentQuantity={quantity} />
                    <DeleteItem id={pizzaId} />
                </div>
            </div>
        </li>
    )
}

export default CartItem
