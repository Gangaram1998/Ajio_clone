import axios from "axios"
import { DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS, GET_FAILURE, GET_REQUEST, GET_SUCCESS, POST_FAILURE, POST_REQUEST, POST_SUCCESS } from "./actionType"

export const GetData=(obj)=>async(dispatch)=>{
    dispatch({type:GET_REQUEST})
    try{
        const res=await axios.get("http://localhost:4500/products",obj)
        return dispatch({type:GET_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({type:GET_FAILURE})
    }
}


export const deleteProduct=(id,token)=>async(dispatch)=>{
    dispatch({type:DELETE_REQUEST})
    try{
        const res=await axios.delete(`http://localhost:4500/products/delete/${id}`,{
            headers:{
                Authorization:token
            }
        })
        dispatch({type:DELETE_SUCCESS})
        return {status:res.data.status}
    }catch(err){
        dispatch({type:DELETE_FAILURE})
    }
}

export const addProduct=(obj,token)=>async(dispatch)=>{
    dispatch({type:POST_REQUEST})
    try{
        const res=await axios.post(`http://localhost:4500/products/addproduct`,obj,{
            headers:{
                Authorization:token
            }
        })
        dispatch({type:POST_SUCCESS})
        return {status:res.data.status}
    }catch(err){
        dispatch({type:POST_FAILURE})
    }
}


export const updateProduct=(id,obj,token)=>async(dispatch)=>{
    dispatch({type:DELETE_REQUEST})
    try{
        const res=await axios.patch(`http://localhost:4500/products/update/${id}`,obj,{
            headers:{
                Authorization:token
            }
        })
        dispatch({type:DELETE_SUCCESS})
        return {status:res.data.status}
    }catch(err){
        dispatch({type:DELETE_FAILURE})
    }
}

