import React, { useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProvider';
import './Checkout.css';

const Checkout = ({ price, cart }) => {

    const stripe = useStripe();
    const elements = useElements();

    const {user} = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();

    const [cardError, setCardError] = useState('');
    // console.log(elements);
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        // console.log(price)
        if(price > 0){
            axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
                // console.log(res.data.clientSecret);
            })
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        // console.log('card', card);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log(error);
            setCardError(error.message);
        } else {
            // console.log(paymentMethod);
            setCardError('');
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if(confirmError){
            console.log(confirmError);
        }

        console.log(paymentIntent);
        setProcessing(false);

        if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id);
            // const transactionId = paymentIntent.id;

            // save payment info to server
            const payment = {email: user?.email, 
                transactionId: paymentIntent.id, 
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                status: 'service pending',
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    // display
                }
            })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {/* <button className='btn btn-outline btn-primary btn-sm mt-5' type="submit" disabled={!stripe}>
                Pay
            </button> */}
            {/* {
                JSON.stringify({stripe: !stripe, c: !clientSecret})
            } */}
                <input className='btn btn-outline btn-primary btn-sm mt-5' type="submit" value="Pay" disabled={!stripe || !clientSecret || processing} />
            </form>
            {
                cardError && <p className='text-xl text-red-500 text-center'>{cardError}</p>
            }
            {
                transactionId && <p className='text-green-500 font-semibold text-xl text-center mt-5'>Transaction Complete with transactionId: {transactionId}</p>
            }
        </>
    );
};

export default Checkout;