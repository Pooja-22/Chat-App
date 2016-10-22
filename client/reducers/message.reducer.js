/**
 * Created by pooja on 21/10/16.
 */

import {MESSAGE_RECEIVED, MESSAGES_LOADED} from '../constants';

let initialState = {
    user : {
        userName : '',
        userId : ''
    },
    messages : [{
        from : {
            name : '',
            id : ''
        },
        text : '',
        time : ''
    }]
};

export default function message(state = initialState, action) {

    switch (action.type) {

        case MESSAGES_LOADED :
            return Object.assign({}, state, {user : action.state.user, messages: [...action.state.messages]});

        case MESSAGE_RECEIVED:
            return Object.assign({}, state, {messages: [...state.messages, action.message]});
        
        default :
            return state
    }

}

