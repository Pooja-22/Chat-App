/**
 * Created by pooja on 23/10/16.
 */

import React from 'react';

class Button extends React.Component {

    render() {

        let {value, onClick, className } = this.props;

        return (
            <button onClick={this.props.onClick}  className={this.props.className}>{this.props.value}</button>
        );

    }
}

export default Button;

