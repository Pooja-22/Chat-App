/**
 * Created by pooja on 21/10/16.
 */

import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store'
import App from './containers/App';
import {socket} from './socket';
import {receiveMessage} from './actions'

const store = configureStore();

socket.on('chat', (data) => {
    store.dispatch(receiveMessage(data))
});

ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'));
