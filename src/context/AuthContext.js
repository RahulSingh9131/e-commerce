import {createContext,useContext,useEffect,useReducer} from "react";
import axios from  "axios";
import {useNavigate} from "react-router-dom";
import { authReducerFunc } from "../reducer/authReducerFunc";


const AuthContext=createContext();

const AuthProvider=({children})=>{
    const navigate=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("userToken")){
            authDispatch({type:"LOCAL_STORAGE_DATA"})
        }
    },[])

    const initialState={
        email:"",
        password:"",
        confirmpass:"",
        firstname:"",
        lastname:"",
        userData:"",
        encodedToken:"",
        errorMsg:""
    }

    const [authState,authDispatch]=useReducer(authReducerFunc,initialState);

    const login= async ()=>{
        try{
            const res= await axios.post("/api/auth/login",{
                email:authState.email,
                password:authState.password
            });
            const {data,status}=res;
            if(status===200){
                localStorage.setItem("userToken",data.encodedToken);
                localStorage.setItem("userDetail",JSON.stringify(data.foundUser));
                authDispatch({type:"USER_DETAIL",payload:data});
                authDispatch({type:"CLEAR_INPUTS"});
                navigate("/products");
            }else if(status===201){
                authDispatch({type:"ERROR",payload:"Incorrect Password"});
            }
        }catch(e){
            authDispatch({type:"ERROR",payload:"Invalid Credentials"});
            console.log("login error is",e);
        }
   
    };

    const logout=  ()=>{
        localStorage.removeItem("userDetail");
        localStorage.removeItem("userToken");
        authDispatch({type:"CLEAR_AUTH"});
        navigate("/");
    }

    const signup= async ()=>{
        try{
            const res= await axios.post("/api/auth/signup",{
                firstname:authState.firstname,
                lastname:authState.lastname,
                email:authState.email,
                password:authState.password,
                confirmpass:authState.confirmpass
            });
            const {data,status}=res;
            if(status===200 || status===201){
                localStorage.setItem("userToken",data.encodedToken);
                localStorage.setItem("userDetail",JSON.stringify(data.createdUser));
                authDispatch({type:"USER_DETAIL",payload:data});
                authDispatch({type:"CLEAR_INPUTS"});
                navigate("/products");
            }
        }catch(e){
            authDispatch({type:"ERROR",payload:"User Already Exists"});
            console.log("signup error is",e);
        }
    }

    return (
        <AuthContext.Provider value={{authState,authDispatch,login,logout,signup}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth=()=>useContext(AuthContext);

export {useAuth,AuthProvider} ;