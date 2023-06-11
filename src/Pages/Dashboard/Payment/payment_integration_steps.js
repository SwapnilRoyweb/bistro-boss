// install stripe and react stripe js
// create a checkout form with card element (card element contains: cared number, expiration date, cvs, zip code)
// create account on stripe and get the publishable key
// get card information 
// create a payment method
// use test card to test payment
// on the server side: install stripe:
// npm install --save stripe
// create a payment intent api with payment method types: ['card']
// make sure you provide amount in cents (multiply price into(*) 100)
// call payment intent api to get client secret and store it in a state
// use confirmCardPayment api with client secret card info
// display confirm card error
// display confirm card success
// do things after payment --->