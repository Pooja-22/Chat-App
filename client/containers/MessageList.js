/**
 * Created by pooja on 24/10/16.
 */

import React from 'react';
import Message from './Message';
import {getCookie} from '../services/utilService';

class MessageList extends React.Component {

    constructor() {
        super()
        this.state = {
            token: ''
        }
    }

    componentDidMount() {
        var token = getCookie('token');
        this.setState({
            token: token
        })
    }

    render() {
        console.log(this.state)

        let {messages, className} = this.props;

        return (
            <div className={className}>
                {messages.map(
                    function (message, i) {
                        return <Message message={message} key={i} />
                    }
                )}
            </div>
        );

    }
}

export default MessageList;

