import { CART_GET_REQUEST, CART_GET_SUCCESS, CART_POST_FAILURE, CART_POST_REQUEST, CART_POST_SUCCESS } from "./actionTypes"

const initialState={
    isLoading:false,
    isError:false,
    cartData:[]
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case CART_POST_REQUEST:
            return {...state,isLoading:true}
        case CART_POST_SUCCESS:
            return {...state,isLoading:false}
        case CART_POST_FAILURE:
            return {...state,isLoading:false,isError:true}
        case CART_GET_REQUEST:
            return {...state,isLoading:true}
        case CART_GET_SUCCESS:
            return {...state,cartData:payload,isLoading:false}
        case CART_POST_FAILURE:
            return {...state,isLoading:false,isError:true}
        default:
            return state
    }
}