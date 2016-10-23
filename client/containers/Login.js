/**
 * Created by pooja on 22/10/16.
 */

import React from 'react';
import {connect} from 'react-redux';
import * as loginActions from '../actions/login.action';
import {getCookie} from '../services/utilService';
import {browserHistory} from 'react-router';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

require('../assets/css/style.css');

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.login = this.login.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    componentWillMount() {
        let token = getCookie('token');
        if (token)
            browserHistory.push({
                pathname: '/home'
            });
    }

    changeHandler(e) {
        this.setState({
            userName: e.target.value
        })
    }

    login() {
        this.props.dispatch(loginActions.login(this.state.userName))
    }

    signUp() {
        this.props.dispatch(loginActions.signUp(this.state.userName))
    }

    render() {
        return (
            <div className="loginDiv">
                <InputField value={this.state.userName} onChange={this.changeHandler} type="input"
                            placeholder="Enter Username" required/><br/>
                <Button onClick={this.login} value="Sign In"/>
                <Button onClick={this.signUp} value="Sign Up"/><br/>
                <Paragraph className={!this.props.errorMessage ? "classHide" : "classShow"}
                           value={this.props.errorMessage}/><br/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.login.message
    };
}

export default connect(mapStateToProps)(Login)


