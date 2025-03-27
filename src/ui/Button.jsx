import { Link } from 'react-router-dom'

function Button({ children, disabled = false, to, type, onClick }) {
    const base =
        'text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4'
    const styles = {
        round: 'text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-3 sm:py-1.5   md:px-4  md:py-2.5 px-2 py-0.5',
        primary: base + 'px-4 py-3 md:px-6 md:py-4',
        small: base + 'px-4 py-2  md:px-5 md:py-2.5 text-xs',
        secondary:
            'text-sm px-4 py-2.5 md:px-6 md:py-3.5 inline-block border-2 border-stone-300 rounded-full font-semibold uppercase tracking-wide text-stone-400 hover:bg-stone-300 focus:ring-stone-300 focus:bg-stone-200 transition-colors duration-300 hover:text-stone-800 focus:text-stone-800  focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4',
        small_delete:
            'text-sm inline-block rounded-full bg-red-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-red-300 focus:bg-red-300 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4 px-4 py-2  md:px-5 md:py-2.5 text-xs',
    }

    if (to) {
        return (
            <Link className={styles[type]} to={to}>
                {children}
            </Link>
        )
    }
    if (onClick) {
        return (
            <button onClick={onClick} className={styles[type]}>
                {children}
            </button>
        )
    }
    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button
