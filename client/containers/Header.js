/**
 * Created by pooja on 24/10/16.
 */

import React from 'react';
import Button from '../components/Button';

class Header extends React.Component {

    render() {

        let {clickHandler, btnText, greetings, spanText , className} = this.props;
        
        return (
            
            <div className={className}>
                <Button onClick={clickHandler} value={btnText}/>
                <span>
                    {greetings} {spanText}
                </span>
            </div>
            
        );

    }
}

export default Header;


