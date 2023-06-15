import { ORDER_POST_FAILURE, ORDER_POST_REQUEST, ORDER_POST_SUCCESS } from "./actionTypes"

const initialState={
    isLoading:false,
    isError:false
}

export const reducer=(state=initialState,{type})=>{
    switch(type){
        case ORDER_POST_REQUEST:
            return {...state,isLoading:true}
        case ORDER_POST_SUCCESS:
            return {...state,isLoading:false}
        case ORDER_POST_FAILURE:
            return {...state,isLoading:false,isError:true}
        default:return state
    }
}