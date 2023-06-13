import axios from "axios"
import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionType"

export const GetData=(obj)=>async(dispatch)=>{
    dispatch({type:GET_REQUEST})
    try{
        const res=await axios.get("http://localhost:4500/products",obj)
        return dispatch({type:GET_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({type:GET_FAILURE})
    }
}