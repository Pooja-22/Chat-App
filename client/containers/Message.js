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

        let {message} = this.props , key = '', cssClass = '';
        if (this.state.token == message.from.id){
            cssClass =   'leftAlign';
            key = "Me"
        }
        else{
            key = message.from.name.substring(0,1);
            cssClass = 'rightAlign';
        }


        return (
            <div className={"subChatArea " + cssClass}>

                <div className={"circle " + key.toLowerCase()}>
                    {key}
                </div>

                <p className = 'subChatAreaP'>

                    <span className='left'>{message.from.name}</span><br/>

                    <span className='right top'><FormattedRelative value={message.time} /></span><br/>

                    <span>{message.text}</span>

                </p>

            </div>


        )
    }
}

export default Message;