/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';
import InputField from './InputField';
import Button from './Button';

class EnterMessage extends React.Component {

    render() {
        return (
            <div>
                <InputField value={this.props.value} onChange={this.props.changeHandler} type="input" placeholder="Enter your message" required/>
                <Button onClick={this.props.sendMessage} value="Send"/>
            </div>
        )
    }
}

export default EnterMessage;