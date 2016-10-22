/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';
import {getCookie} from '../services/utilService';

class Message extends React.Component {

    constructor() {
        super()
        this.state = {
            sendByMe: ''
        }
    }

    componentWillMount() {
        var token = getCookie('token');
        if(token !== this.props.message.from.id )
            this.setState ({
                sendByMe : false
            });
        else
            this.setState ({
                sendByMe : true
            });

    }

    render() {

        return (
            <p className={(this.state.sendByMe ? 'left' : 'right')}>
                {this.props.message.text}<br/>
                By--{this.props.message.from.name}<br/>
                @--{this.props.message.time}<br/>
                {this.props.message.from.id}<br/>

            </p>
        )
    }
}

export default Message;