import { useDispatch, useSelector } from 'react-redux'
import Button from '../../ui/Button'
import LinkButton from '../../ui/LinkButton'
import CartItem from './CartItem'
import { clearCart, getCart } from './cartSlice'
import EmptyCart from './EmptyCart'

function Cart() {
    function handleClearAll() {
        dispatch(clearCart())
    }
    const dispatch = useDispatch()
    const cart = useSelector(getCart)
    const username = useSelector((state) => state.user.username)
    if (!cart.length) return <EmptyCart />
    return (
        <div className="px-4 py-3">
            <LinkButton to={'/menu'}>Back to menu</LinkButton>

            <h2 className="mt-7 text-xl font-semibold">
                Your cart, {username}
            </h2>
            <ul className="mt-3 divide-y divide-stone-200 border-b">
                {cart.map((pizza) => (
                    <CartItem item={pizza} key={pizza.key}></CartItem>
                ))}
            </ul>
            <div className="mt-6 flex justify-between">
                <Button type="primary" to={'/order/new'} disabled={false}>
                    Order pizzas
                </Button>
                <Button type="secondary" onClick={handleClearAll}>
                    Clear cart
                </Button>
            </div>
        </div>
    )
}

export default Cart
