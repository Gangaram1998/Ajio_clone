import axios from "axios"
import { DASHBOARD_GET_FAILURE, DASHBOARD_GET_REQUEST, DASHBOARD_GET_SUCCESS } from "./actionTypes"

export const Dashboarddata=()=>async(dispatch)=>{
    dispatch({type:DASHBOARD_GET_REQUEST})
    try{
        const res=await axios.get("http://localhost:4500/admin/dashboard")
        console.log(res.data)
        dispatch({type:DASHBOARD_GET_SUCCESS,payload:res.data})
    }catch(err){
        dispatch({type:DASHBOARD_GET_FAILURE})
    }
}