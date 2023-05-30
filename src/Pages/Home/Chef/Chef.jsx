import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img1 from '../../../assets/home/slide5.jpg'

const Chef = () => {
    return (
        <section className='mb-10 flex flex-col justify-center items-center'>
            <SectionTitle heading="Chef Recommends" subHeading="Should Try"></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="card w-96 bg-white shadow-xl">
                    <img src={img1} alt="Shoes" className="rounded-xl" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold text-3xl">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions mt-3">
                            <button className="uppercase border-b-4 border-yellow-500 px-5 py-3 rounded-xl hover:bg-[#1F2937] text-yellow-500 hover:border-0">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-white shadow-xl">
                    <img src={img1} alt="Shoes" className="rounded-xl" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold text-3xl">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions mt-3">
                            <button className="uppercase border-b-4 border-yellow-500 px-5 py-3 rounded-xl hover:bg-[#1F2937] text-yellow-500 hover:border-0">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-white shadow-xl">
                    <img src={img1} alt="Shoes" className="rounded-xl" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold text-3xl">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions mt-3">
                            <button className="uppercase border-b-4 border-yellow-500 px-5 py-3 rounded-xl hover:bg-[#1F2937] text-yellow-500 hover:border-0">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chef;