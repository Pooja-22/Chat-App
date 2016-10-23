/**
 * Created by pooja on 23/10/16.
 */

import React from 'react';

class InputField extends React.Component {
    
    render() {
        
        let { type, value, onChange, placeholder } = this.props;
        
        return (
            <input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
        );
        
    }
}

export default InputField;
