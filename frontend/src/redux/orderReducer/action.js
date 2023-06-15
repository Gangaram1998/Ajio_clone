import axios from "axios"
import { ORDER_POST_FAILURE, ORDER_POST_REQUEST } from "./actionTypes"

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