/**
 * Created by pooja on 21/10/16.
 */

import {createStore} from 'redux';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
import rootReducer from '../reducers';

export default function configureStore() {

    /**
     * Creating store
     */

    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
}
