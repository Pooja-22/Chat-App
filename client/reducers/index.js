/**
 * Created by pooja on 21/10/16.
 */

import {combineReducers} from 'redux'
import message from './message.reducer';

const rootReducer = combineReducers({
    message
});

export default rootReducer;