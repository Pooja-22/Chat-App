/**
 * Created by pooja on 23/10/16.
 */

import React from 'react';

class Paragraph extends React.Component {

    render() {

        let {value, className } = this.props;

        return (
            <p className={this.props.className}>{this.props.value}</p>
        );

    }
}

export default Paragraph;

