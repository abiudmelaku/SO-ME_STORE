import React from 'react';
import './Checkout.scss'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {cartItemSlelect , totalCostSelect} from '../../Selectors/Selectors'
import CheckoutItems from './CheckoutItems'
import StripePay from './Stripe/StripeCheckout'


const CheckoutHeader = ({items_on_cart , total}) =>(
    <div className = 'checkout-page'>
        <div className = 'checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            items_on_cart.map(boughtItems =>(<CheckoutItems cartItems={boughtItems} />))
            
        }
        <div className='total'>
                <span>TOTAL:${total}</span><br/>
                <div className='test-warning'>
                    Make Sure to use the following credit card for payments !!! 
                    <br/>
                    4242 4242 4242 4242 -Exp 01/22 - CVV:123

                </div>
                <StripePay price={total}/>
        </div>
        
        
    </div>
)
const mapStateToProps = createStructuredSelector({
    items_on_cart:cartItemSlelect,
    total:totalCostSelect

})

export default connect(mapStateToProps)(CheckoutHeader);
