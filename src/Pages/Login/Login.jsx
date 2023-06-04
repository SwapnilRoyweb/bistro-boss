import React from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Login = () => {

    const captchaRef = useRef(null);

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        // console.log(value);
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    }

    return (
        <div className="min-h-screen bg-white my-32 shadow-2xl shadow-black rounded-xl flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row justify-between items-center">
                <img src={loginImg} alt="" className='md:w-1/2' />
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
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
                            <input type="text" ref={captchaRef} name='captcha' placeholder="Type the text above" className="input input-bordered text-white" />
                            <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-5'>Validate Captcha</button>
                        </div>
                        <div className="form-control mt-5">
                            <input type="submit" disabled={disabled} value="Login" className='btn btn-outline bg-[#D1A054] text-white' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;