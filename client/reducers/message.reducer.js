/**
 * Created by pooja on 21/10/16.
 */

import {SEND_MESSAGE, RECEIVE_MESSAGE, MESSAGE_SENT} from '../constants'

export default function message(state = [], action) {

    switch (action.type) {
        case SEND_MESSAGE:
            return action.message;
        case RECEIVE_MESSAGE:
            return [...state, action.message];
        case MESSAGE_SENT:
            return;
        default :
            return state
    }

}

