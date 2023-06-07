import React from 'react';
import registerImg from '../../assets/others/authentication1.png'
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggeduser = result.user;
                // console.log(loggeduser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user update');

                        const savedUser = { name: data.name, email: data.email };

                        fetch('http://localhost:5000/users',{
                        method: 'POST',
                        headers: {
                            'content-type' : 'application/json'
                        },
                        body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        title: 'Successfully Sign Up User',
                                        icon: 'success',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    });
                                    navigate("/");
                                }
                            })
                    })
                    .catch(error => {
                        setError(error.message);
                        console.log(error);
                    })
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="p-3 bg-white my-32 shadow-2xl shadow-black rounded-xl flex items-center justify-center">
                <div className="hero-content flex-col lg:flex-row-reverse items-center justify-evenly">
                    <img src={registerImg} alt="" className='md:w-1/2' />
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className='text-center text-3xl text-white font-bold'>Please Sign Up!!!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Your Name" name='name' className="input input-bordered text-white" />
                                {errors.name && <span className='text-red-500 text-center mt-3'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Your Picture URL" name='photoURL' className="input input-bordered text-white" />
                                {errors.photoURL && <span className='text-red-500 text-center mt-3'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered text-white" />
                                {errors.email && <span className='text-red-500 text-center mt-3'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, maxLength: 20, minLength: 6 })} name='password' placeholder="password" className="input input-bordered text-white" />
                                {errors.password?.type === 'required' && <span className='text-red-500 text-center mt-3'>This field is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500 text-center mt-3'>Password must be minimum 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-500 text-center mt-3'>Password must be in 20 characters</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className='text-red-500 mt-3 text-center'>{error}</p>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className='btn btn-outline bg-[#D1A054] text-white' />
                            </div>
                            <p className='text-center text-white'><small>Already have an account? <Link to='/login' className='text-blue-500'>Sign In</Link></small></p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;