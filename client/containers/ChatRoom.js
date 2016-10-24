/**
 * Created by pooja on 22/10/16.
 */

import React from 'react';
import {connect} from 'react-redux';
import {socket} from '../socket';
import {browserHistory} from 'react-router';
import * as chatAction from '../actions/action.js';
import Header from './Header';
import MessageList from './MessageList';
import InputArea from './InputArea';

require('../assets/css/style.css');

class ChatRoom extends React.Component {

    constructor() {
        super();
        this.state = {
            message: '',
            typing: false,
            userName: '',
            currentUser: ''
        };
        this.submitMessage = this.submitMessage.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentWillMount() {
        this.props.loadChatHistory()
    }

    componentDidMount() {

        this.setState({
            userName: this.props.location.query.userName
        });

        if (!socket.id) {
            browserHistory.push({
                pathname: '/'
            });
        }
    }

    submitMessage(e) {
        e.preventDefault();
        if (this.state.message) {
            this.props.sendMessage(this.state.message, {name: this.state.userName});
            socket.emit('stop typing', {user: this.props.typingBy});
            this.setState({typing: false});
            this.setState({message: ''});
        }
    }

    changeHandler(event) {
        if (event.target.value.length > 0 && !this.state.typing) {
            socket.emit('typing', {user: this.state.userName});
            this.setState({typing: true});
        }
        this.setState({
            message: event.target.value
        });
    }

    render() {
        return (
            <div className="home">
                <Header spanText={this.state.userName} greetings="Hello" className="header"/>
                <MessageList messages={this.props.messages} className="chatArea"/>
                <p className={(!this.props.typingBy || this.props.typingBy === this.state.userName) ? "classHide" : "classShow"}>
                    {this.props.typingBy} is typing...</p>
                <InputArea className="inputArea" value={this.state.message} changeHandler={this.changeHandler}
                           sendMessage={this.submitMessage}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    messages: state.message.messages,
    typingBy: state.message.typingBy
});

const mapDispatchToProps = (dispatch) => ({
    loadChatHistory: () => {
        dispatch(chatAction.loadMessages());
    },
    sendMessage: (message, user) => {
        dispatch(chatAction.sendMessage(message, user));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);