/**
 * Created by pooja on 21/10/16.
 */

import {MESSAGE_RECEIVED, MESSAGES_LOADED, TYPING, STOP_TYPING} from '../constants';

let initialState = {
    messages: [{
        from: {
            name: ''
        },
        text: '',
        time: ''
    }],
    typingBy: ''
};

export default function message(state = initialState, action) {

    switch (action.type) {

        case MESSAGES_LOADED :
            return Object.assign({}, state, {user: action.state.user, messages: [...action.state.messages]});

        case MESSAGE_RECEIVED:
            return Object.assign({}, state, {messages: [...state.messages, action.message]});

        case TYPING :
            return Object.assign({}, state, {typingBy: action.userName});

        case STOP_TYPING :
            return Object.assign({}, state, {typingBy: ''});

        default :
            return state
    }

}

