import React from 'react'
import {connect} from 'react-redux'
import {Link , withRouter} from "react-router-dom";
import Cart_items from '../Cart-items/Cart-items'
import CustomButton from '../../Custom-Button/Custom_button'
import {cartItemSlelect } from '../../../Selectors/Selectors'
import {createStructuredSelector} from 'reselect'
import {toggle_Cart_Dropdown} from '../../../Redux/actions'
import './cart-dropdown.styles.scss'


const CartDropdown = ({items_on_cart , history , match  , dispatch})=>(
    <div className= 'cart-dropdown'>
        <div className = 'cart-items'>
            {
                items_on_cart.length ?
                items_on_cart.map(cartItem => (
                    <Cart_items key={cartItem.id} item={cartItem} />
                )) : <span className = 'empty-message'> No Items on cart</span>
            }
        
            

            <CustomButton onClick={() => {
                dispatch(toggle_Cart_Dropdown())
                history.push(`${match.url}checkout`)
                }
            
            }>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    items_on_cart:cartItemSlelect
})

export default withRouter(connect(mapStateToProps)(CartDropdown));