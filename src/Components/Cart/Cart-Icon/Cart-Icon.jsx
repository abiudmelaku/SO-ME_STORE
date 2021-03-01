import React from 'react';
import {connect} from 'react-redux'
import {ReactComponent as ShoopingIcon} from '../../../assets/shopping-bag.svg'
import {toggle_Cart_Dropdown} from '../../../Redux/actions'
import {cartItemListSelect} from '../../../Selectors/Selectors'
import './cart-icon.styles.scss'

const CartIcon = ({cartDropdown , items_on_cart})=> (
    <div className='cart-icon' onClick={cartDropdown}>
        <ShoopingIcon />
        <span>{items_on_cart}</span>
    </div>
)
const mapDispatchToProps = dispatch =>(
    {
        cartDropdown:()=> dispatch(toggle_Cart_Dropdown())
    }
)
const mapStateToProps = (st) =>(
    {
        items_on_cart:cartItemListSelect(st)
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);