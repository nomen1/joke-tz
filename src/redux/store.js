import {createStore, combineReducers, applyMiddleware} from "redux"

import appReducer from "./appReducer"
import  thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"



let reducers = combineReducers({
    app:appReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))




export default store