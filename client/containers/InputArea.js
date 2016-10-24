/**
 * Created by pooja on 24/10/16.
 */

import React from 'react';

class InputArea extends React.Component {

    render() {

        let {value, changeHandler, className, sendMessage} = this.props;

        return (
            <div className={className}>

                <form onSubmit={sendMessage}>

                    <input value={value} onChange={changeHandler} type="input"
                                placeholder="Type your message here..." required/>
                    <button> Send</button>

                </form>

            </div>
        )
    }
}

export default InputArea;
