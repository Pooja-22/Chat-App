/**
 * Created by pooja on 24/10/16.
 */

import {USER_EXISTS} from '../constants';

let initialState = {
    message : ''
};

export default function message(state = initialState, action) {

    switch (action.type) {

        case USER_EXISTS :
            return Object.assign({}, state, {message : action.message});

        default :
            return state
    }

}
