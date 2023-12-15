import React from 'react'
import { ERROR, LOGOUT, MSG, SIGNIN, SIGNUP } from "./ActionType"
let initialState = {
    user: {},
    isLogin: false,
    isError: false,
    Message: ""

}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
            return { ...state, user: action.payload, isLogin: true, Message: "" }
        case SIGNUP:
            return { ...state, Message: action.payload }
        case LOGOUT:
            return  initialState
        case MSG:
            return { ...state, Message: action.payload }
        case ERROR:
            return { ...state, Message: action.payload, isError: true }
        default:
            return state;
    }

}
