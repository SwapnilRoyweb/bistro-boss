import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';

const MyCart = () => {

    const [cart] = useCart();

    const total = cart.reduce((sum, item) => item.price + sum, 0)

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className='uppercase text-2xl font-semibold flex justify-between h-[60px] items-center'>
                <h3>Total Orders: {cart.length}</h3>
                <h3>Total Price: ${total}</h3>
                <button className='btn btn-warning btn-sm'>Pay</button>
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="table text-white">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className='text-end'>${item.price}</td>
                                <td>
                                    <button className="btn btn-error btn-md text-3xl text-white"><FaTrashAlt/></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;