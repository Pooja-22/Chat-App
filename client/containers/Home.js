/**
 * Created by pooja on 22/10/16.
 */

import React from 'react';
import {connect} from 'react-redux';
import * as chatAction from '../actions/chat.action';
import * as userAction from '../actions/login.action';
import Message from '../components/Message'
import EnterMessage from '../components/EnterMessageArea';
import {getCookie} from '../services/utilService';
import { browserHistory } from 'react-router';

require('../assets/css/style.css');

class Home extends React.Component {
    constructor () {
        super();
        this.state = {
            message : ''
        };
        this.sendMessage = this.sendMessage.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentWillMount() {
        var token = getCookie('token');
        if(!token)
            browserHistory.push({
                pathname: '/'
            });
        else 
            this.props.dispatch(userAction.getUser(token))
    }

    sendMessage () {
        console.log("sending--------------")
        if(this.state.message){
            this.props.dispatch(chatAction.sendMessage(this.state.message));
            this.setState ({
                message : ''
            });
        }
    }

    changeHandler (e) {
        this.setState ({
            message : e.target.value
        })

    }
    render() {
        return (
            <div>
                <h1>Hello {this.props.user}</h1>
                <div className="chatArea">
                    {this.props.messages.map(
                        function (message, i) {
                            return <Message message={message.message} key={i}/>
                        }
                    )}
                </div>

                <div className="inputArea">
                    <EnterMessage changeHandler={this.changeHandler} sendMessage={this.sendMessage}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.message.messages,
        user: state.message.user
    }
}

export default connect(mapStateToProps)(Home);