/**
 * Created by pooja on 24/10/16.
 */

import React from 'react';

class Header extends React.Component {

    render() {

        let {greetings, spanText, className} = this.props;

        return (

            <div className={className}>
                <span>
                    {greetings} {spanText}
                </span>
            </div>

        );

    }
}

export default Header;


