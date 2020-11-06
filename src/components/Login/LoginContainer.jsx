import React from 'react';
import LoginForm from "./LoginForm";
import {checkSession, login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from "./Login.module.css"
import Login from "./Login";

const LoginContainer = (props) => {

    if (props.isAuth) {
        debugger;
        return <Redirect to={'/characters'} />
    }

    return (
        <div className={s.content}>
            <Login />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.userAuthorize.isAuth
});

export default connect(mapStateToProps, {checkSession})(LoginContainer);