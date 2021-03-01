import React from 'react';
import './CheckoutItems.scss';
import {REMOVE_FROM_CART,addToCart,removeItem} from '../../Redux/actions';
import {connect} from 'react-redux';

const CheckoutItems = ({cartItems , remove , removeItem,addToCart}) => {
    const {name , imageUrl , price , quantity} = cartItems
    return(
        <div className = 'checkout-item'>
            <div className = 'image-container'>
                <img src = {imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className='arrow' onClick={()=>removeItem(cartItems)}>&#10094;</div>
                {quantity}
                <div className='arrow' onClick={()=>addToCart(cartItems)}>&#10095;</div>
                </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>remove(cartItems)}>
                &#10005;
                </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => (
    {
        remove:item => dispatch(REMOVE_FROM_CART(item)),
        addToCart:item => dispatch(addToCart(item)),
        removeItem:item => dispatch(removeItem(item)),
    }
)
export default connect(null,mapDispatchToProps)(CheckoutItems);