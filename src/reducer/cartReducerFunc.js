export const cartReducerFunc=(cartState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return {...cartState,cartItems:cartState.cartItems+1,cartTotalPrice:cartState.cartTotalPrice+action.payload}; 
        case "ADD_TO_WISHLIST":
            return {...cartState,wishItems:cartState.wishItems+1}       
        default :
        return state;
    }
}