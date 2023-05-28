import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <div className='flex flex-col gap-5 my-10'>
            <div className='text-center flex flex-col gap-5'>
                <p className='text-yellow-500'>---From 11.00am to 10.00pm---</p>
                <hr />
                <h3 className='text-3xl uppercase'>Order Online</h3>
                <hr />
            </div>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-10 text-white'>Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-10 text-white'>Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-10 text-white'>Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-10 text-white'>Desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className='text-4xl uppercase text-center -mt-10 text-white'>Salad</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Category;