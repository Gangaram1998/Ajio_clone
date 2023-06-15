import { DASHBOARD_GET_FAILURE, DASHBOARD_GET_REQUEST, DASHBOARD_GET_SUCCESS } from "./actionTypes"

const initialState={
    isLoading:false,
    isError:false,
    Totalorder:0,
    TotalUser:0,
    TotalAdmin:1,
    TotalProduct:0
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case DASHBOARD_GET_SUCCESS:
            return {...state,isLoading:false,Totalorder:payload.orders,TotalAdmin:payload.admins,TotalProduct:payload.products,TotalUser:payload.users}
        case DASHBOARD_GET_REQUEST:
            return {...state,isLoading:true}
        case DASHBOARD_GET_FAILURE:
            return {...state,isLoading:false,isError:true}
        default:
            return state
    }
}