/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';

class EnterMessage extends React.Component {

    render() {
        return (
            <div>
                <input type="text" onChange={this.props.changeHandler}/>
                <button onClick={this.props.sendMessage}>Send</button>
            </div>
        )
    }
}

export default EnterMessage;