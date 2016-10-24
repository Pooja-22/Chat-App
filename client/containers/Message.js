/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';
import {FormattedRelative} from 'react-intl';


class Message extends React.Component {

    constructor() {
        super();
    }

    render() {

        let {message} = this.props, key = '', cssClass = '';
        if (message.isCurrentuser) {
            cssClass = 'leftAlign';
            key = "Me"
        }
        else {
            key = message.from.name.substring(0, 1);
            cssClass = 'rightAlign';
        }


        return (
            <div className={"subChatArea " + cssClass}>

                <div className={"circle " + key.toLowerCase()}>
                    {key}
                </div>

                <div className='subChatAreaP'>

                    <span className='left username'>{message.from.name}</span>

                    <span className='right top time'><FormattedRelative value={message.time}/></span>

                    <span className="message">{message.text}</span>

                </div>

            </div>


        )
    }
}

export default Message;