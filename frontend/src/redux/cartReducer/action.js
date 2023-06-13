import axios from "axios"
import { CART_GET_FAILURE, CART_GET_REQUEST, CART_POST_FAILURE, CART_POST_REQUEST, CART_POST_SUCCESS } from "./actionTypes"

export const  AddtoCart=(obj,token)=>async(dispatch)=>{
    dispatch({type:CART_POST_REQUEST})
    try{
        const res=await axios.post("http://localhost:4500/cart/addproduct",obj,{headers:{
            Authorization:token
        }})
        dispatch({type:CART_POST_SUCCESS})
        return res.data.status
    }catch(err){
        dispatch({type:CART_POST_FAILURE})
    }
}

export const GetCardData=(obj,token)=>async(dispatch)=>{
    dispatch({type:CART_GET_REQUEST})
    try{
        let res=await axios.get(`http://localhost:4500/cart/getcart`,obj,{headers:{
            Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDgzMmQxODU0YjZhNzY2NGQ1YjBmZTYiLCJyb2xlIjoic3VwZXJhZG1pbiIsImlhdCI6MTY4NjY1Njg1Mn0.2sXOBO8F2nS-QAE4CtAEUQnqxJh4r-cyJdvoySrSCgc"
        }})
        console.log(res)
    }catch(err){
        dispatch({type:CART_GET_FAILURE})
    }
}