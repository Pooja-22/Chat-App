/**
 * Created by pooja on 22/10/16.
 */

import React from 'react';
import {connect} from 'react-redux';
import * as loginActions from '../actions/login.action';
import {getCookie} from '../services/utilService';
import { browserHistory } from 'react-router';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

require('../assets/css/style.css');

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            errorMessage : false
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.login = this.login.bind(this);
        this.signUp = this.signUp.bind(this);
        this.showError = this.showError.bind(this);
    }

    componentWillMount() {
        let token = getCookie('token');
        if(token)
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
        if(this.state.userName)
            this.props.dispatch(loginActions.login(this.state.userName))
        else
            this.showError()
    }

    signUp() {
        if(this.state.userName)
            this.props.dispatch(loginActions.signUp(this.state.userName))
        else
            this.showError()
    }

    showError () {
        this.setState({
            errorMessage : true
        })
    }

    render() {
        return (
            <div>
                <InputField value={this.state.userName} onChange={this.changeHandler} type="input" placeholder="Enter your Username" required/>
                <Button onClick={this.login} value="Sign In"/>
                <Button onClick={this.signUp} value="Sign Up"/>
                <Paragraph className={!this.state.errorMessage ? "classHide" : "classShow"} value="Please enter user name"/>
            </div>
        )
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Login)


