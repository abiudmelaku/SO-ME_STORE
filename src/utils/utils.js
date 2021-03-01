export const addToCartFunc = (cartItems , newCartItem) =>{
    const itemExists = cartItems.find(
        item =>item.id === newCartItem.id
    )
    if (itemExists){
        return(
            cartItems.map(item =>{
                return(
                    item.id === newCartItem.id ? {...newCartItem ,  quantity: item.quantity + 1}:
                    item 

                )
               
            })
        )
    }
    return([...cartItems , {...newCartItem , quantity:1}])
}

export const removeItemFromCart = (cartItems , cartItemToRemove) =>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id?
        {...cartItem,quantity:cartItem.quantity-1}:
        cartItem)
}