import { formatCurrency } from '../../utils/helpers'
import Button from '../../ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, getCurrentQuantityById } from '../cart/cartSlice'
import DeleteItem from '../cart/DeleteItem'
import UpdateItemQuantity from '../cart/UpdateItemQuantity'
function MenuItem({ pizza }) {
    const dispatch = useDispatch()

    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza
    function handleAddToCart() {
        const newItem = {
            pizzaId: id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 1,
        }
        dispatch(addItem(newItem))
    }
    const currentQuantity = useSelector(getCurrentQuantityById(id))
    const isInCart = currentQuantity > 0
    return (
        <li className="flex gap-4 py-2">
            <img
                src={imageUrl}
                alt={name}
                className={`h24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
            />
            <div className="flex grow flex-col pt-0.5">
                <p className="font-medium">{name}</p>
                <p className="text-sm capitalize italic text-stone-500">
                    {ingredients.join(', ')}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? (
                        <p className="text-sm">{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className="text-sm font-medium uppercase text-stone-500">
                            Sold out
                        </p>
                    )}
                    {!soldOut ? (
                        isInCart ? (
                            <div className="flex gap-2 md:gap-8">
                                <UpdateItemQuantity
                                    id={id}
                                    currentQuantity={currentQuantity}
                                />
                                <DeleteItem id={id} />
                            </div>
                        ) : (
                            <Button type="small" onClick={handleAddToCart}>
                                Add to cart
                            </Button>
                        )
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </li>
    )
}

export default MenuItem
