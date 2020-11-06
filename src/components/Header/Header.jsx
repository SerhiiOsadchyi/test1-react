import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <div className={s.login}>
            {(props.isAuth) ?
                <div>
                    <span className={s.user}>{props.login}</span>
                    <button onClick={props.logout}>Logout</button>
                </div>
                : <NavLink to='/login'>Login</NavLink>
            }
        </div>
    )
}

export default Header;