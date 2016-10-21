/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';
import {connect} from 'react-redux';
import * as chatAction from '../actions';
import Message from '../components/Message'
import EnterMessage from '../components/EnterMessageArea';
require('../assets/css/style.css');

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            message : ''
        };
        this.sendMessage = this.sendMessage.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    sendMessage () {
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
                <div className="chatArea">
                    {this.props.messages.map(
                        function (message, i) {
                            return <Message message={message.message} key={i}/>
                        }
                    )}
                </div>
                
                <div className="inputArea">
                    <EnterMessage changeHandler={this.changeHandler} sendMessage={this.sendMessage} />
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.message
    }
}

export default connect(mapStateToProps)(App)