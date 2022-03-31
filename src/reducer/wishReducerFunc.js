export const wishReducerFunc=(wishState,action)=>{
    const {wishBasket}=wishState;
    switch(action.type){
        case "ADD_TO_WISHLIST":
            return {...wishState,wishBasket:[...wishState.wishBasket,action.wishItem]}
        case "REMOVE_FROM_WISHLIST":
            const currItem=wishBasket.findIndex((elem)=>elem._id===action.payload);
            let newWishBasket=[...wishState.wishBasket];
            if(currItem>=0){
                newWishBasket.splice(currItem,1);
            }else{
                alert(`product with id(${action.payload}) is not present in wishlist`)
            }
            return {...wishState,wishBasket:newWishBasket};
        default :
        return {...wishState}
    }
}