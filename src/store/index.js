/**
 * Created by pooja on 21/10/16.
 */

import {createStore} from 'redux';
import rootReducer from '../reducers'

export default function configureStore () {
    return createStore(
        rootReducer
    )
}
