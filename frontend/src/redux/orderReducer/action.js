import axios from "axios"
import { ORDER_GET_FAILURE, ORDER_GET_REQUEST, ORDER_GET_SUCCESS, ORDER_POST_FAILURE, ORDER_POST_REQUEST } from "./actionTypes"

export const AddOrder=(obj,token)=>async(dispatch)=>{
    dispatch({type:ORDER_POST_REQUEST})
    try{
        const res=await axios.post("http://localhost:4500/order/addproduct",obj,{
            headers:{
                Authorization:token
            }
        })
        return {status:res.data.status}
    }catch(err){
        dispatch({type:ORDER_POST_FAILURE})
    }
}


export const GetOrders=(token)=>async(dispatch)=>{
    dispatch({type:ORDER_GET_REQUEST})
    try{
        const res= await axios.get(`http://localhost:4500/order/getorders`,{
            headers:{
                Authorization:token
            }
        })
        console.log(res)
        dispatch({type:ORDER_GET_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({
            type:ORDER_GET_FAILURE
        })
    }
}