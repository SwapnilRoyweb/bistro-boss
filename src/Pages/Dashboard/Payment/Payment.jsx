import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Checkout from './Checkout';
import { Elements } from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import useCart from '../../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// console.log(stripePromise);

const Payment = () => {

    const [cart] = useCart();

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));

    return (
        <div className='flex flex-col items-center justify-center mx-20 h-full'>
            <SectionTitle subHeading="Please Process" heading="Payment"></SectionTitle>
            <Elements stripe={stripePromise}>
                <Checkout cart={cart} price={price}></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;