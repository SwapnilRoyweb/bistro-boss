import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const Checkout = () => {

    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');
    // console.log(elements);

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
                <input className='btn btn-outline btn-primary btn-sm mt-5' type="submit" value="Pay" disabled={!stripe} />
            </form>
            {
                cardError && <p className='text-xl text-red-500 text-center'>{cardError}</p>
            }
        </>
    );
};

export default Checkout;