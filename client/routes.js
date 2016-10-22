/**
 * Created by pooja on 13/10/16.
 */

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Login from './containers/Login'
import App from './containers/App';
import Home from './containers/Home';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="home" component={Home}/>
    </Route>
)
