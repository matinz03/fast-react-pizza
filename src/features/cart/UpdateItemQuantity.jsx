import { useDispatch } from 'react-redux'
import Button from '../../ui/Button'
import { decreaseItem, increaseItem } from './cartSlice'

function UpdateItemQuantity({ id, currentQuantity }) {
    const dispatch = useDispatch()

    return (
        <div className="flex items-center gap-2 md:gap-3">
            <Button type="round" onClick={() => dispatch(decreaseItem(id))}>
                -
            </Button>
            <span className="text-sm font-medium sm:text-lg md:text-xl">
                {currentQuantity}
            </span>

            <Button type="round" onClick={() => dispatch(increaseItem(id))}>
                +
            </Button>
        </div>
    )
}

export default UpdateItemQuantity
