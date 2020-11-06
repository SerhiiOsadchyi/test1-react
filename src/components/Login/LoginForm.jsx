import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from './Login.module.css';

const LoginForm = (props) => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className={s.formField}>
                <label htmlFor="login">Login</label>
                <Field name="login" component="input" type="text"/>
            </div>
            <div className={s.formField}>
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )

}

const LoginFormRedux = reduxForm({form: 'login'})(LoginForm);

export default LoginFormRedux;