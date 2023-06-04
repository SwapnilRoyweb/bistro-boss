import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import './Navbar.css'

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Contact Us</Link></li>
        <li><Link>Dashboard</Link></li>
        <li> <Link to='/menu'>Our Menu</Link></li>
        <li> <Link to='/order/salad'>Order Food</Link></li>
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
                    <ul className="menu menu-horizontal px-1 flex gap-5 items-center">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <><span className='mr-5'>{user.displayName}</span> <button className='btn btn-error text-white' onClick={handleLogout}>Logout</button> </> : <button className='btn btn-primary'><Link to='/login'>Login</Link></button>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;