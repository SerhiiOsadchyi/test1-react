import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";


const reducers = combineReducers( {
    userAuthorize: authReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;