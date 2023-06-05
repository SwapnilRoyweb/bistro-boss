import React from 'react';

const FoodCard = ({item}) => {

    const {image, price, recipe, name} = item;

    const handleAddToCart = item => {
        console.log(item);
    }

    return (
        <div className="card w-96 bg-white shadow-xl">
            <img src={image} alt="Shoes" />
            <p className='bg-black text-white absolute right-0 mt-5 mr-5 px-3 rounded-lg'>${price}</p>
            <div className="card-body flex flex-col items-center gap-5">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="border-b-4 border-[#BB8506] px-5 py-2 bg-slate-100 rounded-lg text-[#BB8506] uppercase font-semibold hover:bg-[#111827]">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;