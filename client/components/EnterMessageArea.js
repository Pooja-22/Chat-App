/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';
import InputField from './InputField'

class EnterMessage extends React.Component {

    render() {
        return (
            <div>
                <InputField value={this.props.value} onChange={this.props.changeHandler} type="input" placeholder="Enter your message" required/>
                <button onClick={this.props.sendMessage}>Send</button>
            </div>
        )
    }
}

export default EnterMessage;