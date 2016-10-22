/**
 * Created by pooja on 21/10/16.
 */

import {MESSAGE_RECEIVED, MESSAGE_SENT, MESSAGES_LOADED} from '../constants';
import axios from 'axios';
import {socket} from '../socket';

export function loadMessages(user) {
    return (dispatch) => {
        axios({
            method: 'get',
            url: '/api/chat'
        }).then((response) => {
            dispatch(messagesLoaded(user, response.data));
        })
    }
}

export default function messagesLoaded (user, messages) {
    return {
        type : MESSAGES_LOADED,
        state : {
            user : user,
            messages : messages
        }
    }
}

export function sendMessage(message, user) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: '/api/chat',
            data : {
                text : message,
                from : user
            }
        }).then((response) => {
            socket.emit('chat', {text : message, from : user, time : response.data.time})
        })
    }
}

export function messageReceived (message) {
    return {
        type: MESSAGE_RECEIVED,
        message
    }
}








