export const cartReducerFunc=(cartState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return {...cartState,
                cartTotalPrice:cartState.cartTotalPrice+action.payload,
                cartDiscount:cartState.cartDiscount+action.discount,
                cartBasket:[...cartState.cartBasket,action.item]}; 
        case "REMOVE_FROM_CART":
            const index=cartState.cartBasket.findIndex((elem)=>elem.id===action._id);
            let newCartBasket=[...cartState.cartBasket];
            if(index){
                newCartBasket.splice(index,1);
            }else{
                alert(`cannot remove the product(id:${action._id}) as its not in the cartbasket`)
            }
            return {...cartState,
                cartBasket:newCartBasket,
                cartTotalPrice:cartState.cartTotalPrice-action.price,
                cartDiscount:cartState.cartDiscount-action.discount};       
        case "ADD_TO_WISHLIST":
            return {...cartState,wishItems:cartState.wishItems+1}     
        default :
        return state;
    }
}