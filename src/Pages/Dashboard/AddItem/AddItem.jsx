import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx';
import { FaUtensilSpoon } from 'react-icons/fa'
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {

    const [axiosSecure] = useAxiosSecure();

    const { handleSubmit, register, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            // console.log(imgResponse);
            if(imgResponse.success){
                const imgURL =  imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image: imgURL}
                // console.log(newItem);
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    // console.log('After posting new menu item', data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item Added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

        // console.log(data)
    };
    // console.log(img_hosting_token);

    return (
        <div className=''>
            <SectionTitle subHeading="What's new" heading="Add an item"></SectionTitle>
            <form className='mx-5' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-lg text-black">Recipe Name*</span>
                    </label>
                    <input {...register("name", {required: true, maxLength: 100})} type="text" placeholder="Recipe Name Here" className="input input-bordered w-full text-white" />
                </div>
                <div className='flex gap-5 my-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-black">Category</span>
                        </label>
                        <select defaultValue="Pick one" {...register("category", {required: true})} className="select select-bordered text-white">
                            <option disabled>Pick one</option>
                            <option>pizza</option>
                            <option>soup</option>
                            <option>salad</option>
                            <option>drinks</option>
                            <option>dessert</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-lg text-black">Price*</span>
                        </label>
                        <input {...register("price", {required: true, maxLength: 100})} type="number" placeholder="Recipe Price Here" className="input input-bordered w-full text-white" />
                    </div>
                </div>
                <div className="form-control mb-5">
                    <label className="label">
                        <span className="label-text font-semibold text-lg text-black">Recipe Details*</span>
                    </label>
                    <textarea {...register("recipe", {required: true, maxLength: 500})}className="textarea textarea-bordered h-24 text-white" placeholder="Recipe Details Here"></textarea>
                </div>
                <div className="form-control w-full max-w-xs my-5">
                    <label className="label">
                        <span className="label-text font-semibold text-lg text-black">Item Image*</span>
                    </label>
                    <input {...register("image", {required: true})} type="file" className="file-input file-input-bordered w-full max-w-xs text-white" />
                </div>
                <input type="submit" value='Add Item' className='btn text-white bg-[#835D23] hover:bg-white hover:text-[#835D23] mt-5' />
            </form>
        </div>
    );
};

export default AddItem;