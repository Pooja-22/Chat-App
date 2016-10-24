/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';
import {connect} from 'react-redux';
require('../assets/css/style.css');

class App extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className="main">
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default connect()(App)