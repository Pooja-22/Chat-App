/**
 * Created by pooja on 21/10/16.
 */

import message from './message.reducer';
import login from './login.reducer';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    message,
    login
});

export default rootReducer;