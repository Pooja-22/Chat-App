/**
 * Created by pooja on 22/10/16.
 */

import React from 'react';
import {browserHistory} from 'react-router';

require('../assets/css/style.css');

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: ''
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.login = this.login.bind(this);
    }

    changeHandler(e) {
        this.setState({
            userName: e.target.value
        });
    }

    login() {
        if (this.state.userName)
            browserHistory.push({
                pathname: '/chat',
                query: {
                    userName: this.state.userName
                }
            });
    }

    render() {
        return (
            <div className="loginDiv">
                <input value={this.state.userName} onChange={this.changeHandler} type="input"
                       placeholder="Enter your chat name" required/><br/>
                <button onClick={this.login}> Start</button>
                <br/>
            </div>
        )
    }
}

export default Login
