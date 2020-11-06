import React from 'react';
import s from './Characters.module.css'
import Race from "./Race";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {checkSession} from "../../redux/authReducer";

const Characters = (props) => {

    let isAuth = props.isAuth;
    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={s.content}>
            <Race/>
            <Race/>
            <Race/>
            <Race/>
        </div>
    )

}

const mapStateToProps = (state) => ({
        isAuth: state.userAuthorize.isAuth,
})

export default connect(mapStateToProps, {checkSession}) (Characters);