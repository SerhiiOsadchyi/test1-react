import React from 'react';
import './App.css';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Characters from "./components/Characters/Characters";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {isSessionStillActive} from "./redux/authReducer";
import Preloader from "./common/Preloader/Preloader";
import LoginContainer from "./components/Login/LoginContainer";

class App extends React.Component{

    componentDidMount() {
        this.props.isSessionStillActive()
    }

    render() {
/*        if(!this.props.isAuth) {
            return <Preloader />
        }*/
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/characters'}/>}/>
                        <Route path='/login' render={() => <LoginContainer />}/>
                        <Route path='/characters' render={() => <Characters/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.userAuthorize.isAuth
})

export default compose (
    withRouter,
    connect(mapStateToProps, {isSessionStillActive})
)(App);
