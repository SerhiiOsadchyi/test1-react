import React from 'react';
import Header from "./Header";
import {checkSession, logout} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.checkSession();
    }

    render() {
        return(
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                logout={this.props.logout}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.userAuthorize.isAuth,
    login: state.userAuthorize.login,
    logout: state.userAuthorize.logout
});

export default connect(mapStateToProps, {checkSession, logout})(HeaderContainer)