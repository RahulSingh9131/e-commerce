import {createContext,useContext,useReducer} from "react";
import { wishReducerFunc } from "../reducer/wishReducerFunc";

const WishContext=createContext();

const useWishlist=()=>useContext(WishContext);

const WishProvider=({children})=>{
    const [wishState,wishDispatch]=useReducer(wishReducerFunc,{wishBasket:[]})
    return (<WishContext.Provider value={{wishState,wishDispatch}}>
                {children}
        </WishContext.Provider>)
}

export {useWishlist,WishProvider};