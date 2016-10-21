/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';

class Message extends React.Component {
    render () {
        return (
            <span>
                {this.props.message}<br/> 
            </span>
        )
    }
}

export default Message;