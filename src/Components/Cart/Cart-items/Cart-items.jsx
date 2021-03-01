import React from 'react'
import './Cart-items.scss'

const Cart_items = ({item:{imageUrl,price,name,quantity}}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className = 'item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>

)
export default Cart_items;