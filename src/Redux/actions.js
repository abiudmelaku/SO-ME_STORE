import {userActionType , cartActionType , itemActionType,collectionActionType} from './actiontypes'
export const setCurrentUser = user =>({
    type : userActionType.SET_CURRENT_USER,
    payload:user
})



export const toggle_Cart_Dropdown = () =>({
    type:cartActionType.CART_VISIBILITY
})
export const addToCart = item => (
    {
        type:cartActionType.ADD_TO_CART,
        payload:item
    }
)

export const REMOVE_FROM_CART = item =>(
    {
        type:cartActionType.REMOVE_FROM_CART,
        payload:item
    }
)
export const  removeItem = item => ({
    type:cartActionType.REMOVE_ITEM, 
    payload:item,
})



export const sectionItems = (
    {
        type:itemActionType.SECTION,
    }
)


export const collectionItems = (
    {
        type:collectionActionType.collection,
    }
)
