import React from 'react';
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {

    const [disabled, setDisabled] = useState(true);

    const [error, setError] = useState('');

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Successfully Login User',
                    icon: 'success',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
                setError('');
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleValidateCaptcha = (event) => {
        const user_captcha_value = event.target.value;
        // console.log(value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="p-3bg-white my-32 shadow-2xl shadow-black rounded-xl flex items-center justify-center">
                <div className="hero-content flex-col lg:flex-row justify-evenly items-center">
                    <img src={loginImg} alt="" className='md:w-1/2' />
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <h1 className='text-center text-3xl text-white font-bold'>Please Login!!!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered text-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered text-white" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleValidateCaptcha} name='captcha' placeholder="Type the text above" className="input input-bordered text-white" />
                            </div>
                            <p className='text-red-500 mt-3 text-center'>{error}</p>
                            <div className="form-control mt-5">
                                <input disabled={disabled} type="submit" value="Login" className='btn btn-outline bg-[#D1A054] text-white' />
                            </div>
                            <p className='text-center text-white'><small>New here? <Link to='/signup' className='text-blue-500'>Create an Account</Link></small></p>
                        </form>
                            <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;