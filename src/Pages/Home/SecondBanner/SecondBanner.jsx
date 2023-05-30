import React from 'react';
import chefService from '../../../assets/home/chef-service.jpg'

const SecondBanner = () => {
    return (
        <div className="hero min-h-screen mt-20" style={{ backgroundImage: `url(${chefService})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center bg-white px-52 py-32 border-red-500 border-8 rounded-3xl">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;