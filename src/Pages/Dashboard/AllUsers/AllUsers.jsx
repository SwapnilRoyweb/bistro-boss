import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserSecret} from 'react-icons/fa';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleDelete = () => {

    }

    const handleMakeAdmin = id => {
        
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <h3 className='text-3xl font-semibold'>Total Users: {users.length}</h3>
            <div className="overflow-x-auto my-5">
                <table className="table table-zebra text-white">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    { user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-square text-white text-xl bg-orange-400'><FaUserSecret/></button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-error text-xl text-white"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;