/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';

class Message extends React.Component {

    render() {

        let {token, message} = this.props;

        return (
            <div className="subChatArea">
                <div className="circle">
                </div>
                <p className = 'subChatAreaP'>

                    <span className={token == message.from.id ? 'right' : 'left'}>
                        {message.from.name}
                    </span><br/>

                    <span className={token == message.from.id ? 'left' : 'right'} style={{marginTop:-17}}>
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