/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';
import {connect} from 'react-redux';
import * as chatAction from '../actions';
import Message from '../components/Message'

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
        this.props.dispatch(chatAction.sendMessage(this.state.message));
    }

    changeHandler (e) {
        this.setState ({
            message : e.target.value
        })

    }

    render() {
        return (
            <div>
                <h1>Hello</h1>

                <input type="text" onChange={this.changeHandler}/>
                <button onClick={this.sendMessage}>Send</button>

                {this.props.messages.map(
                    function (message, i) {
                        return <Message message={message.message} key={i}/>
                    }
                )}
                
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