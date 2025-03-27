import { useState } from 'react'
import Button from '../../ui/Button'
import { updateName } from './userSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function CreateUser() {
    const [username, setUsername] = useState('')
    const [order, setOrder] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if (!username) return
        dispatch(updateName(username))
        navigate('/menu')
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="mb-4 text-sm text-stone-600 md:text-base">
                👋 Welcome! Please start by telling us your name:
            </p>

            <input
                className="input mb-2 w-72"
                type="text"
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            {username !== '' && (
                <div>
                    <Button
                        type="primary"
                        onClick={() => setOrder(true)}
                        disabled={order}
                    >
                        Start ordering
                    </Button>
                </div>
            )}
        </form>
    )
}

export default CreateUser
