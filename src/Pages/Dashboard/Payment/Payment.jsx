import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Checkout from './Checkout';
import { Elements } from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// console.log(stripePromise);

const Payment = () => {

    return (
        <div className='flex flex-col justify-center mx-20 h-full'>
            <SectionTitle subHeading="Please Process" heading="Payment"></SectionTitle>
            <Elements stripe={stripePromise}>
                <Checkout></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;