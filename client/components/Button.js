/**
 * Created by pooja on 23/10/16.
 */

import React from 'react';

class Button extends React.Component {

    render() {

        let {value, onClick } = this.props;

        return (
            <button onClick={this.props.onClick}>{this.props.value}</button>
        );

    }
}

export default Button;

