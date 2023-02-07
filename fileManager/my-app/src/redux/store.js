import {fileReducer} from "./reducers";
import {combineReducers, createStore} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    fileReducer
})
export default createStore(rootReducer)
