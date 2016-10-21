/**
 * Created by pooja on 21/10/16.
 */

import {createStore} from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'

export default function configureStore () {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
}
