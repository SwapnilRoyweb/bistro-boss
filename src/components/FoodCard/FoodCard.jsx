import { data } from 'autoprefixer';
import React from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';
import { AuthContext } from '../../Providers/AuthProvider';

const FoodCard = ({item}) => {

    const {user} = useContext(AuthContext);

    const {image, price, recipe, name, _id} = item;

    const navigate = useNavigate();
    const location = useLocation();

    const [, refetch] = useCart();

    const handleAddToCart = item => {
        console.log(item);
        if(user){
            const cartItem = {menuItemId : _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); //refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food Added to Cart',
                        showConfirmButton: false,
                        timer: 1500
                      }) 
                }
            })
        }else{
            Swal.fire({
                title: 'Please Sign In for order food',
                text: "You won't be able to add this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}});
                }
              })
        }
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