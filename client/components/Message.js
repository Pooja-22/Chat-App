/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';

class Message extends React.Component {
    render () {
        return (
            <p  className="messageArea">
                {this.props.message}<br/>
            </p>
        )
    }
}

export default Message;