import React from 'react';
import LoginForm from "./LoginForm";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from "./Login.module.css"

const Login = (props) => {

    let loginData = (values) => {
        const {login, password} = values;
        props.login(login, password)
    }

    if (props.isAuth) {
        debugger;
        return <Redirect to={'/characters'} />
    }

    return (
        <div className={s.content}>
            <LoginForm onSubmit={loginData}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.userAuthorize.isAuth
});

export default connect(mapStateToProps, {login})(Login);