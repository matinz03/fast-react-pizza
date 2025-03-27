import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice'
function CartOverview() {
    const totalCartCost = useSelector(getTotalCartPrice)

    const totalCartQuantity = useSelector(getTotalCartQuantity)
    if(!totalCartQuantity) return null;

    return (
        <div className="flex items-center justify-between bg-stone-800 px-4 py-3 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
            <p className="space-x-4 text-sm font-semibold text-stone-300 sm:space-x-6 md:text-base">
                {totalCartQuantity ? (
                    <>
                        <span>{totalCartQuantity} pizzas</span>
                        <span>${totalCartCost}</span>
                    </>
                ) : (
                    ''
                )}
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    )
}

export default CartOverview
