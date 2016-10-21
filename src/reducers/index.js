/**
 * Created by pooja on 21/10/16.
 */

import message from './message.reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({message});

export default rootReducer;