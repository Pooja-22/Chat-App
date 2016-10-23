/**
 * Created by pooja on 24/10/16.
 */

import React from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

class InputArea extends React.Component {

    render() {
        
        let {value, changeHandler, sendMessage } = this.props;
        
        return (
            <div>
                
                <InputField value={balue} onChange={changeHandler} type="input" placeholder="Enter your message" required/>
                
                <Button onClick={sendMessage} value="Send"/>
                
            </div>
        )
    }
}

export default InputArea;
