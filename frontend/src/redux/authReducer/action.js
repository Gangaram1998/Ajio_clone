import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actionTypes"
import axios from "axios"



export const LoginAction=(userData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const res=await axios.post(`http://localhost:4500/user/login`,userData)
        if(res.data.status === 200){
            dispatch({type:LOGIN_SUCCESS,payload:res.data})
            return {satus:1,msg:res.data.message}
        }
        else{
            dispatch({type:LOGIN_FAILURE})
            return {status:0,"msg":res.data.message}
        }
    }
    catch(err){
        dispatch({type:LOGIN_FAILURE})
    }


}

export const LogoutAction=(dispatch)=>{
   return dispatch({type:LOGOUT})
}