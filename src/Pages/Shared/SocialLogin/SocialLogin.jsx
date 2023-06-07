import React from 'react';
import { useContext } from 'react';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email };

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div className='mb-10 mx-5'>
            <div className="divider text-white before:bg-white after:bg-white">OR</div>
            <div className='flex items-center justify-evenly mt-5'>
                <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'><FaGoogle /></button>
                <button className='btn btn-circle btn-outline'><FaFacebook /></button>
                <button className='btn btn-circle btn-outline'><FaGithub /></button>
            </div>
        </div>
    );
};

export default SocialLogin;