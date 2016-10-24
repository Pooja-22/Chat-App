/**
 * Created by pooja on 24/10/16.
 */

import React from 'react';
import Message from './Message';
import ReactDOM from 'react-dom';

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
                        return <Message message={message} key={i}/>
                    }
                )}
            </div>
        );

    }
}

export default MessageList;

