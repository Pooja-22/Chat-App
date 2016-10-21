/**
 * Created by pooja on 21/10/16.
 */

import {SEND_MESSAGE, RECEIVE_MESSAGE, MESSAGE_SENT} from '../constants';
import {socket} from '../socket';


export function messageSent(message) {
    return {
        type: MESSAGE_SENT,
        message
    }
}

export function receiveMessage(message) {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

export function sendMessage(message) {
    return (dispatch) => {
        socket.emit('news', {message: message});
    }
}



