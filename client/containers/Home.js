/**
 * Created by pooja on 22/10/16.
 */

import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {getCookie, setCookie} from '../services/utilService';
import {socket} from '../socket';
import * as chatAction from '../actions/chat.action';
import * as userAction from '../actions/login.action';
import Header from './Header';
import MessageList from './MessageList';
import InputArea from './InputArea';
import Paragraph from '../components/Paragraph';

require('../assets/css/style.css');

class Home extends React.Component {
    
    constructor() {
        super();
        this.state = {
            message: '',
            token: '',
            typing: false
        };
        this.sendMessage = this.sendMessage.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    componentWillMount() {
        var token = getCookie('token');
        this.setState({
            token: token
        });
        if (!token)
            browserHistory.push({
                pathname: '/'
            });
        else
            this.props.dispatch(userAction.getUser(token))
    }

    componentDidMount() {
        
        socket.on('typing', user => {
            this.props.dispatch(chatAction.typing(user))
            }
        );
        socket.on('stop typing', user => {
            this.props.dispatch(chatAction.stopTyping(user))
            }
        );
        socket.on('chat', (data) => {
            this.props.dispatch(chatAction.messageReceived(data))
        });

    }

    sendMessage(e) {
        e.preventDefault();
        if (this.state.message) {
            this.props.dispatch(chatAction.sendMessage(this.state.message, {
                name: this.props.user.userName,
                id: this.state.token
            }));
            socket.emit('stop typing', {user: this.props.typingBy});
            this.setState({typing: false});
            this.setState({
                message: ''
            });
        }
    }

    changeHandler(event) {
        if (event.target.value.length > 0 && !this.state.typing) {
            socket.emit('typing', {user: this.props.user.userName});
            this.setState({typing: true});
        }
        this.setState({
            message: event.target.value
        })

    }

    logOut () {
        setCookie('token', '');
        browserHistory.push({
            pathname: '/'
        });
    }

    render() {
        return (
            <div className="home">
                
                <Header clickHandler={this.logOut} btnText='Log Out' spanText={this.props.user.userName} greetings="Hello" className="header"/>
                
                <MessageList messages={this.props.messages} className="chatArea"  />

                <Paragraph className={(!this.props.typingBy || this.props.typingBy === this.props.user.userName) ? "classHide" : "classShow"}
                    typingBy = {this.props.typingBy} value='is typing...'/>
                
                <InputArea className="inputArea" value = {this.state.message} changeHandler={this.changeHandler} sendMessage={this.sendMessage}/>
                
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        messages: state.message.messages,
        user: state.message.user,
        typingBy: state.message.typingBy
    }
}

export default connect(mapStateToProps)(Home);