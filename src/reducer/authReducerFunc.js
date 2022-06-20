export const authReducerFunc=(authState,action)=>{
    switch(action.type){
        case "FIRSTNAME":
            return {...authState,firstname:action.payload};
        case "LASTNAME":
            return {...authState,lastname:action.payload};    
        case "EMAIL":
            return {...authState,email:action.payload};
        case "PASSWORD":
            return {...authState,password:action.payload};
        case "CONF_PASSWORD":
            return {...authState,confirmpass:action.payload};        
        case "CLEAR_AUTH":
            return {...authState,encodedToken:"",userData:""};
        case "ERROR":
            return {...authState,errorMsg:action.payload};
        case "CLEAR_INPUTS":
            return {...authState,email:"",password:"",firstname:"",lastname:"",confirmpass:""};
        case "TEST_INPUTS":
            return {...authState,email:"abc@gmail.com",password:"1234"};        
        case "USER_DETAIL":
            const {foundUser,encodedToken}=action.payload;
            return {...authState,userData:foundUser,encodedToken};
        case "LOCAL_STORAGE_DATA":
            return {...authState,
                encodedToken:localStorage.getItem("userToken"),
                userData:JSON.parse(localStorage.getItem("userDetail"))
            };    
        default :
            return {...authState};
    }
}