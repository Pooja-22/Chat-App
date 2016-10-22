/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';

class Message extends React.Component {
    render () {
        return (
            <p  className="messageArea">
                {this.props.message.text}<br/>
                By---<span>{this.props.message.from}</span>
                @---<span>{this.props.message.time}</span>
            </p>
        )
    }
}

export default Message;