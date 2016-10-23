/**
 * Created by pooja on 23/10/16.
 */

import React from 'react';

class Paragraph extends React.Component {

    render() {

        let {value, className, typingBy, children } = this.props;

        return (
            <p className={className}>{typingBy} {value} {children}</p>
        );

    }
}

export default Paragraph;

