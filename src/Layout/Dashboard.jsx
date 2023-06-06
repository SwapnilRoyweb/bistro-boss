import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaAlignJustify, FaHamburger } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>

        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-black">
          <div className='flex flex-col items-center my-16'>
            <h1 className='text-4xl font-bold'>Bistro Boss</h1>
            <p className='font-semibold tracking-widest'>Restaurant</p>
          </div>
          {/* Sidebar content here */}
          <li><Link><FaHome/>User Home</Link></li>
          <li><Link><FaCalendarAlt/>Reservations</Link></li>
          <li><Link><FaWallet/>Payment History</Link></li>
          <li><Link to='/dashboard/myCart'><FaShoppingCart/>My Cart</Link></li>

          <div className="divider bg-white h-1"></div>

          <li><Link to='/'><FaHome/>Home</Link></li>
          <li><Link to='/menu'><FaAlignJustify/>Our Menu</Link></li>
        <li><Link to='/order/salads'><FaHamburger/>Order Food</Link></li>
          
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;