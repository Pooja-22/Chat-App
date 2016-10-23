/**
 * Created by pooja on 24/10/16.
 */

import React from 'react';
import Button from '../components/Button';

class Header extends React.Component {

    render() {

        let {clickHandler, btnText, greetings, spanText} = this.props;
        
        return (
            
            <div>
                <Button onClick={clickHandler} value={btnText}/>
                <span>
                    {greetings} {spanText}
                </span>
            </div>
            
        );

    }
}

export default Header;


