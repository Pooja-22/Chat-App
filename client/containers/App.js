/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
    constructor () {
        super();
    }

    render() {
        return (
            <div>
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default connect()(App)