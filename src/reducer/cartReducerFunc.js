export const cartReducerFunc=(cartState,action)=>{

    const {cartBasket}=cartState;

    switch(action.type){
        case "ADD_TO_CART":
            return {...cartState,
                cartBasket:[...cartState.cartBasket,{...action.item,count:1}]}; 
        case "REMOVE_FROM_CART":
            const index=cartBasket.findIndex((elem)=>elem._id===action.payload._id);
            let newCartBasket=[...cartState.cartBasket];
            if(index>=0){
                newCartBasket.splice(index,1);
            }else{
                alert(`cannot remove the product(id:${action._id}) as its not in the cartbasket`)
            }
            return {...cartState,
                cartBasket:newCartBasket}; 
        case "INCREMENT_QUANTITY":  
                const foundItem=cartBasket.find((elem)=>elem._id===action.payload._id);
                const updatedCartBasket=[...cartState.cartBasket];
                const incrementCartBasket= updatedCartBasket.map((elem)=>elem._id===foundItem._id?{...elem,count:elem.count+1}:{...elem})
             
                return {...cartState,
                    cartBasket:incrementCartBasket};
        case "DECREMENT_QUANTITY":
            const foundDecrementItem=cartBasket.find((elem)=>elem._id===action.payload._id);
            if(foundDecrementItem.count===1){
                const decrementCartBasket=cartBasket.filter((elem)=>elem._id!==foundDecrementItem._id)
                return {...cartState,cartBasket:decrementCartBasket}
            }else{
                const  decrementCartBasket=cartBasket.map((elem)=>elem._id===foundDecrementItem._id?{...elem,count:elem.count-1}:{...elem})
                return {...cartState,
                    cartBasket:decrementCartBasket};
            } 
        case "MOVE_TO_CART":
            const foundWishItem=cartBasket.find((elem)=>elem._id===action.moveItem._id);
            if(foundWishItem){
                const foundWishBasket=cartBasket.map((elem)=>elem._id===foundWishItem._id?{...elem,count:elem.count+1}:{...elem})
                return {...cartState,cartBasket:foundWishBasket};
            }else{
                return {...cartState,cartBasket:[...cartState.cartBasket,{...action.moveItem,count:1}]}
            }        
        default :
        return cartState;
    }
}