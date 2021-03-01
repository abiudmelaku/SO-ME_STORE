import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripePay = ({price}) =>{
    const priceInCents = price * 100;
    const publishableKey = "pk_test_51IQFHVJuSnmuQ2FIXCToAeZUPZUEdkvg0tfDJxffVss0pSEe7d4uRAG245cV09Er25SD3kpsNkKdeipxIMLy5hI800R0YSdLJN"
    const sendTokenObj = token =>{
        console.log(token)
        alert("Payment Successfull !!!")
    }
    return(
        <StripeCheckout
        label='Pay Now'
        name = 'Byte Computer'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount = {priceInCents}
        token={sendTokenObj}
        stripeKey = {publishableKey}
        />
    )

}
export default StripePay;
