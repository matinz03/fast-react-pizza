import { useSelector } from 'react-redux'
import CreateUser from '../features/user/CreateUser'
import Username from '../features/user/Username'
import { Link } from 'react-router-dom'
import Button from './Button'

function Home() {
    const username = useSelector((state) => state.user.username)
    return (
        <div className="my-10 px-4 text-center sm:my-16">
            <h1 className="mb-8 text-center text-xl font-semibold md:text-3xl">
                The best pizza.
                <br />
                <span className="font-semibold text-yellow-500">
                    Straight out of the oven, straight to you.
                </span>
            </h1>

            {username != '' ? (
                <Button type="primary" to="/menu">
                    Continue your order {username}
                </Button>
            ) : (
                <CreateUser />
            )}
        </div>
    )
}

export default Home
