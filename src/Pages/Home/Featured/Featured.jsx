import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed pt-8 my-20 rounded-xl text-white'>
            <SectionTitle subHeading="Check It Out" heading="Featured Item"></SectionTitle>
            <div className='flex justify-center items-center pb-20 pt-10 px-36 gap-10'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className=''>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt adipisci tenetur id tempore soluta optio, minus magnam vitae dolores possimus delectus voluptas quidem ab in consequatur corporis est libero maxime temporibus dolorum illum enim sequi aut repudiandae! Sunt rem animi a quo doloremque reiciendis nihil dolor. Vitae nisi aperiam possimus?</p>
                    <button className='mt-5 border-b-4 border-white px-5 py-3 rounded-lg hover:bg-white text-white hover:border-0 hover:text-black font-semibold'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;