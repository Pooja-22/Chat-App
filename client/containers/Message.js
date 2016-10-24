/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';
import {getCookie} from '../services/utilService';

class Message extends React.Component {

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

        let {message} = this.props;
        let value= ''
        if (this.state.token == message.from.id)
            value = 380
        else
            value = 0

        return (
            <div className="subChatArea" style={{marginLeft : value}}>
                <div className="circle">
                </div>
                <p className = 'subChatAreaP'>

                    <span className='left'>
                        {message.from.name}
                    </span><br/>

                    <span className='right' style={{marginTop:-17}}>
                        time
                    </span><br/>

                    <span>
                        {message.text}
                    </span>

                </p>
            </div>


        )
    }
}

export default Message;