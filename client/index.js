/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store'
import {socket} from './socket';
import {messageReceived} from './actions/chat.action';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {IntlProvider, FormattedMessage} from 'react-intl';

const store = configureStore();

ReactDOM.render(<Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
    </Provider>
    , document.getElementById('app'));
