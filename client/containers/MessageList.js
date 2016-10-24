/**
 * Created by pooja on 24/10/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

class MessageList extends React.Component {

    componentDidUpdate() {
        let elm = ReactDOM.findDOMNode(this.refs.chatView);
        elm.scrollTop = elm.scrollHeight - elm.clientHeight;
    }

    render() {
        let {messages, className} = this.props;
        return (
            <div className={className} ref="chatView">
                {messages.map(
                    function (message, i) {
                        message.isCurrentuser = message.isSent;
                        return <Message message={message} key={i}/>
                    }
                )}
            </div>
        );

    }
}

export default MessageList;

