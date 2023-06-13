import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionType"
const initialState={
    isLoading:false,
    isError:false,
    data:[],
    total:0
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_REQUEST:
            return {...state,isLoading:true}
        case GET_SUCCESS:
            return {...state,isLoading:false,data:payload.products,total:payload.total}
        case GET_FAILURE:
            return {...state,isLoading:false,isError:true}
        default:
            return state
    }
}