import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Header() {
    const cart = useSelector(state => state.cart)
    const [count, setCount] = useState(0)
    useEffect(() => {
        let sum = 0;
        cart.length > 0 && cart.forEach(value => {
            sum += Number(value.count)
        });
        setCount(sum)
    }, [cart])
    return (
        <header className='flex items-center justify-between p-5 bg-[#f0f6ff] text-3xl pl-20 pr-20'>
            <div className='logo'>
                <a className='bg-blue-500 rounded-md p-4 text-white text-2xl' href="#">C</a>
            </div>
            <nav className='flex items-center gap-10'>
                <Link to='/'>Home</Link>
                <Link to='/Product'>Product</Link>
                <Link to='/Cart'>Cart</Link>
            </nav>
            <p>{count}</p>
        </header>
    )
}

export default Header
