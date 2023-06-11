import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaAlignJustify, FaHamburger, FaUtensilSpoon, FaBook, FaUsers } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
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
          {
            isAdmin ?
              <>
                <li><NavLink to='/dashboard/adminHome'><FaHome />Admin Home</NavLink></li>
                <li><NavLink to='/dashboard/addItem'><FaUtensilSpoon />Add Item</NavLink></li>
                <li><NavLink to='/dashboard/manageItems'><FaAlignJustify />Manage Items</NavLink></li>
                <li><NavLink to='/dashboard/history'><FaBook />Manage Bookings</NavLink></li>
                <li><NavLink to='/dashboard/allUsers'><FaUsers />All Users</NavLink></li>
              </> :
              <>
                <li><NavLink to='/dashboard/userHome'><FaHome />User Home</NavLink></li>
                <li><NavLink to='/dashboard/reservations'><FaCalendarAlt />Reservations</NavLink></li>
                <li><NavLink to='/dashboard/history'><FaWallet />Payment History</NavLink></li>
                <li>
                  <NavLink to='/dashboard/myCart'><FaShoppingCart />My Cart
                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                  </NavLink>
                </li>
              </>
          }

          <div className="divider bg-white h-1"></div>

          <li><NavLink to='/'><FaHome />Home</NavLink></li>
          <li><NavLink to='/menu'><FaAlignJustify />Our Menu</NavLink></li>
          <li><NavLink to='/order/salads'><FaHamburger />Order Food</NavLink></li>

        </ul>

      </div>
    </div>
  );
};

export default Dashboard;