import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { deleteItem } from './cartSlice'

function DeleteItem({ id }) {
    const dispatch = useDispatch()
    function handleDelete() {
        dispatch(deleteItem(id))
    }
    return (
        <Button type="small_delete" onClick={handleDelete}>
            Delete
        </Button>
    )
}

export default DeleteItem
