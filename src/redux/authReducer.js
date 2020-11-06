import React from 'react';
import {userAPI} from "../API/api";

const LOGIN_SUCCESS = 'authReducer/LOGIN_SUCCESS';
const SESSION_STILL_ACTIVE = 'authReducer/SESSION_STILL_ACTIVE'
const initialState = {
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
   //debugger
    switch (action.type) {
        case SESSION_STILL_ACTIVE:
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export const setAuthUserSuccess = (login, isAuth) => ( { type: LOGIN_SUCCESS, payload: {login, isAuth} } )
export const isSessionStillActive = (isAuth) => ( { type: SESSION_STILL_ACTIVE, payload: {isAuth} } )

export const login = (login, password) => async (dispatch) => {
    let response = await userAPI.login(login, password);
    if (response.data.success) {
        dispatch(setAuthUserSuccess(login, true))
    }
}

export const checkSession = () => async (dispatch) => {
    debugger
    let response = await userAPI.isSessionStillActive();
    debugger
    if (response.data.success) {
        debugger
        dispatch(isSessionStillActive(true))
    }
}

export const logout = () => async (dispatch) => {
    debugger
    let response = await userAPI.logout();
    console.log(response);
    if (response.data.success) {
        debugger
        dispatch(setAuthUserSuccess(null, false))
    }
}

export default authReducer;