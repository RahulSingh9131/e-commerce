import React,{createContext,useContext,useReducer} from "react";
import { filterReducerFunc } from "../reducer/filterReducerFunc";

const FilterContext=createContext();

const FilterProvider=({children})=>{

    const [state,dispatch]=useReducer(filterReducerFunc,{sortBy:"",isFormal:false,isSports:false,isBoot:false,rating:5,price:3200})
    return <FilterContext.Provider value={{state,dispatch}}>
        {children}
    </FilterContext.Provider>
}

const useFilter=()=>useContext(FilterContext);

export {FilterProvider,useFilter};