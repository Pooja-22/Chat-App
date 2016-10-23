/**
 * Created by pooja on 22/10/16.
 */

import React from 'react';
import {connect} from 'react-redux';
import * as loginActions from '../actions/login.action';
import {getCookie} from '../services/utilService';
import { browserHistory } from 'react-router';
import InputField from '../components/InputField';

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
    }

    componentWillMount() {
        var token = getCookie('token');
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
            this.setState({
                errorMessage : true
            })
    }

    signUp() {
        if(this.state.userName)
            this.props.dispatch(loginActions.signUp(this.state.userName))
        else
            this.setState({
                errorMessage : true
            })
    }

    render() {
        return (
            <div>
                <InputField value={this.state.userName} onChange={this.changeHandler} type="input" placeholder="Enter your Username" required/>
                <button onClick={this.login}>Sign In</button>
                <button onClick={this.signUp}>sign Up</button>
                <p className={!this.state.errorMessage ? "classHide" : "classShow"}>
                    Please enter user name
                </p>
            </div>
        )
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Login)


