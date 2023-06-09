import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import './Navbar.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect } from 'react';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const [isAdmin] = useAdmin();

    const [cart] = useCart();

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    // useEffect(, [])

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Contact Us</Link></li>
        <li><Link to={ isAdmin ? '/dashboard/adminHome' : '/dashboard/userHome'}>Dashboard</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salads'>Order Food</Link></li>
        <li>
            <Link to={isAdmin ? '/dashboard/adminHome' : '/dashboard/myCart'}>
                <button className="btn gap-2">
                    <FaShoppingCart />
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
    </>

    return (
        <>
            <div className="navbar bg-[#15151580] fixed z-10 bg-opacity-30 max-w-screen-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#15151580] rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl">Bistro-Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <><span className='mr-3'>{user.displayName}</span> <button className='btn btn-error text-white' onClick={handleLogout}>Logout</button> </> : <button className='btn btn-primary'><Link to='/login'>Login</Link></button>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;