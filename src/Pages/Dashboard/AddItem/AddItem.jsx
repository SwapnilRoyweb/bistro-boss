import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx';
import { FaUtensilSpoon } from 'react-icons/fa'
import { useForm } from "react-hook-form";

const AddItem = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => {
        console.log(values)
    };

    return (
        <div className=''>
            <SectionTitle subHeading="What's new" heading="Add an item"></SectionTitle>
            <form className='mx-5' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-lg text-black">Recipe Name*</span>
                    </label>
                    <input {...register("name", {required: true, maxLength: 100})} type="text" placeholder="Recipe Name Here" className="input input-bordered w-full" />
                </div>
                <div className='flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-black">Category</span>
                        </label>
                        <select {...register("category", {required: true})} className="select select-bordered text-white">
                            <option disabled selected>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-black">Price*</span>
                        </label>
                        <input {...register("price", {required: true, maxLength: 100})} type="number" placeholder="Recipe Price Here" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-lg text-black">Recipe Details*</span>
                    </label>
                    <textarea {...register("details", {required: true, maxLength: 100})} className="textarea textarea-bordered h-24" placeholder="Recipe Details Here"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold text-lg text-black">Item Image*</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs text-white" />
                </div>
                <input type="submit" value='Add Item' className='btn text-white bg-[#835D23] hover:bg-white hover:text-[#835D23] mt-5' />
            </form>
        </div>
    );
};

export default AddItem;