/**
 * Created by pooja on 21/10/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {Router, browserHistory} from 'react-router';
import {register} from './socket'
import routes from './routes';
import configureStore from './store';

const store = configureStore();
register(store.dispatch)

ReactDOM.render(<Provider store={store}>
        <IntlProvider>
            <Router routes={routes} history={browserHistory}/>
        </IntlProvider>
    </Provider>,
    document.getElementById('app'));
