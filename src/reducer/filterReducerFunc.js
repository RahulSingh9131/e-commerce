export function filterReducerFunc(state,action){
    switch(action.type){
        case "SORT":
            return {...state,sortBy:action.payload};
        case "FORMAL_SHOES":
            return {...state,isFormal:!state.isFormal};
        case "SPORTS_SHOES":
            return {...state,isSports:!state.isSports};
        case "BOOTS":
            return {...state,isBoot:!state.isBoot};
        case "RATING":
            return {...state,rating:action.payload} ;
        case "CLEAR":
            return {sortBy:"",isFormal:false,isSports:false,isBoot:false,rating:5};       
        default :
            return state;            
    }
}