import {  applyMiddleware, legacy_createStore } from "redux";
import { Reducer } from "./Reducer";
import thunk from "redux-thunk";
export const Store= legacy_createStore(Reducer,applyMiddleware(thunk))