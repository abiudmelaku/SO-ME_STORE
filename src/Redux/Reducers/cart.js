import {cartActionType} from '../actiontypes'
import {addToCartFunc,removeItemFromCart} from '../../utils/utils'
const CART_VISIBILITY = {
    visibility:false,
    items_on_cart:[]
}
const cartReducer = (cartState=CART_VISIBILITY , action) =>{
    switch(action.type){
        case cartActionType.CART_VISIBILITY:
            return(
                {
                    ...cartState,
                    visibility:!cartState.visibility
                }
            )
        case cartActionType.ADD_TO_CART:
            return(
                {
                    ...cartState,
                    items_on_cart:addToCartFunc(cartState.items_on_cart , action.payload),

                }
            )
        case cartActionType.REMOVE_FROM_CART:
            return(
                {
                    ...cartState,
                    items_on_cart: cartState.items_on_cart.filter(items => items.id !== action.payload.id)
                }
            )

        case cartActionType.REMOVE_ITEM:
            return (
                {
                    ...cartState,
                    items_on_cart:removeItemFromCart(cartState.items_on_cart , action.payload)
                }
            )
        default:
            return(cartState)
    }
    
}
export default cartReducer;