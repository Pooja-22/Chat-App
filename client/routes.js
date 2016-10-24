/**
 * Created by pooja on 13/10/16.
 */

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Login from './containers/Login'
import App from './containers/App';
import ChatRoom from './containers/ChatRoom';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="chat" component={ChatRoom}/>
    </Route>
)
