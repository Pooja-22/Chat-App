/**
 * Created by pooja on 24/10/16.
 */

import React from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

class InputArea extends React.Component {

    render() {
        
        let {value, changeHandler, className, sendMessage } = this.props;
        
        return (
            <div className={className}>
                
                <InputField value={value} onChange={changeHandler} type="input" placeholder="Type your message here..." required/>
                
                <Button onClick={sendMessage} value="Send"/>
                
            </div>
        )
    }
}

export default InputArea;
