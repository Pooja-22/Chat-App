/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';
import {getCookie} from '../services/utilService';
import Paragraph from '../components/Paragraph';

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
            <Paragraph className={(this.state.sendByMe ? 'left' : 'right')}>
                <span>
                    {this.props.message.text}<br/>
                </span>
                <span className="sendBy">
                    {this.state.sendByMe ? '' : this.props.message.from.name}<br/>
                </span>
            </Paragraph>
        )
    }
}

export default Message;