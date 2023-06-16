import axios from "axios"
import { SINGLE_PRODUCT_GET_FAILURE, SINGLE_PRODUCT_GET_REQUEST, SINGLE_PRODUCT_GET_SUCCESS } from "./actionTypes"

export const GetSingleProduct=(id)=>async(dispatch)=>{
    dispatch({type:SINGLE_PRODUCT_GET_REQUEST})
    try{
        const res=await axios.get(`http://localhost:4500/products/singleproduct/${id}`)
        dispatch({type:SINGLE_PRODUCT_GET_SUCCESS,payload:res.data.product})
    }catch(err){
        dispatch({type:SINGLE_PRODUCT_GET_FAILURE})
    }
}