import React from 'react';
import registerImg from '../../assets/others/authentication1.png'
import { useForm } from "react-hook-form";

const Register = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="min-h-screen bg-white my-32 shadow-2xl shadow-black rounded-xl flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row-reverse items-center justify-evenly">
                <img src={registerImg} alt="" className='md:w-1/2' />
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-center text-3xl text-white font-bold'>Please Sign Up!!!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" {...register("name", {required: true})} placeholder="Your Name" name='name' className="input input-bordered text-white" />
                            {errors.name && <span className='text-red-500 text-center mt-3'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" {...register("email", {required: true})} name='email' placeholder="email" className="input input-bordered text-white" />
                            {errors.email && <span className='text-red-500 text-center mt-3'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" {...register("password", {required: true, maxLength: 20, minLength: 6})} name='password' placeholder="password" className="input input-bordered text-white" />
                            {errors.password && <span className='text-red-500 text-center mt-3'>This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;