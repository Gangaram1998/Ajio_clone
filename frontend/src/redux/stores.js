import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { reducer as authReducer } from "./authReducer/reducer"
import {reducer as getdataReducer} from "./getdataReducer/reducer"
import {reducer as singleproductReducer} from "./singleProuductReducer/reducer"
import {reducer as cartReducer} from "./cartReducer/reducer"
const rootReducers=combineReducers({
    authReducer,
    getdataReducer,
    singleproductReducer,
    cartReducer
})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk))