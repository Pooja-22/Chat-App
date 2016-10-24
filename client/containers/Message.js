/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';
import {getCookie} from '../services/utilService';
import {FormattedRelative} from 'react-intl';


class Message extends React.Component {

    constructor() {
        super();
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

        let {message} = this.props , res = '', value = '';
        if (this.state.token == message.from.id){
            value = 380;
            res = "Me"
        }
        else{
            res = message.from.name.substring(0,1);
            value = 0;
        }

        return (
            <div className="subChatArea" style={{marginLeft : value}}>
                <div className="circle">
                    {res}
                </div>
                <p className = 'subChatAreaP'>

                    <span className='left'>
                        {message.from.name}
                    </span><br/>

                    <span className='right' style={{marginTop:-17}}>
                        <FormattedRelative value={message.time} />
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